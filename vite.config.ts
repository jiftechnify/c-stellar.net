import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import VitePluginInjectPreload from 'vite-plugin-inject-preload'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), VitePluginInjectPreload({
    files: [
      {
        match: /.+\.(webp|png|jpg)/,
      }
    ]
  })],
  server: {
    host: '0.0.0.0',
    port: 15173
  }
})
