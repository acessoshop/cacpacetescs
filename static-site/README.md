# Site estático (GitHub Pages)

Vitrine de produtos hospedada gratuitamente no GitHub Pages.
Os botões "Comprar agora" levam pra loja oficial (Lovable) que cuida do checkout e Pix.

**URL final:** `https://acessoshop.github.io/produtos/`

## Como subir pra GitHub Pages (passo a passo)

### 1. Conectar o projeto ao GitHub
No editor da Lovable: clique no botão **+** (canto inferior esquerdo do chat) → **GitHub** → **Connect project**. Autorize o app e crie o repositório com nome **`produtos`** na conta `acessoshop`.

### 2. Ativar o GitHub Pages
1. Vá em `https://github.com/acessoshop/produtos/settings/pages`
2. Em **Source**, selecione **GitHub Actions**
3. Salve.

### 3. Aguardar o deploy
Assim que você conectar, o workflow `.github/workflows/deploy-pages.yml` roda automaticamente. Acompanhe em `https://github.com/acessoshop/produtos/actions`. Em ~2 minutos seu site fica no ar em **`https://acessoshop.github.io/produtos/`**.

## Como editar localmente (opcional)

```bash
cd static-site
npm install
npm run dev      # roda em http://localhost:5173/produtos/
npm run build    # gera dist/
```

## Como funciona

- **Frontend**: React + Vite estático, sem servidor.
- **API Pix**: continua na Lovable (`https://cacpacetescs.lovable.app/api/public/create-pix` e `/api/public/order-status`), com CORS aberto. Se um dia quiser fazer checkout direto desse site, é só chamar essas URLs por `fetch`.
- **Imagens**: servidas direto do site Lovable (não duplicadas no repo).
- **Checkout**: por enquanto, "Comprar agora" abre a loja oficial em nova aba. Quando quiser, posso migrar o checkout pra cá também.

## Trocar o nome do repositório

Se mudar o nome de `produtos` pra outro, edite **`vite.config.ts`** alterando `base: "/produtos/"` pro novo nome (com barras nos dois lados).
