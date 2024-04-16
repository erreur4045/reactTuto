import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
        usePolling: true,
        interval: 1000,
    },
    port: 3000,
  },

  plugins: [react()],
})
