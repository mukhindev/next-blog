module.exports = {
  extends: [
    'airbnb',
    'plugin:markdown/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'prefer-template': 'off',
  },
};
