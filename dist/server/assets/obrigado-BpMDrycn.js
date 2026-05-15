import { V as reactExports, L as jsxRuntimeExports } from "./server-D8pWyu0D.js";
import { g as createLucideIcon, c as Route, B as Button, L as Link } from "./router-Bn4ndn4_.js";
import { u as useServerFn, g as getOrderStatus } from "./checkout.functions-CW84nWSx.js";
import { C as CircleCheck } from "./circle-check-C_3K5UZR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./paradise.server-DUvybL1E.js";
import "fs";
import "util";
import "stream";
import "zlib";
import "assert";
import "buffer";
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
const WHATSAPP = "5511999456792";
function ObrigadoPage() {
  const {
    t
  } = Route.useSearch();
  const checkStatus = useServerFn(getOrderStatus);
  const [status, setStatus] = reactExports.useState("pending");
  const [customer, setCustomer] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!t) return;
    let stopped = false;
    const tick = async () => {
      try {
        const res = await checkStatus({
          data: {
            transactionId: t
          }
        });
        if (stopped) return;
        setStatus(res.status);
        setCustomer({
          name: res.customer_name
        });
        if (res.status === "paid") return;
        setTimeout(tick, 4e3);
      } catch {
        if (!stopped) setTimeout(tick, 6e3);
      }
    };
    tick();
    return () => {
      stopped = true;
    };
  }, [t, checkStatus]);
  if (!t) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Pedido não identificado." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Voltar à loja" }) })
    ] }) });
  }
  const isPaid = status === "paid";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center", children: [
    isPaid ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 text-emerald-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mb-2", children: "Pagamento confirmado!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-6", children: [
        customer?.name ? `Obrigado, ${customer.name.split(" ")[0]}! ` : "",
        "Recebemos seu pedido. Nossa equipe entrará em contato em breve via WhatsApp para confirmar os detalhes da entrega."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Acabei de finalizar o pedido ${t} e gostaria de confirmar os detalhes da entrega.`)}`, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 mr-2" }),
        "Falar com a equipe no WhatsApp"
      ] }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 text-amber-600 animate-spin" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mb-2", children: "Aguardando confirmação..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-2", children: "Estamos confirmando seu pagamento. Esta página atualiza automaticamente assim que o PIX for identificado." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-6", children: [
        "Pedido #",
        t.slice(0, 8)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pix/$transactionId", params: {
        transactionId: t
      }, children: "Ver código PIX novamente" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-6", children: [
      "Em caso de dúvidas, fale com a gente no WhatsApp",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "underline", href: `https://wa.me/${WHATSAPP}`, children: "+55 11 99945-6792" })
    ] })
  ] }) });
}
export {
  ObrigadoPage as component
};
