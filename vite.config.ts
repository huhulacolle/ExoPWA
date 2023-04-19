import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true
      },
      manifest: {
        start_url: '/',
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: "https://api.spacexdata.com/",
            handler: 'StaleWhileRevalidate'
          }
        ]
      }
    })
  ],
})
