import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import svelteSvg from "@poppanator/sveltekit-svg";
import injectPreload from "unplugin-inject-preload/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
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
});
