import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// Importa o process diretamente do Node.js para evitar o erro de "not defined"
import process from 'node:process'

// https://vite.dev
export default defineConfig({
  // 'base' precisa ficar na raiz da configuração
  base: process.env.VITE_BASE_PATH || '/portfolio',

  plugins: [
    react(), 
    tailwindcss()
  ],

  server: {
    host: true
  }
})
