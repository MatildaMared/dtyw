import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		open: true
	}
});

export default config;
