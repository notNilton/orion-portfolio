import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser'; // Certifique-se de ter o parser do TypeScript

export default [
  {
    ignores: ['dist'],
  },
  {
    // Extensões recomendadas do ESLint para JavaScript e TypeScript
    extends: [
      js.configs.recommended,
      'plugin:@typescript-eslint/recommended',
    ],
    files: ['**/*.{ts,tsx}'],

    // Opções de linguagem
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser, // Usa o parser do TypeScript para arquivos ts/tsx
      sourceType: 'module',
    },

    // Plugins adicionais
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    // Regras
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Regras TypeScript adicionais para boas práticas
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',

      // Outras boas práticas para React e TypeScript
      'react/jsx-uses-react': 'off', // Não necessário para React 17+
      'react/react-in-jsx-scope': 'off', // Não necessário para React 17+
    },
  },
];
