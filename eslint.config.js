import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import eslint from 'eslint';

export default eslint.config(
    { ignores: ['dist', 'src/components/ui'] },
    {
        extends: [js.configs.recommended, ...pluginQuery.configs['flat/recommended'], 'next/core-web-vitals', 'plugin:prettier/recommended'],
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-console': 'error',
            'prettier/prettier': 'error',
        },
    },
);