module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': 0,
    'default-param-last': 0,
    'linebreak-style': 0,
    // 'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  },
};
