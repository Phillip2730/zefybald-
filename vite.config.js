import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico','apple-touch-icon.png','pwa-192x192.png','pwa-512x512.png'],
      manifest: {
        name: 'Warmup & RPE Calculator',
        short_name: 'WarmupRPE',
        description: 'A fitness warm-up and RPE guide app',
        theme_color: '#ffffff',
        background_color: '#111827',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ]
      }
    })
  ],
  resolve: { dedupe: ['react','react-dom'] },
  build: { minify: 'terser' }
})
