module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    requireConfigFile: false,
  },
  plugins: ['prettier', 'html', 'react-hooks'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'warn',
  },
};
