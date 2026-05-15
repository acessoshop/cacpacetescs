import { V as reactExports, L as jsxRuntimeExports } from "./server-D8pWyu0D.js";
import { g as createLucideIcon, d as Route, L as Link, B as Button, t as toast } from "./router-Bn4ndn4_.js";
import { u as useServerFn, g as getOrderStatus } from "./checkout.functions-CW84nWSx.js";
import { d as createClient } from "./paradise.server-DUvybL1E.js";
import { C as ChevronLeft, S as ShieldCheck } from "./shield-check-DfmLQaBm.js";
import { C as CircleCheck } from "./circle-check-C_3K5UZR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "fs";
import "util";
import "stream";
import "zlib";
import "assert";
import "buffer";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode);
function createSupabaseClient() {
  const SUPABASE_URL = "https://twrsuxtoqcixnrziglgu.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cnN1eHRvcWNpeG5yemlnbGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1OTg3NjksImV4cCI6MjA5NDE3NDc2OX0.NGU3o1HOvzFG6uzX9JYwO0tM6M3ss3WMnjXRWoMMoVs";
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
function PixPage() {
  const {
    transactionId
  } = Route.useParams();
  const checkStatus = useServerFn(getOrderStatus);
  const [order, setOrder] = reactExports.useState(null);
  const [secondsLeft, setSecondsLeft] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let mounted = true;
    (async () => {
      const {
        data
      } = await supabase.from("orders").select("qr_code_b64, pix_copy_paste, amount_cents, status, expires_at, items_json").eq("transaction_id", transactionId).maybeSingle();
      if (mounted && data) setOrder(data);
    })();
    return () => {
      mounted = false;
    };
  }, [transactionId]);
  reactExports.useEffect(() => {
    if (!order?.expires_at) return;
    const exp = new Date(order.expires_at).getTime();
    const tick = () => setSecondsLeft(Math.max(0, Math.floor((exp - Date.now()) / 1e3)));
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, [order?.expires_at]);
  reactExports.useEffect(() => {
    if (!order || order.status !== "pending") return;
    const id = setInterval(async () => {
      try {
        const res = await checkStatus({
          data: {
            transactionId
          }
        });
        if (res.status !== order.status) {
          setOrder((o) => o ? {
            ...o,
            status: res.status
          } : o);
          if (res.status === "paid") {
            window.location.href = `/obrigado?t=${encodeURIComponent(transactionId)}`;
          }
        }
      } catch (e) {
        console.error(e);
      }
    }, 4e3);
    return () => clearInterval(id);
  }, [order, transactionId, checkStatus]);
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Carregando pedido..." }) });
  }
  const copy = async () => {
    if (!order.pix_copy_paste) return;
    await navigator.clipboard.writeText(order.pix_copy_paste);
    toast.success("Código PIX copiado!");
  };
  const mins = secondsLeft != null ? Math.floor(secondsLeft / 60) : null;
  const secs = secondsLeft != null ? secondsLeft % 60 : null;
  const items = order.items_json || [];
  const fmt = (c) => (c / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white max-w-[480px] mx-auto pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 bg-white border-b flex items-center px-3 h-14 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "p-1 absolute left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold text-base", children: "Pagamento PIX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-emerald-600 text-xs flex items-center justify-center gap-1 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
          " Aprovação instantânea"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-center text-muted-foreground", children: "Escaneie o QR Code ou copie o código PIX para pagar" }) }),
    order.status === "paid" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-4 bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 text-emerald-600 mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-emerald-800", children: "Pagamento confirmado!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/obrigado", search: {
        t: transactionId
      }, children: "Continuar" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-4 mt-3 border rounded-2xl p-4 bg-white", children: [
        order.qr_code_b64 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `data:image/png;base64,${order.qr_code_b64}`, alt: "QR Code PIX", className: "w-64 h-64" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: fmt(order.amount_cents) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Pagamento via PIX • Aprovação instantânea" })
        ] }),
        order.pix_copy_paste && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-muted/40 rounded-lg p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center mb-1", children: "Código PIX Copia e Cola:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] break-all leading-snug font-mono", children: order.pix_copy_paste })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: copy, className: "mt-3 w-full h-12 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
            " Copiar código PIX"
          ] })
        ] }),
        secondsLeft != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
          "Este código expira em ",
          mins,
          ":",
          String(secs).padStart(2, "0"),
          " minutos"
        ] })
      ] }),
      items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-4 mt-4 border rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3", children: "Resumo do pedido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          i.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.image, alt: i.name, className: "w-14 h-14 object-contain bg-muted/30 rounded" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded bg-muted/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium leading-snug line-clamp-2", children: i.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              i.size ? `Tam: ${i.size} • ` : "",
              "Qtd: ",
              i.qty
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: fmt(i.price * i.qty) })
        ] }, i.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold pt-3 mt-3 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fmt(order.amount_cents) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "mt-4 mx-4 text-sm text-muted-foreground list-decimal pl-5 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Abra o app do seu banco" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Selecione PIX → Pagar com QR Code ou Copia e Cola" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Confirme o pagamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aguarde nesta tela — confirmação é automática" })
      ] })
    ] })
  ] });
}
export {
  PixPage as component
};
