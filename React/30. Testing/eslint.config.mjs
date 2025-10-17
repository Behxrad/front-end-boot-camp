import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	// All JS/JSX files
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},

	// React recommended rules
	pluginReact.configs.flat.recommended,
	{
		files: ['**/*.{js,jsx}'],
		rules: {
			'react/react-in-jsx-scope': 'off',
		},
	},

	pluginTestingLibrary.configs['flat/react'],
	pluginJest.configs['flat/recommended'],
]);
