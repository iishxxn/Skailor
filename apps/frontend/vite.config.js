import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config() // Load .env variables

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for production build
    emptyOutDir: true, // Clean the output dir before building
  },
  server: {
    host: '0.0.0.0', // Allows access from network devices
    port: parseInt(process.env.VITE_PORT) || 5173, // Use VITE_PORT or fallback
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
