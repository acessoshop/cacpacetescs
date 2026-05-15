import { PRODUCTS, STORE_URL, formatBRL, type Product } from "./products";

function discount(p: Product) {
  return Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
}

function buyUrl(p: Product) {
  // Manda direto pra loja oficial (Lovable) com o produto como referência
  return `${STORE_URL}/?ref=gh&p=${encodeURIComponent(p.id)}`;
}

export function App() {
  return (
    <>
      <div className="topbar">🔥 PROMOÇÃO RELÂMPAGO • Frete Grátis • Pix com desconto</div>
      <header>
        <h1>
          Capacetes <span>NORISK</span> & <span>LS2</span>
        </h1>
      </header>

      <section className="hero">
        <h2>Capacetes e jaquetas com até 87% OFF</h2>
        <p>Pagamento via Pix • Entrega para todo Brasil</p>
      </section>

      <main className="grid">
        {PRODUCTS.map((p) => (
          <article key={p.id} className="card">
            <div className="card-img">
              <img src={p.image} alt={p.name} loading="lazy" />
            </div>
            <div className="card-body">
              <span className="brand-tag">{p.brand}</span>
              <div className="card-name">{p.name}</div>
              <div className="price-row">
                <span className="price">{formatBRL(p.price)}</span>
                <span className="price-old">{formatBRL(p.originalPrice)}</span>
                <span className="discount">-{discount(p)}%</span>
              </div>
              <a className="btn" href={buyUrl(p)} target="_blank" rel="noopener noreferrer">
                Comprar agora
              </a>
            </div>
          </article>
        ))}
      </main>

      <footer>
        © {new Date().getFullYear()} Capacetes NORISK & LS2 • Todos os direitos reservados
      </footer>
    </>
  );
}
