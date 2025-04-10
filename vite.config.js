import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['a4a4-138-199-53-244.ngrok-free.app'],
    hmr: {
      clientPort: 443       // Tells HMR to use HTTPS port
    }
  }
})
