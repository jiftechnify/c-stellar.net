import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import svelteSvg from "@poppanator/sveltekit-svg";
import injectPreload from "unplugin-inject-preload/vite";
import icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sveltekit(),
    icons({
      compiler: "svelte",
      customCollections: {
        "custom": FileSystemIconLoader("./custom-icons"),
      },
    }),
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
