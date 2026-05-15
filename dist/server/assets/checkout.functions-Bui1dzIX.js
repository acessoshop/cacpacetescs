import { T as TSS_SERVER_FUNCTION, j as createServerFn } from "./server-D8pWyu0D.js";
import { o as objectType, s as stringType, n as numberType, c as arrayType, l as literalType, e as createPixCharge, Q as QRCode, f as supabaseAdmin, g as getTransactionStatus } from "./paradise.server-DUvybL1E.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "fs";
import "util";
import "stream";
import "zlib";
import "assert";
import "buffer";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const ItemSchema = objectType({
  id: stringType(),
  name: stringType().min(1).max(200),
  variant: stringType().max(120).optional(),
  size: stringType().max(40).optional(),
  price: numberType().int().min(1).max(1e6),
  qty: numberType().int().min(1).max(20),
  image: stringType().max(500).optional()
});
const CreateOrderSchema = objectType({
  customer: objectType({
    name: stringType().max(120).optional().or(literalType("")),
    phone: stringType().max(20).optional().or(literalType("")),
    email: stringType().max(120).optional().or(literalType("")),
    cep: stringType().max(9).optional().or(literalType("")),
    address: stringType().max(200).optional().or(literalType("")),
    number: stringType().max(20).optional().or(literalType("")),
    complement: stringType().max(120).optional().or(literalType("")),
    neighborhood: stringType().max(120).optional().or(literalType("")),
    city: stringType().max(120).optional().or(literalType("")),
    state: stringType().max(2).optional().or(literalType(""))
  }).partial().optional().default({}),
  items: arrayType(ItemSchema).min(1).max(20)
});
const onlyDigits = (s) => s.replace(/\D+/g, "");
const createPixOrder_createServerFn_handler = createServerRpc({
  id: "51e33b1469a4253dbb05cfa629837739dd29dca15ec4f1cfb6f92b418184aa0f",
  name: "createPixOrder",
  filename: "src/lib/checkout.functions.ts"
}, (opts) => createPixOrder.__executeServer(opts));
const createPixOrder = createServerFn({
  method: "POST"
}).inputValidator((input) => CreateOrderSchema.parse(input)).handler(createPixOrder_createServerFn_handler, async ({
  data
}) => {
  const amount = data.items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const c = data.customer || {};
  const phoneDigits = c.phone ? onlyDigits(c.phone) : void 0;
  const pix = await createPixCharge({
    amount,
    customer: {
      name: c.name || void 0,
      email: c.email || void 0,
      phone: phoneDigits || void 0
      // CPF é gerado pelo backend (one-click) se não fornecido
    }
  });
  if (!pix.transactionId) {
    throw new Error("Paradise não retornou identificador da transação");
  }
  let qrB64 = pix.qrCodeBase64;
  if (!qrB64 && pix.copyPaste) {
    const dataUrl = await QRCode.toDataURL(pix.copyPaste, {
      width: 320,
      margin: 1
    });
    qrB64 = dataUrl.replace(/^data:image\/png;base64,/, "");
  }
  const {
    data: row,
    error
  } = await supabaseAdmin.from("orders").insert({
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
    expires_at: pix.expiresAt
  }).select("transaction_id").single();
  if (error) {
    console.error("[checkout] insert order failed", error);
    throw new Error("Erro ao salvar pedido");
  }
  return {
    transactionId: row.transaction_id,
    copyPaste: pix.copyPaste,
    qrCodeB64: qrB64,
    amount,
    expiresAt: pix.expiresAt
  };
});
const getOrderStatus_createServerFn_handler = createServerRpc({
  id: "ab7ac558f2d5018cf7be54349328581afb4016bbc0e0894e7b5b0af83494b52a",
  name: "getOrderStatus",
  filename: "src/lib/checkout.functions.ts"
}, (opts) => getOrderStatus.__executeServer(opts));
const getOrderStatus = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  transactionId: stringType().min(1).max(120)
}).parse(input)).handler(getOrderStatus_createServerFn_handler, async ({
  data
}) => {
  const {
    data: order,
    error
  } = await supabaseAdmin.from("orders").select("transaction_id, status, amount_cents, customer_name, customer_email, customer_phone").eq("transaction_id", data.transactionId).maybeSingle();
  if (error || !order) {
    throw new Error("Pedido não encontrado");
  }
  if (order.status === "pending") {
    try {
      const remote = await getTransactionStatus(data.transactionId);
      if (remote.status !== order.status) {
        await supabaseAdmin.from("orders").update({
          status: remote.status,
          paid_at: remote.status === "paid" ? (/* @__PURE__ */ new Date()).toISOString() : null
        }).eq("transaction_id", data.transactionId);
        order.status = remote.status;
      }
    } catch (e) {
      console.warn("[checkout] remote status check failed", e);
    }
  }
  return order;
});
export {
  createPixOrder_createServerFn_handler,
  getOrderStatus_createServerFn_handler
};
