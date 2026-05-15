import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { getTransactionStatus } from "@/lib/paradise.server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
} as const;

const Schema = z.object({ transactionId: z.string().min(1).max(120) });

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

export const Route = createFileRoute("/api/public/order-status")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const { transactionId } = Schema.parse(json);

          const { data: order, error } = await supabaseAdmin
            .from("orders")
            .select(
              "transaction_id, status, amount_cents, customer_name, customer_email, customer_phone",
            )
            .eq("transaction_id", transactionId)
            .maybeSingle();

          if (error || !order) {
            return jsonResponse({ error: "Pedido não encontrado" }, 404);
          }

          if (order.status === "pending") {
            try {
              const remote = await getTransactionStatus(transactionId);
              if (remote.status !== order.status) {
                await supabaseAdmin
                  .from("orders")
                  .update({
                    status: remote.status,
                    paid_at: remote.status === "paid" ? new Date().toISOString() : null,
                  })
                  .eq("transaction_id", transactionId);
                order.status = remote.status;
              }
            } catch (e) {
              console.warn("[api/public/order-status] remote check failed", e);
            }
          }

          return jsonResponse(order);
        } catch (e: any) {
          console.error("[api/public/order-status] error", e);
          const msg = e?.issues ? "Dados inválidos" : e?.message || "Erro interno";
          return jsonResponse({ error: msg }, 400);
        }
      },
    },
  },
});
