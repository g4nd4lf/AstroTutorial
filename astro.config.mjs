import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://funny-lamington-b4f64f.netlify.app",
  integrations: [preact()]
});