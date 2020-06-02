const theme = require('./src/tailwind/theme');
const typographyPlugin = require('./src/tailwind/plugins/typography');

const {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  inset,
  letterSpacing,
  opacity,
} = theme;

module.exports = {
  purge: false,
  theme: {
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    opacity,
    extend: {
      inset,
    },
  },
  variants: {},
  plugins: [typographyPlugin],
};
