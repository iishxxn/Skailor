import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),              // Shortcut for src/
      '@components': path.resolve(__dirname, './src/components'),  // Shortcut for components
      '@pages': path.resolve(__dirname, './src/pages'),  // Shortcut for pages
    },
  },
});
