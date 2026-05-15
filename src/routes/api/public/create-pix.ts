import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import QRCode from "qrcode";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { createPixCharge } from "@/lib/paradise.server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
} as const;

const ItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(200),
  variant: z.string().max(120).optional(),
  size: z.string().max(40).optional(),
  price: z.number().int().min(1).max(10_000_00),
  qty: z.number().int().min(1).max(20),
  image: z.string().max(500).optional(),
});

const CreateOrderSchema = z.object({
  customer: z
    .object({
      name: z.string().max(120).optional().or(z.literal("")),
      phone: z.string().max(20).optional().or(z.literal("")),
      email: z.string().max(120).optional().or(z.literal("")),
      cep: z.string().max(9).optional().or(z.literal("")),
      address: z.string().max(200).optional().or(z.literal("")),
      number: z.string().max(20).optional().or(z.literal("")),
      complement: z.string().max(120).optional().or(z.literal("")),
      neighborhood: z.string().max(120).optional().or(z.literal("")),
      city: z.string().max(120).optional().or(z.literal("")),
      state: z.string().max(2).optional().or(z.literal("")),
    })
    .partial()
    .optional()
    .default({}),
  items: z.array(ItemSchema).min(1).max(20),
});

const onlyDigits = (s: string) => s.replace(/\D+/g, "");

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

export const Route = createFileRoute("/api/public/create-pix")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const data = CreateOrderSchema.parse(json);
          const amount = data.items.reduce((acc, i) => acc + i.price * i.qty, 0);
          const c = data.customer || {};
          const phoneDigits = c.phone ? onlyDigits(c.phone) : undefined;

          const pix = await createPixCharge({
            amount,
            customer: {
              name: c.name || undefined,
              email: c.email || undefined,
              phone: phoneDigits || undefined,
            },
          });

          if (!pix.transactionId) {
            return jsonResponse({ error: "Paradise não retornou identificador" }, 502);
          }

          let qrB64 = pix.qrCodeBase64;
          if (!qrB64 && pix.copyPaste) {
            const dataUrl = await QRCode.toDataURL(pix.copyPaste, { width: 320, margin: 1 });
            qrB64 = dataUrl.replace(/^data:image\/png;base64,/, "");
          }

          const { data: row, error } = await supabaseAdmin
            .from("orders")
            .insert({
              transaction_id: pix.transactionId,
              customer_name: c.name || "Cliente",
              customer_cpf: "",
              customer_email: c.email || "",
              customer_phone: phoneDigits || "",
              customer_cep: c.cep || null,
              customer_address: c.address || null,
              customer_number: c.number || null,
              customer_complement: c.complement || null,
              customer_neighborhood: c.neighborhood || null,
              customer_city: c.city || null,
              customer_state: c.state || null,
              items_json: data.items,
              amount_cents: amount,
              status: "pending",
              pix_copy_paste: pix.copyPaste || null,
              qr_code_b64: qrB64 || null,
              expires_at: pix.expiresAt,
            })
            .select("transaction_id")
            .single();

          if (error) {
            console.error("[api/public/create-pix] insert failed", error);
            return jsonResponse({ error: "Erro ao salvar pedido" }, 500);
          }

          return jsonResponse({
            transactionId: row.transaction_id,
            copyPaste: pix.copyPaste,
            qrCodeB64: qrB64,
            amount,
            expiresAt: pix.expiresAt,
          });
        } catch (e: any) {
          console.error("[api/public/create-pix] error", e);
          const msg = e?.issues ? "Dados inválidos" : e?.message || "Erro interno";
          return jsonResponse({ error: msg }, 400);
        }
      },
    },
  },
});
