import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import lighthouse from "astro-lighthouse";

// https://astro.build/config
export default defineConfig({
  site: "https://evilweasel.github.io",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    lighthouse(),
  ],
});
