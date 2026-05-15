import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANTE: o "base" precisa bater com o nome do repositório no GitHub.
// URL final: https://acessoshop.github.io/produtos/
export default defineConfig({
  plugins: [react()],
  base: "/produtos/",
});
