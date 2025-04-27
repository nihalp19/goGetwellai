import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // helps during local development
  }

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
