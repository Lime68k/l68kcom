// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://lime68k.github.io/",
  base: "/l68kcom/",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "vg5",
      cssVariable: "--font-vg5",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/VG5000.otf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
