// prettier-ignore
module.exports = {
  root: true,
  env: { es6: true, node: true },
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 8 },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-base/legacy',
    'prettier'
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'max-len': ['warn', 120],
    'prefer-const': 'warn',
    'camelcase': 'off',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'function-paren-newline': ['error', 'consistent'],
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'quote-props': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'error',
    'global-require': 'off'
  }
};
