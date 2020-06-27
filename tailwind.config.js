const theme = require('./src/tailwind/theme');
const typographyPlugin = require('./src/tailwind/plugins/typography');

const { inset, spacing, ...rest } = theme;

module.exports = {
  purge: false,
  theme: {
    ...rest,
    extend: {
      inset,
      spacing,
    },
  },
  variants: {},
  plugins: [typographyPlugin],
};
