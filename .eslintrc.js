module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  env: { node: true, browser: true },
  globals: { VERSION: false },
  rules: {
    'max-len': 'off',
    'class-methods-use-this': 'warn',
    'comma-dangle': ['warn', 'never'],
    'no-plusplus': 'off',
    'radix': ['warn', 'as-needed'],
    'no-nested-ternary': 'off',
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true, ImportDeclaration: true } }],
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/no-unescaped-entities': 'off',
    'react/jsx-curly-brace-presence': ['warn', { 'props': 'always', 'children': 'never' }]
    'react/sort-comp': ['warn', { order: [
      'static-methods',
      'lifecycle',
      'everything-else',
      'render'
    ] }]
  }
}




