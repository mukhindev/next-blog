module.exports = {
  extends: [
    'airbnb',
    'plugin:markdown/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'prefer-template': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/style-prop-object': 'off',
  },
};
