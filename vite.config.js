// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pattern1: resolve(__dirname, 'design/pattern1/index.html'),
        pattern2: resolve(__dirname, 'design/pattern2/index.html'),
        pattern3: resolve(__dirname, 'design/pattern3/index.html'),
      },
    },
  },
});
