import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://example-portfolio-utn.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
