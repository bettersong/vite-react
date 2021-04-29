module.exports = {
  root:true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node:true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    "plugin:prettier/recommended"
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react','html'
  ],
  rules: {
  },
};
