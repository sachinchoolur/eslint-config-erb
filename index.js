module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    'plugin:prettier/recommended',
    require.resolve('eslint-config-prettier/flowtype'),
    require.resolve('eslint-config-prettier/react')
  ],
  plugins: ['flowtype', 'import', 'promise', 'compat', 'react'],
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'arrow-parens': 'off',
    'compat/compat': 'error',
    'consistent-return': 'off',
    'comma-dangle': 'off',
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'warn',
    'flowtype/delimiter-dangle': ['error', 'never'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-weak-types': 'warn',
    'flowtype/object-type-delimiter': ['error', 'comma'],
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/semi': ['error', 'always'],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'error',
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-multi-assign': 'off',
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'react/static-property-placement': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'react/jsx-no-bind': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off'
  }
};
