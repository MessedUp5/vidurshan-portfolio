import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://messedup5.github.io",
	base: "/vidurshan-portfolio",
	vite: {
		plugins: [tailwindcss()],
	},
});