import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Honor a harness/CI-assigned port (PORT env var); fall back to Vite's default.
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
