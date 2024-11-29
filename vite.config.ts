import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import svelteSvg from "@poppanator/sveltekit-svg";
import injectPreload from "unplugin-inject-preload/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sveltekit(),
    svelteSvg(),
    injectPreload({
      files: [
        {
          entryMatch: /.+\.(webp|png|jpg)/,
        },
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 15173,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
