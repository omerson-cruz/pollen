const theme = require('./src/theme');

const { colors, fontFamily, fontSize } = theme;

module.exports = {
  purge: [],
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
