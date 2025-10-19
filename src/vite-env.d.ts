/// <reference types="vite/client" />

declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

// Google Analytics/Google Ads gtag function
declare global {
	interface Window {
		gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
	}
}

export {};
