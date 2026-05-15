import { V as reactExports, L as jsxRuntimeExports } from "./server-D8pWyu0D.js";
import { g as createLucideIcon, i as useNavigate, u as useCart, S as Sheet, e as SheetContent, X } from "./router-Bn4ndn4_.js";
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
const __iconNode = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode);
const slug = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const NAMES = [
  { name: "NORISK Soul II Grand Prix South Africa", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix France", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix Brazil", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix Argentina", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix Germany", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix Italy", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix Japan", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix United Kingdom", brand: "NORISK" },
  { name: "NORISK Soul II Grand Prix USA", brand: "NORISK" },
  { name: "LS2 FF358 Classic S Monocolor Vermelho", brand: "LS2" },
  { name: "LS2 FF358 Classic Tank Laranja", brand: "LS2" },
  { name: "LS2 FF358 Classic Tank Preto", brand: "LS2" },
  { name: "LS2 FF358 Classic Tribal Azul", brand: "LS2" },
  { name: "LS2 FF358 Classic Tribal Rosa", brand: "LS2" },
  { name: "LS2 FF358 Classic XDron Neon", brand: "LS2" },
  { name: "LS2 FF358 Classic Draze Azul", brand: "LS2" },
  { name: "LS2 FF358 Classic Draze Branco", brand: "LS2" },
  { name: "LS2 FF358 Classic Draze Preto", brand: "LS2" },
  { name: "LS2 FF358 Classic Draze Vermelho", brand: "LS2" },
  { name: "NORISK Avenger Monocolor Branco", brand: "NORISK" },
  { name: "NORISK Avenger Monocolor Cinza", brand: "NORISK" },
  { name: "NORISK Avenger Monocolor Preto", brand: "NORISK" },
  { name: "NORISK Avenger Monocolor Nardo Cinza", brand: "NORISK" },
  { name: "NORISK City Monocolor Branco", brand: "NORISK" },
  { name: "NORISK City Monocolor Cinza Fosco", brand: "NORISK" },
  { name: "NORISK City Monocolor Preto Fosco", brand: "NORISK" },
  { name: "NORISK Darth II Monocolor Preto Fosco", brand: "NORISK" },
  { name: "NORISK Razor Black Edition", brand: "NORISK" },
  { name: "NORISK Rock Monocolor Branco", brand: "NORISK" },
  { name: "NORISK Rock Monocolor Nardo Cinza", brand: "NORISK" },
  { name: "NORISK Rock Monocolor Preto Fosco", brand: "NORISK" },
  { name: "NORISK Soul II Manty Rosa Fosco", brand: "NORISK" },
  { name: "LS2 FF353 Rapid Monocolor Branco", brand: "LS2" },
  { name: "LS2 FF353 Rapid Monocolor Cinza", brand: "LS2" },
  { name: "LS2 FF353 Rapid Monocolor Preto Fosco", brand: "LS2" },
  { name: "Jaqueta NORISK Tornado Cinza", brand: "NORISK" },
  { name: "Jaqueta NORISK Tornado Branca", brand: "NORISK" },
  { name: "Jaqueta NORISK Tornado Air Preta", brand: "NORISK" },
  { name: "Jaqueta NORISK Trip Air Feminina Rosa", brand: "NORISK" },
  { name: "Viseira NORISK FF302 Fotocromática Transition VM Vision", brand: "NORISK" },
  { name: "Fone de Ouvido para Capacete Bluetooth Headset RGB Sem Fio Kateluo", brand: "NORISK" },
  { name: "Viseira Norisk Flow Iridium Rainbow Camaleão", brand: "NORISK" },
  { name: "Viseira do Capacete Norisk Flow Fumê", brand: "NORISK" }
];
function priceFor(name) {
  if (/^Jaqueta/i.test(name)) return { price: 8990, originalPrice: 59900 };
  if (/^Viseira/i.test(name)) return { price: 4990, originalPrice: 19900 };
  if (/^Fone/i.test(name)) return { price: 8990, originalPrice: 34900 };
  if (/^LS2/i.test(name)) return { price: 5820, originalPrice: 37900 };
  return { price: 6200, originalPrice: 47400 };
}
const PRODUCTS = NAMES.map((n, i) => {
  const imgIndex = NAMES.length - i;
  const { price, originalPrice } = priceFor(n.name);
  return {
    id: slug(n.name),
    name: n.name,
    price,
    originalPrice,
    image: `/assets/cs/products/catalog/p${imgIndex}.jpg`,
    brand: n.brand
  };
});
const formatBRL = (cents) => (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const reviews = [{
  name: "Lucas Souza",
  time: "há 5 horas",
  text: "Chegou no prazo, capacete de qualidade!!",
  avatar: "/assets/cs/images/avatar-lucas.jpg",
  img: "/assets/cs/images/review-lucas.jpg"
}, {
  name: "Joel Lima",
  time: "há 3 horas",
  text: "Comprei meio na dúvida, mas a qualidade surpreendeu",
  avatar: "/assets/cs/images/avatar-joel.jpg",
  img: "/assets/cs/images/review-joel.jpg"
}, {
  name: "Carlos Santos",
  time: "há 2 horas",
  text: "De todos os capacetes que tive, esse é o melhor!",
  avatar: "/assets/cs/images/avatar-carlos.jpg",
  img: "/assets/cs/images/review-carlos.webp"
}, {
  name: "Fernanda Oliveira",
  time: "há 1 hora",
  text: "Produto excelente! Acabamento perfeito e muito confortável",
  avatar: "/assets/cs/images/avatar-fernanda.jpg",
  img: "/assets/cs/images/review-fernanda.webp"
}, {
  name: "Patrícia Mendes",
  time: "há 4 horas",
  text: "Jaqueta top demais, material resistente e bonita! Superou minhas expectativas",
  avatar: "/assets/cs/images/avatar-patricia.jpg",
  img: "/assets/cs/images/review-patricia.webp"
}, {
  name: "Camila Souza",
  time: "há 6 horas",
  text: "Amei a jaqueta, chegou certinho e o tamanho ficou perfeito!",
  avatar: "/assets/cs/images/avatar-camila.jpg",
  img: "/assets/cs/images/review-camila.jpg"
}, {
  name: "Rafael Mendes",
  time: "há 7 horas",
  text: "Capacete LS2 muito top! Acabamento impecável, viseira cristalina e ventilação excelente. Melhor custo-benefício que já comprei!",
  avatar: "/assets/cs/images/avatar-rafael.jpg",
  img: "/assets/cs/images/review-ls2.webp"
}];
const HELMET_SIZES = ["54", "56", "58", "60", "62"];
const JACKET_SIZES = ["P", "M", "G"];
const sizesFor = (name) => /^Jaqueta/i.test(name) ? JACKET_SIZES : HELMET_SIZES;
function useCountdown(initial = 24 * 60 * 60 - 3) {
  const [s, setS] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    const id = setInterval(() => setS((v) => v > 0 ? v - 1 : 0), 1e3);
    return () => clearInterval(id);
  }, []);
  const days = Math.floor(s / 86400);
  if (days >= 1) return `${days} dia${days > 1 ? "s" : ""}`;
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor(s % 3600 / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}
function Star({
  filled = true,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: filled ? "#fbbf24" : "#e5e7eb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) });
}
function Index() {
  const time = useCountdown();
  const navigate = useNavigate();
  const {
    add,
    items,
    open
  } = useCart();
  const cartCount = items.reduce((a, i) => a + i.qty, 0);
  const [selectedIdx, setSelectedIdx] = reactExports.useState(0);
  const [sheetOpen, setSheetOpen] = reactExports.useState(false);
  const [sheetIdx, setSheetIdx] = reactExports.useState(0);
  const [sheetSize, setSheetSize] = reactExports.useState(null);
  const product = PRODUCTS[selectedIdx];
  const sheetProduct = PRODUCTS[sheetIdx];
  const discount = Math.round((product.originalPrice - product.price) / product.originalPrice * 100);
  const sheetDiscount = Math.round((sheetProduct.originalPrice - sheetProduct.price) / sheetProduct.originalPrice * 100);
  const savings = product.originalPrice - product.price;
  const goNext = () => setSelectedIdx((i) => (i + 1) % PRODUCTS.length);
  const goPrev = () => setSelectedIdx((i) => (i - 1 + PRODUCTS.length) % PRODUCTS.length);
  reactExports.useEffect(() => {
    const neighbors = [1, -1, 2, -2, 3, -3];
    neighbors.forEach((offset) => {
      const idx = (selectedIdx + offset + PRODUCTS.length) % PRODUCTS.length;
      const img = new Image();
      img.src = PRODUCTS[idx].image;
    });
  }, [selectedIdx]);
  reactExports.useEffect(() => {
    const id = window.setTimeout(() => {
      PRODUCTS.forEach((p) => {
        const img = new Image();
        img.src = p.image;
      });
    }, 1500);
    return () => window.clearTimeout(id);
  }, []);
  function openSheet() {
    setSheetIdx(selectedIdx);
    setSheetSize(null);
    setSheetOpen(true);
  }
  function addAndCart() {
    if (!sheetSize) return;
    add({
      id: `${sheetProduct.id}-${sheetSize}`,
      name: sheetProduct.name,
      size: sheetSize,
      price: sheetProduct.price,
      qty: 1,
      image: sheetProduct.image
    });
    setSheetOpen(false);
  }
  function buyNow() {
    if (!sheetSize) return;
    add({
      id: `${sheetProduct.id}-${sheetSize}`,
      name: sheetProduct.name,
      size: sheetSize,
      price: sheetProduct.price,
      qty: 1,
      image: sheetProduct.image
    });
    setSheetOpen(false);
    navigate({
      to: "/checkout"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white text-foreground max-w-[480px] mx-auto pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 bg-white flex items-center justify-between px-3 h-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Voltar", className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 18l-6-6 6-6" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Compartilhar", className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "5", r: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "12", r: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "19", r: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "aria-label": "Carrinho", className: "p-2 relative", onClick: open, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
          cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-[color:var(--flash-end)] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center", children: cartCount })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Mais", className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "5", cy: "12", r: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "19", cy: "12", r: "2" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          loading: "eager",
          decoding: "async",
          fetchpriority: "high",
          className: "w-full h-[360px] object-contain"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Anterior", onClick: goPrev, className: "absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 18l-6-6 6-6" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Próxima", onClick: goNext, className: "absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18l6-6-6-6" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full", children: [
        selectedIdx + 1,
        "/",
        PRODUCTS.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden text-white px-4 py-3 flex items-center justify-between", style: {
      background: "linear-gradient(90deg, var(--flash), var(--flash-end))"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-white/95 text-[color:var(--flash-end)] text-[11px] font-bold px-1.5 py-0.5 rounded", children: [
            "-",
            discount,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "R$" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold leading-none", children: (product.price / 100).toFixed(2).replace(".", ",") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/85 text-xs line-through mt-1", children: formatBRL(product.originalPrice) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-end text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" }) }),
          "Oferta Relâmpago"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1", children: [
          "Termina em ",
          time
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-2 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-[color:var(--savings-bg)] text-[color:var(--savings-fg)] text-xs font-medium px-2 py-1 rounded border border-[color:var(--savings-fg)]/20", children: [
        "🎁 Economize ",
        formatBRL(savings)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-[color:var(--savings-bg)] text-[color:var(--savings-fg)] text-xs font-medium px-2 py-1 rounded border border-[color:var(--savings-fg)]/20", children: [
        "Economize ",
        discount,
        "% com bônus"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold leading-snug", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Favoritar", className: "p-1 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-1 flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "4.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-[color:var(--link)]", children: "(2.745)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "2.745 vendidos" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 mt-3 border rounded-lg p-3 space-y-2.5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-muted-foreground mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "1", y: "3", width: "15", height: "13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "5.5", cy: "18.5", r: "2.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18.5", cy: "18.5", r: "2.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Receba até ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "9 de mai – 14 de mai" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through", children: "Taxa de envio: R$ 9,60" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[color:var(--savings-fg)] font-medium", children: "Frete Grátis neste produto 🎉" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-2.5 flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-muted-foreground mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Devoluções gratuitas em ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "30 dias" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Cancelamento fácil" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-4 px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold", children: "Avaliações dos clientes (207)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: "4.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-2 flex flex-wrap gap-x-3 gap-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🖼 Inclui imagens ou vídeos (52)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5 ⭐ (155)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "4 ⭐ (22)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-4", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-b pb-4 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.avatar, alt: r.name, className: "w-8 h-8 rounded-full object-cover bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.time })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mt-1.5", children: [1, 2, 3, 4, 5].map((i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1.5", children: r.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.img, alt: "Foto da avaliação", className: "mt-2 w-24 h-24 object-cover rounded-md bg-muted" })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-4 px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold mb-2", children: "Avaliações da loja (207)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/cs/images/norisk-logo.png", alt: "Norisk Oficial", className: "w-12 h-12 rounded-md object-cover bg-muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: "Norisk Oficial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "97 produtos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[color:var(--link)] text-sm font-medium border border-[color:var(--link)] rounded-full px-3 py-1", children: "Seguir" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 px-3 flex justify-around text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚚 Frete grátis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔒 Compra segura" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-6 px-3 text-center text-[11px] text-muted-foreground", children: "© 2025 CS Capacetes. Todos os direitos reservados." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t flex items-center z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 flex flex-col items-center py-2 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }) }),
        "Loja"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 flex flex-col items-center py-2 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" }) }),
        "Chat"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: openSheet, className: "flex-[1.6] m-2 bg-[color:var(--flash-end)] text-white font-semibold py-3 rounded-full text-sm", children: "Adicionar" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: sheetOpen, onOpenChange: setSheetOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { side: "bottom", className: "max-w-[480px] mx-auto rounded-t-2xl p-0 max-h-[90vh] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sheetProduct.image, alt: sheetProduct.name, className: "w-24 h-24 object-contain bg-muted/30 rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-[color:var(--flash-end)] text-white text-[11px] font-bold px-1.5 py-0.5 rounded", children: [
              "-",
              sheetDiscount,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[color:var(--flash-end)] text-2xl font-bold", children: [
              "R$ ",
              (sheetProduct.price / 100).toFixed(2).replace(".", ",")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground line-through", children: formatBRL(sheetProduct.originalPrice) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-1 bg-pink-100 text-[color:var(--flash-end)] text-xs px-2 py-0.5 rounded", children: "Frete grátis" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSheetOpen(false), className: "self-start p-1 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-2 overflow-x-auto -mx-4 px-4 pb-1", children: PRODUCTS.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSheetIdx(idx), className: `flex-shrink-0 w-20 rounded-lg overflow-hidden border-2 ${idx === sheetIdx ? "border-[color:var(--flash-end)]" : "border-transparent"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "w-20 h-20 object-contain bg-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] leading-tight text-center px-1 py-1 bg-muted/40 line-clamp-2 min-h-[28px]", children: p.name.replace(/^(NORISK Soul II Grand Prix |LS2 )/, "") })
      ] }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-lg text-white px-3 py-2 flex items-center justify-between text-sm", style: {
        background: "linear-gradient(90deg, var(--flash), var(--flash-end))"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" }) }),
          "Oferta Relâmpago"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
          "Termina em ",
          time
        ] })
      ] }),
      (() => {
        const sizes = sizesFor(sheetProduct.name);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold", children: [
              "Tamanho (",
              sizes.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[color:var(--link)] text-sm", children: "Guia de tamanhos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-2", children: sizes.map((sz) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSheetSize(sz), className: `border rounded-lg p-2 text-center ${sheetSize === sz ? "border-[color:var(--flash-end)] bg-pink-50" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sheetProduct.image, alt: "", className: "w-full h-16 object-contain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mt-1", children: sz })
          ] }, sz)) })
        ] });
      })(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: buyNow, disabled: !sheetSize, className: "w-full h-12 rounded-full bg-[color:var(--flash-end)] text-white font-semibold disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Comprar agora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-normal", children: [
            "R$ ",
            (sheetProduct.price / 100).toFixed(2).replace(".", ",")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: addAndCart, disabled: !sheetSize, className: "w-full h-12 rounded-full border-2 border-[color:var(--flash-end)] text-[color:var(--flash-end)] font-semibold disabled:opacity-50 flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
          " Adicionar ao Carrinho"
        ] }),
        !sheetSize && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground", children: "Selecione um tamanho" })
      ] })
    ] }) }) })
  ] });
}
export {
  Index as component
};
