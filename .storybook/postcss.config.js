var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-each'),
    tailwindcss('./tailwind.config.js'), //This refers to your tailwind config
    require('autoprefixer'),
  ],
};
