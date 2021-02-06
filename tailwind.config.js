const theme = require('./src/tailwind/theme');
const typographyPlugin = require('./src/tailwind/plugins/typography');

const { inset, spacing, transitionDuration, ...rest } = theme.default;

module.exports = {
  purge: false,
  important: true,
  theme: {
    ...rest,
    extend: {
      inset,
      spacing,
      transitionDuration,
    },
  },
  variants: {},
  plugins: [typographyPlugin],
};
