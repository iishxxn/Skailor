import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: process.env.PORT || 3000, // Use Render-assigned port or default to 3000
  },
});
