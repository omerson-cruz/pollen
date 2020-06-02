const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, config }) => {
  const typography = {
    '.type-body-legal': {
      fontSize: config('theme.fontSize.10'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.2,
    },
    '.type-body-caption': {
      fontSize: config('theme.fontSize.12'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.333,
    },
    '.type-body-small': {
      fontSize: config('theme.fontSize.13'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.385,
    },
    '.type-body-text': {
      fontSize: config('theme.fontSize.14'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.429,
    },
    '.type-body-medium': {
      fontSize: config('theme.fontSize.16'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.5,
    },
    '.type-body-large': {
      fontSize: config('theme.fontSize.18'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.333,
    },
    '.type-overline-small': {
      fontSize: config('theme.fontSize.10'),
      fontWeight: config('theme.fontWeight.bold'),
      letterSpacing: config('theme.letterSpacing.widest'),
      lineHeight: 1.6,
      textTransform: 'uppercase',
    },
    '.type-overline-medium': {
      fontSize: config('theme.fontSize.12'),
      fontWeight: config('theme.fontWeight.bold'),
      letterSpacing: config('theme.letterSpacing.widest'),
      lineHeight: 1.333,
      textTransform: 'uppercase',
    },
    '.type-overline-large': {
      fontSize: config('theme.fontSize.14'),
      fontWeight: config('theme.fontWeight.bold'),
      letterSpacing: config('theme.letterSpacing.widest'),
      lineHeight: 1.143,
      textTransform: 'uppercase',
    },
    '.type-heading-subtitle': {
      fontSize: config('theme.fontSize.16'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.5,
      '&-strong': {
        fontWeight: config('theme.fontWeight.semibold'),
      },
    },
    '.type-heading-title': {
      fontSize: config('theme.fontSize.17'),
      fontWeight: config('theme.fontWeight.semibold'),
      letterSpacing: config('theme.letterSpacing.wide'),
      lineHeight: 1.412,
    },
    '.type-heading-title-special': {
      fontSize: config('theme.fontSize.17'),
      fontWeight: config('theme.fontWeight.semibold'),
      letterSpacing: config('theme.letterSpacing.wider'),
      lineHeight: 1.412,
      textTransform: 'uppercase',
    },
    '.type-heading-headline': {
      fontSize: config('theme.fontSize.19'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.263,
    },
    '.type-display-mega': {
      fontSize: config('theme.fontSize.23'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.217,
      '&-strong': {
        fontWeight: config('theme.fontWeight.semibold'),
      },
    },
    '.type-display-giga': {
      fontSize: config('theme.fontSize.28'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.143,
    },
    '.type-display-tera': {
      fontSize: config('theme.fontSize.33'),
      letterSpacing: config('theme.letterSpacing.normal'),
      lineHeight: 1.212,
    },
    '.type-display-peta': {
      fontSize: config('theme.fontSize.40'),
      letterSpacing: config('theme.letterSpacing.tight'),
      lineHeight: 1.225,
    },
  };
  addUtilities(typography);
});
