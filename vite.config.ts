import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/cv-builder/',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],  // Externalize react-router-dom if necessary
    }
  }
});
