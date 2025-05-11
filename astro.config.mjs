// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import VitePWA from '@vite-pwa/astro';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'robots.txt',
          'apple-touch-icon.png',
          'icons/icon-192x192.png',
          'icons/icon-512x512.png'
        ],
        manifest: {
          name: 'LQH App',
          short_name: 'LQH',
          description: 'Aplicación del programa para presentación de exámenes de ascenso de grado de la LQH',
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
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,json}'],
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === 'document',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-cache',
              },
            },
            {
              urlPattern: ({ request }) =>
                ['style', 'script', 'worker'].includes(request.destination),
              handler: 'CacheFirst',
              options: {
                cacheName: 'assets-cache',
              },
            },
            {
              urlPattern: ({ request }) =>
                ['image', 'font'].includes(request.destination),
              handler: 'CacheFirst',
              options: {
                cacheName: 'static-resources',
              },
            }
          ],
          skipWaiting: true,
          clientsClaim: true
        }
      })
    ]
  }
});
