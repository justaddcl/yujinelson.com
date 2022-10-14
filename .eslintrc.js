module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    requireConfigFile: false,
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'prettier',
    'html',
    'react-hooks',
    'spellcheck',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
  ],
  rules: {
    /**
     * Typescript-related rules.
     */
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    /**
     * General code style rules.
     */

    'id-length': ['error', { exceptions: ['_'] }],
    'no-nested-ternary': 'error',
    'no-unsafe-finally': 0,
    'no-useless-escape': 0,
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'import/order': [
      'error',
      {
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: '@components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@lib/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@modules/**',
            group: 'external',
            position: 'after',
          },
        ],
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

    /**
     * React-related rules.
     */
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/function-component-definition': 'off',
    'react/jsx-no-comment-textnodes': 'warn',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'warn',

    /**
     * JSX-a11y-related rules.
     */
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],

    /**
     * Spellchecking rules.
     */
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords: [
          'airbnb',
          'bellevue',
          'bezier',
          'boeing',
          'calc',
          'chiaro',
          'cms',
          'codepen',
          'dribbble',
          'duffel',
          'ecma',
          'ecommerce',
          'filesystem',
          'formik',
          'fot',
          'gatsby',
          'graphql',
          'grey',
          'headshot',
          'href',
          'japanese',
          'jsx',
          'justaddcl',
          'lang',
          'lastfm',
          'linkedin',
          'magpul',
          'mailto',
          'meilisearch',
          'monospace',
          'noopener',
          'noreferrer',
          'programmes',
          'proxima',
          'seo',
          'webkit',
          'wireframe',
          'xxl',
          'xxxl',
          'xxs',
          'yn_nydev',
          'yneo97',
          'yuji',
          'yujinelson',
        ],
        skipIfMatch: ['http://[^s]*', 'https://[^s]*', '/[^s]*', '&nbsp;'],
        skipWordIfMatch: ['.*vh$', '.*vw$', '.*px$', '.*%$', '^[a-f0-9]{6}$'],
        minLength: 3,
      },
    ],
  },
};
