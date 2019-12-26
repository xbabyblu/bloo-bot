module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'linebreak-style': 'off',
    'no-unused-vars': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-shadow': ['error', { allow: ['_'] }],
    'prefer-destructuring': 'off',
    'import/no-dynamic-require': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'no-param-reassign': 'off',
    'new-cap': 'off',
    'no-console': 'warn',
    'prefer-template': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // N O P E
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      // },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 5, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 5, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 5, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 5, multiline: true, consistent: true },
      },
    ],
  },
};
