# Capacetes NORISK & LS2 — Vitrine

Site estático pronto pra GitHub Pages.

## Como publicar no GitHub Pages (modo simples, sem build)

1. Conecte o projeto ao GitHub pelo Lovable (botão **+** → **GitHub** → **Connect project**). Nome do repositório: **`cacpacetescs`** na conta `acessoshop`.
2. Vá em `https://github.com/acessoshop/cacpacetescs/settings/pages`.
3. Em **Source**, escolha **Deploy from a branch**.
4. Branch: **`main`** • Pasta: **`/ (root)`** → **Save**.
5. Em ~1 minuto o site fica no ar em **`https://acessoshop.github.io/cacpacetescs/`**.

O arquivo `index.html` na raiz já contém toda a vitrine pronta (HTML + CSS inline, sem build). Os botões "Comprar agora" levam pra loja oficial (`https://cacpacetescs.lovable.app`) que cuida do checkout e Pix.

## Estrutura

- `index.html` — vitrine estática (pronta pro Pages, sem build).
- `.nojekyll` — desativa o Jekyll do GitHub Pages (serve os arquivos como estão).
- `static-site/` — versão alternativa em React+Vite, caso queira editar com build (opcional).
- Resto dos arquivos — app principal Lovable (checkout, API Pix, etc.).

## Regenerar o `index.html`

Se mudar os produtos, edite `static-site/src/products.ts` e rode novamente o gerador (ou peça pro Lovable atualizar).
