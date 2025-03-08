import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: [
      "664c3e21-744f-4fab-96d3-cd2a178d5ea9-00-3rywt68jjp049.sisko.replit.dev" // Add your Replit host here
    ]
  }
});
