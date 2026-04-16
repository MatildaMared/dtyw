import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
		allowedHosts: ["sb-3fyb2d35huf8.vercel.run"]
	}
});

export default config;
