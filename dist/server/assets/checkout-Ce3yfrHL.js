import { V as reactExports, L as jsxRuntimeExports } from "./server-D8pWyu0D.js";
import { g as createLucideIcon, f as cn, R as Root, b as Portal, a as Content, C as Close, X, O as Overlay, T as Title, D as Description, u as useCart, i as useNavigate, B as Button, L as Link, h as formatBRL, M as Minus, P as Plus, t as toast } from "./router-Bn4ndn4_.js";
import { u as useServerFn, c as createPixOrder } from "./checkout.functions-CW84nWSx.js";
import { C as ChevronLeft, S as ShieldCheck } from "./shield-check-DfmLQaBm.js";
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
const __iconNode$2 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  ["path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "1sqzm4" }],
  [
    "path",
    { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5", key: "kc0143" }
  ],
  ["rect", { x: "3", y: "7", width: "18", height: "4", rx: "1", key: "1hberx" }]
];
const Gift = createLucideIcon("gift", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const onlyDigits = (s) => s.replace(/\D+/g, "");
const empty = {
  name: "",
  phone: "",
  email: "",
  cep: "",
  address: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: ""
};
function CheckoutPage() {
  const {
    items,
    subtotal,
    setQty,
    remove
  } = useCart();
  const navigate = useNavigate();
  const createOrder = useServerFn(createPixOrder);
  const [loading, setLoading] = reactExports.useState(false);
  const [addrOpen, setAddrOpen] = reactExports.useState(false);
  const [addrStep, setAddrStep] = reactExports.useState("intro");
  const [addr, setAddr] = reactExports.useState(empty);
  const [savedAddr, setSavedAddr] = reactExports.useState(null);
  const [cpfOpen, setCpfOpen] = reactExports.useState(false);
  const [cpfInput, setCpfInput] = reactExports.useState("");
  const [savedCpf, setSavedCpf] = reactExports.useState(null);
  const SHIPPING = [{
    id: "free",
    name: "Frete Grátis",
    days: "7-12 dias úteis",
    price: 0
  }, {
    id: "standard",
    name: "Frete Padrão",
    days: "5-8 dias úteis",
    price: 1490
  }, {
    id: "express",
    name: "Expresso",
    days: "2-4 dias úteis",
    price: 2490,
    tag: "RÁPIDO"
  }];
  const [shippingId, setShippingId] = reactExports.useState("free");
  const shipping = SHIPPING.find((s) => s.id === shippingId);
  const [couponSec, setCouponSec] = reactExports.useState(4 * 60 * 60);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem("cs-addr");
      if (raw) {
        const parsed = JSON.parse(raw);
        setSavedAddr(parsed);
        setAddr(parsed);
      }
      const cpf = localStorage.getItem("cs-cpf");
      if (cpf) setSavedCpf(cpf);
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    const id = setInterval(() => setCouponSec((v) => v > 0 ? v - 1 : 0), 1e3);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(couponSec / 3600)).padStart(2, "0");
  const mm = String(Math.floor(couponSec % 3600 / 60)).padStart(2, "0");
  const ss = String(couponSec % 60).padStart(2, "0");
  function openAddr() {
    setAddrStep(savedAddr ? "form" : "intro");
    setAddrOpen(true);
  }
  async function lookupCEP(cep) {
    const c = onlyDigits(cep);
    if (c.length !== 8) return;
    try {
      const r = await fetch(`https://viacep.com.br/ws/${c}/json/`);
      const d = await r.json();
      if (d?.erro) return;
      setAddr((s) => ({
        ...s,
        address: d.logradouro || s.address,
        neighborhood: d.bairro || s.neighborhood,
        city: d.localidade || s.city,
        state: d.uf || s.state
      }));
    } catch {
    }
  }
  function saveAddress() {
    const missing = [];
    if (!addr.name.trim()) missing.push("nome");
    if (!addr.phone.trim()) missing.push("telefone");
    if (!addr.cep.trim()) missing.push("CEP");
    if (!addr.address.trim()) missing.push("rua");
    if (!addr.number.trim()) missing.push("número");
    if (!addr.neighborhood.trim()) missing.push("bairro");
    if (!addr.city.trim()) missing.push("cidade");
    if (!addr.state.trim()) missing.push("estado");
    if (missing.length) {
      toast.error(`Preencha: ${missing.join(", ")}`);
      return;
    }
    localStorage.setItem("cs-addr", JSON.stringify(addr));
    setSavedAddr(addr);
    setAddrOpen(false);
  }
  function saveCpf() {
    const c = onlyDigits(cpfInput);
    if (c.length !== 11) {
      toast.error("CPF deve ter 11 dígitos");
      return;
    }
    localStorage.setItem("cs-cpf", c);
    setSavedCpf(c);
    setCpfOpen(false);
  }
  async function placeOrder() {
    if (items.length === 0) {
      toast.error("Carrinho vazio");
      return;
    }
    if (!savedAddr || !savedAddr.name.trim() || !savedAddr.phone.trim() || !savedAddr.cep.trim() || !savedAddr.address.trim() || !savedAddr.number.trim() || !savedAddr.neighborhood.trim() || !savedAddr.city.trim() || !savedAddr.state.trim()) {
      toast.error("Preencha o endereço de entrega para gerar o PIX");
      openAddr();
      return;
    }
    setLoading(true);
    try {
      const res = await createOrder({
        data: {
          customer: savedAddr ? {
            name: savedAddr.name,
            phone: savedAddr.phone,
            email: savedAddr.email,
            cep: savedAddr.cep,
            address: savedAddr.address,
            number: savedAddr.number,
            complement: savedAddr.complement,
            neighborhood: savedAddr.neighborhood,
            city: savedAddr.city,
            state: savedAddr.state
          } : {},
          items: [...items.map((i) => ({
            id: i.id,
            name: i.name,
            size: i.size,
            price: i.price,
            qty: i.qty,
            image: i.image
          })), ...shipping.price > 0 ? [{
            id: `frete-${shipping.id}`,
            name: `Frete ${shipping.name}`,
            price: shipping.price,
            qty: 1
          }] : []]
        }
      });
      navigate({
        to: "/pix/$transactionId",
        params: {
          transactionId: res.transactionId
        }
      });
    } catch (e) {
      console.error(e);
      toast.error(e?.message || "Erro ao gerar PIX");
      setLoading(false);
    }
  }
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[480px] mx-auto p-6 text-center bg-white min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Seu carrinho está vazio." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Voltar à loja" }) })
    ] });
  }
  const original = subtotal() * 7.55;
  const desconto = Math.max(0, original - subtotal());
  const total = subtotal() + shipping.price;
  const fmtCpf = (v) => v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-foreground max-w-[480px] mx-auto pb-44", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 bg-white border-b flex items-center px-3 h-14 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "p-1 absolute left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-semibold text-base", children: "Resumo do pedido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-emerald-600 text-xs flex items-center justify-center gap-1 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
          " Cancelamento fácil"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: openAddr, className: "w-full flex items-start gap-3 px-4 py-3 border-b text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-muted-foreground mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: savedAddr ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium truncate", children: [
          savedAddr.name,
          " • ",
          savedAddr.phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
          savedAddr.address,
          ", ",
          savedAddr.number,
          " - ",
          savedAddr.neighborhood,
          ", ",
          savedAddr.city,
          "/",
          savedAddr.state
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: "Endereço de envio" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--flash-end)] font-semibold text-sm", children: savedAddr ? "Editar" : "+ Adicionar endereço" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      setCpfInput(savedCpf || "");
      setCpfOpen(true);
    }, className: "w-full flex items-center gap-3 px-4 py-3 border-b text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-sm", children: savedCpf ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
        "CPF: ",
        fmtCpf(savedCpf)
      ] }) : "CPF (opcional)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--flash-end)] font-semibold text-sm", children: savedCpf ? "Editar" : "+ Adicionar CPF" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-3 border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mb-1", children: "CSCAPACETES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 mb-3", children: "⭐ Melhor escolha! 8.2K vendido(s) e com nota 4.8/5,0" }),
      items.map((i) => {
        const original2 = Math.round(i.price * 7.55);
        const off = Math.round((original2 - i.price) / original2 * 100);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-3", children: [
          i.image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.image, alt: i.name, className: "w-20 h-20 object-contain bg-muted/30 rounded" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium leading-snug", children: i.name }),
            i.size && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
              "Tamanho: ",
              i.size
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--flash-end)] text-white text-[11px] font-semibold px-2 py-0.5 rounded", children: "⚡ Oferta Relâmpago" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-emerald-600 mt-1", children: "🟢 Devolução gratuita" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[color:var(--flash-end)] font-bold", children: formatBRL(i.price) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through", children: formatBRL(original2) }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[color:var(--flash-end)]", children: [
                    "-",
                    off,
                    "%"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5", onClick: () => i.qty <= 1 ? remove(i.id) : setQty(i.id, i.qty - 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 text-sm", children: i.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5", onClick: () => setQty(i.id, i.qty + 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }) })
              ] })
            ] })
          ] })
        ] }, i.id);
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-3 border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Frete" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: SHIPPING.map((s) => {
        const active = s.id === shippingId;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setShippingId(s.id), className: `w-full flex items-center gap-3 border rounded-xl px-3 py-3 text-left transition-colors ${active ? "border-emerald-500 bg-emerald-50/40" : "border-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${active ? "border-emerald-500" : "border-muted-foreground/40"}`, children: active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-sm flex items-center gap-2", children: [
              s.name,
              s.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[color:var(--flash-end)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded", children: s.tag })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.days })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-semibold ${s.price === 0 ? "text-emerald-600" : ""}`, children: s.price === 0 ? "Grátis" : formatBRL(s.price) })
        ] }, s.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-3 border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Resumo do pedido" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal do produto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatBRL(subtotal()) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm py-1 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Preço original" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatBRL(original) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Desconto Imposto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[color:var(--flash-end)]", children: [
          "- ",
          formatBRL(desconto)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "Frete (",
          shipping.name,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shipping.price === 0 ? "Grátis" : formatBRL(shipping.price) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold pt-2 border-t mt-2 text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatBRL(total) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-4 py-3 text-xs text-muted-foreground", children: [
      "Ao fazer um pedido, você concorda com os ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Termos de uso e venda da CS Capacetes" }),
      " e reconhece que leu e concordou com a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Política de privacidade" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 bg-pink-50 text-[color:var(--flash-end)] text-sm flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-4 h-4" }),
      " Você está economizando ",
      formatBRL(desconto),
      " com impostos."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t px-4 pt-2 pb-3 z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          "Total (",
          items.length,
          " item",
          items.length > 1 ? "s" : "",
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--flash-end)] font-bold text-lg", children: formatBRL(total) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs text-emerald-600 mb-2", children: [
        "Economizando ",
        formatBRL(desconto)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: placeOrder, disabled: loading, className: "w-full h-12 rounded-full text-base bg-[color:var(--flash-end)] hover:opacity-90", children: loading ? "Gerando PIX..." : "Fazer pedido" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-1", children: [
        "O cupom expira em ",
        hh,
        ":",
        mm,
        ":",
        ss
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addrOpen, onOpenChange: setAddrOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-[440px] p-0 max-h-[90vh] overflow-y-auto", children: addrStep === "intro" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-8 h-8 text-[color:var(--flash-end)] mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-lg mt-2", children: "Endereço de entrega" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Recomendamos que adicione um endereço para a entrega do seu produto." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setAddrStep("form"), className: "w-full mt-4 h-12 rounded-full bg-[color:var(--flash-end)] hover:opacity-90", children: "Adicionar endereço" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddrOpen(false), className: "w-full mt-2 h-12 rounded-full border text-sm", children: "Adicionar endereço após a compra" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAddrOpen(false), className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Adicionar o novo endereço" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: "Informações de contato" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Nome e sobrenome", value: addr.name, onChange: (e) => setAddr({
          ...addr,
          name: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "BR +55  Número de telefone", value: addr.phone, onChange: (e) => setAddr({
          ...addr,
          phone: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "E-mail", value: addr.email, onChange: (e) => setAddr({
          ...addr,
          email: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: "Endereço" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "CEP", value: addr.cep, onChange: (e) => {
          setAddr({
            ...addr,
            cep: e.target.value
          });
          lookupCEP(e.target.value);
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Rua", value: addr.address, onChange: (e) => setAddr({
          ...addr,
          address: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Número", value: addr.number, onChange: (e) => setAddr({
            ...addr,
            number: e.target.value
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Complemento", value: addr.complement, onChange: (e) => setAddr({
            ...addr,
            complement: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Bairro", value: addr.neighborhood, onChange: (e) => setAddr({
          ...addr,
          neighborhood: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Cidade", value: addr.city, onChange: (e) => setAddr({
            ...addr,
            city: e.target.value
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Estado", maxLength: 2, value: addr.state, onChange: (e) => setAddr({
            ...addr,
            state: e.target.value
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center mb-3", children: [
        "Leia a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Política de privacidade" }),
        " para saber mais sobre como usamos suas informações pessoais."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveAddress, className: "w-full h-12 rounded-full bg-[color:var(--flash-end)] hover:opacity-90", children: "Salvar" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: cpfOpen, onOpenChange: setCpfOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-[400px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-lg", children: "Adicionar CPF" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground -mt-2", children: "Necessário para emissão da nota fiscal." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "000.000.000-00", value: cpfInput, maxLength: 14, onChange: (e) => setCpfInput(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveCpf, className: "w-full h-11 rounded-full bg-[color:var(--flash-end)] hover:opacity-90", children: "Salvar CPF" })
    ] }) })
  ] });
}
export {
  CheckoutPage as component
};
