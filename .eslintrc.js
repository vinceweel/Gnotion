module.exports = {
  parserOptions: { ecmaVersion: 2017, sourceType: 'module' },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: { 'prettier/prettier': ['error'] },
  env: { browser: true, node: true, mocha: false, jest: true },
}
