import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for production build
    emptyOutDir: true, // Clean the output dir before building
  },
  server: {
    host: '0.0.0.0', // Allows access from network devices
    port: 3000,      // Optional: specify port (default 5173)
    open: true,      // Opens browser automatically
    strictPort: true // Ensures the port is strictly followed
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),                      // Shortcut to /src
      '@components': path.resolve(__dirname, './src/components'), // /src/components
      '@pages': path.resolve(__dirname, './src/pages'),           // /src/pages
      '@hooks': path.resolve(__dirname, './src/hooks'),           // /src/hooks
      '@utils': path.resolve(__dirname, './src/utils'),           // /src/utils (optional)
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
