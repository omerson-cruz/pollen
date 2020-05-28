module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {},
  overrides: [
    {
      files: ['*.test.js'],
      env: { jest: true },
    },
    {
      files: ['*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': [0],
      },
    },
  ],
};
