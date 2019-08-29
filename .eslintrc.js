// prettier-ignore
module.exports = {
  root: true,
  env: { es6: true, browser: true },
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 8 },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'prettier'
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'max-len': ['warn', 120],
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'warn',
    'camelcase': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'global-require': 'off',
    'radix': 'off',
    'quotes': ['error', 'single', 'avoid-escape'],
    'quote-props': ['error', 'consistent'],
    'import/no-unresolved': ['error', {
      ignore: [
        'redux-rest-resource',
        'mdi-react'
      ]
    }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/destructuring-assignment': 'off',
    'react/button-has-type': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'jsx-a11y/anchor-is-valid': ['error', { aspects: ['invalidHref', 'preferButton'] }],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off'
  }
};
