const theme = require('./src/theme');

const { colors, fontFamily, fontSize } = theme;

module.exports = {
  purge: false,
  theme: {
    colors,
    fontFamily,
    extend: {
      fontSize,
    },
  },
  variants: {},
  plugins: [],
};
