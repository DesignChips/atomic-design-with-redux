module.exports = {
  "extends": [
    "eslint:recommended", // お好きなESLint設定をここに
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "jest/globals": true
  },
  "plugins": [
    "@typescript-eslint",
    "jest",
    "react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "overrides": [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
      }
    }
  ]
};
