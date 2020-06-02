const theme = require('./src/theme');

const { colors, fontFamily, fontSize, inset } = theme;

module.exports = {
  purge: false,
  theme: {
    colors,
    fontFamily,
    extend: {
      fontSize,
      inset,
    },
  },
  variants: {},
  plugins: [],
};
