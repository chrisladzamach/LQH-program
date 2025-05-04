// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import VitePWA from '@vite-pwa/astro'; // ✅ Importación correcta

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'LQH App',
          short_name: 'LQH',
          description: 'Aplicación progresiva para LQH',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#0d47a1',
          orientation: 'portrait',
          scope: '/',
          icons: [
            {
              src: '/icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ]
  }
});
