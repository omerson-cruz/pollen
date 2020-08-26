const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, config }) => {
  const typography = {
    '.font-body-legal': {
      fontSize: config('theme.fontSize.10'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.4,
    },
    '.font-body-caption': {
      fontSize: config('theme.fontSize.12'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.333,
    },
    '.font-body-small': {
      fontSize: config('theme.fontSize.13'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.385,
    },
    '.font-body-text': {
      fontSize: config('theme.fontSize.14'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.429,
    },
    '.font-body-medium': {
      fontSize: config('theme.fontSize.16'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.5,
    },
    '.font-body-large': {
      fontSize: config('theme.fontSize.18'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.333,
    },
    '.font-overline-small': {
      fontSize: config('theme.fontSize.10'),
      fontWeight: config('theme.fontWeight.bold'),
      letterSpacing: config('theme.letterSpacing.widest'),
      lineHeight: 1.6,
      textTransform: 'uppercase',
    },
    '.font-overline-medium': {
      fontSize: config('theme.fontSize.12'),
      fontWeight: config('theme.fontWeight.bold'),
      letterSpacing: config('theme.letterSpacing.widest'),
      lineHeight: 1.333,
      textTransform: 'uppercase',
    },
    '.font-overline-large': {
      fontSize: config('theme.fontSize.14'),
      fontWeight: config('theme.fontWeight.bold'),
      letterSpacing: config('theme.letterSpacing.widest'),
      lineHeight: 1.143,
      textTransform: 'uppercase',
    },
    '.font-heading-subtitle': {
      fontSize: config('theme.fontSize.16'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.5,
      '&-strong': {
        fontWeight: config('theme.fontWeight.semibold'),
      },
    },
    '.font-heading-title': {
      fontSize: config('theme.fontSize.17'),
      fontWeight: config('theme.fontWeight.semibold'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.412,
    },
    '.font-heading-title-special': {
      fontSize: config('theme.fontSize.17'),
      fontWeight: config('theme.fontWeight.semibold'),
      letterSpacing: config('theme.letterSpacing.wider'),
      lineHeight: 1.412,
      textTransform: 'uppercase',
    },
    '.font-heading-headline': {
      fontSize: config('theme.fontSize.19'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.263,
    },
    '.font-display-mega': {
      fontSize: config('theme.fontSize.23'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.217,
      '&-strong': {
        fontWeight: config('theme.fontWeight.semibold'),
      },
    },
    '.font-display-giga': {
      fontSize: config('theme.fontSize.28'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.143,
    },
    '.font-display-tera': {
      fontSize: config('theme.fontSize.33'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.212,
    },
    '.font-display-peta': {
      fontSize: config('theme.fontSize.40'),
      letterSpacing: config('theme.letterSpacing.tight'),
      lineHeight: 1.225,
    },
  };
  Object.keys(typography).forEach((key) => {
    typography[key][
      'font-feature-settings'
    ] = `'ss07' on, 'ss08' on, 'ss02' on`;
  });
  addUtilities(typography);
});
