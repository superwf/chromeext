module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    webextensions: true,
    es6: true,
  },
  // globals: {
  //   chrome:  true,
  // },
  rules: {
    'prettier/prettier': 'error',
    semi: [2, 'never'],
    'no-console': 0,
  },
}
