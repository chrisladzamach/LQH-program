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
          'icons/*.{png,svg}',
          'images/**/*',
          'fonts/**/*'
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
          globPatterns: [
            '**/*.{js,css,html,ico,png,svg,webp,woff2,json,jpg,jpeg,gif,webm,mp4,mp3,pdf,doc,docx}'
          ],
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === 'document',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-cache',
                networkTimeoutSeconds: 10,
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 7 // 1 semana
                }
              },
            },
            {
              urlPattern: ({ request }) =>
                ['style', 'script', 'worker'].includes(request.destination),
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'assets-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 días
                }
              },
            },
            {
              urlPattern: ({ request }) =>
                ['image', 'font', 'audio', 'video'].includes(request.destination),
              handler: 'CacheFirst',
              options: {
                cacheName: 'static-resources',
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
                }
              },
            },
            {
              urlPattern: ({ url }) => url.pathname.startsWith('/api/'),
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                networkTimeoutSeconds: 5,
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 // 1 día
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ],
          skipWaiting: true,
          clientsClaim: true,
          offlineGoogleAnalytics: true,
          cleanupOutdatedCaches: true
        }
      })
    ]
  }
});
