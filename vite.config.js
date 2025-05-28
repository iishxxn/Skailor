import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      // Proxy API requests to your Express backend
      '/chat': 'http://localhost:3000',
      '/data': 'http://localhost:3000'
    }
  }
});