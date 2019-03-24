module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['prettier', 'eslint-plugin-react'],
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['warn', 'error', 'log', 'table'] }],
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0
  }
}