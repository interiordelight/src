module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  env: { node: true, browser: true },
  rules: {
    'max-len': 'off',
    'class-methods-use-this': 'warn',
    'comma-dangle': ['warn', 'never'],
    'no-plusplus': 'off',
    'radix': ['warn', 'as-needed'],
    'no-nested-ternary': 'off',
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true, ImportDeclaration: true } }],
    'no-restricted-globals': 'off',
    'object-curly-newline': ['warn', { consistent: true }],
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    // 'react/no-unescaped-entities': 'off', // to ensure code readability on GitHub online
    'react/jsx-curly-brace-presence': ['warn', { 'props': 'never', 'children': 'ignore' }],
    'react/jsx-closing-tag-location': 'off',
    'react/sort-comp': ['warn', { order: [
      'static-methods',
      'lifecycle',
      'everything-else',
      'render'
    ] }]
  }
}




