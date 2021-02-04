const plugin = require('tailwindcss/plugin');
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
  plugins: [
    typographyPlugin,
    plugin(function ({ addUtilities }) {
      const newGradientUtility = {
        '.bg-gradient-purple': {
          backgroundImage:
            'linear-gradient(103.15deg, #6B4392 0%, #3D1266 100%);',
        },
      };

      addUtilities(newGradientUtility);
    }),
  ],
};
