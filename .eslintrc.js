module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb'
  ],
  plugins: ['prettier', 'jest', 'react', 'react-hooks'],
  globals: { React: true },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'promise/catch-or-return': 'error',
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-filename-extension': 0,
    'comma-dangle': 0,
    'no-nested-ternary': 0,
    'func-names': 0,
    'react/destructuring-assignment': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'react/jsx-uses-react': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/button-has-type': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true
      }
    ]
  }
};
