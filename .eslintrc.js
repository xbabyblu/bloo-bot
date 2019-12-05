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
  },
};
