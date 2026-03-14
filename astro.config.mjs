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
          navigateFallback: '/index.html',
          globPatterns: [
            '**/*.{js,css,html,ico,png,svg,webp,woff2,json,jpg,jpeg,gif,webm,mp4,mp3,pdf,doc,docx}'
          ],
          additionalManifestEntries: [
            { url: '/', revision: null },

            { url: '/program', revision: null },
            { url: '/grades/blanco', revision: null },
            { url: '/grades/amarillo', revision: null },
            { url: '/grades/naranja', revision: null },
            { url: '/grades/verde', revision: null },
            { url: '/grades/azul', revision: null },
            { url: '/grades/purpura', revision: null },
            { url: '/grades/rojo', revision: null },
            { url: '/grades/rojoMarron', revision: null },
            { url: '/grades/marron', revision: null },
            { url: '/grades/marronNegro', revision: null },
            { url: '/grades/grades/negro1Dan', revision: null },
            { url: '/grades/grades/negro2Dan', revision: null },
            { url: '/grades/grades/negro3Dan', revision: null },
            { url: '/grades/grades/negro4Dan', revision: null },
            { url: '/grades/grades/negro5Dan', revision: null },

            { url: '/hoShinSul', revision: null },
            { url: '/hoShinSul/blanco', revision: null },
            { url: '/hoShinSul/amarillo', revision: null },
            { url: '/hoShinSul/naranja', revision: null },
            { url: '/hoShinSul/verde', revision: null },
            { url: '/hoShinSul/azul', revision: null },
            { url: '/hoShinSul/purpura', revision: null },
            { url: '/hoShinSul/rojo', revision: null },
            { url: '/hoShinSul/rojoMarron', revision: null },
            { url: '/hoShinSul/marron', revision: null },
            { url: '/hoShinSul/marronNegro', revision: null },
            { url: '/grades/grades/negro1Dan', revision: null },
            { url: '/grades/grades/negro2Dan', revision: null },
            { url: '/grades/grades/negro3Dan', revision: null },
            { url: '/grades/grades/negro4Dan', revision: null },

            { url: '/poomsaes', revision: null },
            { url: '/poomsaes/joongDo/joongDo', revision: null },
            { url: '/poomsaes/joongDo/joongDoIlDan', revision: null },
            { url: '/poomsaes/joongDo/joongDoIDan', revision: null },
            { url: '/poomsaes/joongDo/joongDoSamDan', revision: null },
            { url: '/poomsaes/joongDo/joongDoSaDan', revision: null },
            { url: '/poomsaes/joongDo/joongDoODan', revision: null },
            { url: '/poomsaes/won/won', revision: null },
            { url: '/poomsaes/won/wonIlDan', revision: null },
            { url: '/poomsaes/won/wonIDan', revision: null },
            { url: '/poomsaes/won/wonSamDan', revision: null },
            { url: '/poomsaes/won/wonSaDan', revision: null },
            { url: '/poomsaes/won/wonODan', revision: null },
            { url: '/poomsaes/kiHap', revision: null },

            { url: '/mugiPoomsaes', revision: null },
            { url: '/mugiPoomsaes/iCholBong/iCholBong', revision: null },
            { url: '/mugiPoomsaes/iCholBong/iCholBongIlDan', revision: null },
            { url: '/mugiPoomsaes/iCholBong/iCholBongIDan', revision: null },
            { url: '/mugiPoomsaes/iCholBong/iCholBongSamDan', revision: null },
            { url: '/mugiPoomsaes/jangBong/jangBong', revision: null },
            { url: '/mugiPoomsaes/jangBong/jangBongIlDan', revision: null },
            { url: '/mugiPoomsaes/jangBong/jangBongIDan', revision: null },
            { url: '/mugiPoomsaes/jangBong/jangBongSamDan', revision: null },
            { url: '/mugiPoomsaes/jangBong/jangBongSaDan', revision: null },
            { url: '/mugiPoomsaes/danBongIlDan', revision: null },
            { url: '/mugiPoomsaes/changIlDan', revision: null },
            { url: '/mugiPoomsaes/puche/puche', revision: null },
            { url: '/mugiPoomsaes/puche/pucheIlDan', revision: null },
            { url: '/mugiPoomsaes/puche/pucheIDan', revision: null },

            { url: '/chases', revision: null },
            { url: '/chase/sajoe/sajoe', revision: null },
            { url: '/chase/sajoe/sajoe1', revision: null },
            { url: '/chase/sajoe/sajoe2', revision: null },
            { url: '/chase/sajoe/sajoe3', revision: null },
            { url: '/chase/sajoe/sajoe4', revision: null },
            { url: '/chase/sajoe/sajoe5', revision: null },
            { url: '/chase/chaseHakDary', revision: null },
            { url: '/chase/tangJong/tangJong', revision: null },
            { url: '/chase/tangJong/tangJong1', revision: null },
            { url: '/chase/tangJong/tangJong2', revision: null },
            { url: '/chase/geumGang/geumGang1', revision: null },
            { url: '/chase/geumGang/geumGang2', revision: null },
            { url: '/chase/geumGang/geumGang3', revision: null },
            { url: '/chase/geumGang/geumGang4', revision: null },

            { url: '/mugiChase', revision: null },
            { url: '/mugiChase/iCholBongChase', revision: null },
            { url: '/mugiChase/iCholBongDoblesChase', revision: null },
            { url: '/mugiChase/jangBongChase', revision: null },
            { url: '/mugiChase/danBongChase', revision: null },
          ],
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === 'document',
              // handler: 'NetworkFirst',
              handler: 'StaleWhileRevalidate',
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
              // handler: 'CacheFirst',
              handler: 'StaleWhileRevalidate',
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
              // handler: 'NetworkFirst',
              handler: 'StaleWhileRevalidate',
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
