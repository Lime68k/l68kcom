// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "VG5000",
        cssVariable: "--font-vg",
        options: {
            variants: [{
                src: ['./src/assets/fonts/font.otf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    }]
});
