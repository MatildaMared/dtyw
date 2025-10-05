module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"prettier"
	],
	plugins: ["@typescript-eslint", "react", "react-hooks"],
	ignorePatterns: ["*.cjs", "dist/", "node_modules/"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	rules: {
		"react/react-in-jsx-scope": "off", // Not needed with React 17+
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
	}
};
