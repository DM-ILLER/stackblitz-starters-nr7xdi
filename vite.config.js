import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/index.html',
        home: '/home.html',
        gallery: '/gallery.html',
        aboutus: '/aboutus.html',
        custom: '/custom.html'
      }
    }
  },
  publicDir: 'public'
});