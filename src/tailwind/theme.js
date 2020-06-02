const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

const pixelFonts = [10, 12, 13, 14, 16, 17, 18, 19, 23, 28, 33, 40];

const fontSize = pixelFonts.reduce(
  (obj, val) => ({
    ...obj,
    [`${val}`]: `${val / 16}rem`,
  }),
  {}
);

module.exports = {
  colors: {
    // Base
    primary: '#481d72',
    'primary-shade': {
      '2': '#260347',
      '1': '#3D1266',
    },
    'primary-tint': {
      '1': '#6B4392',
      '2': '#8E6BAF',
      '3': '#B096CB',
      '4': '#D3C3E3',
      '5': '#F6F4F8',
    },
    secondary: '#16a7a7',
    'secondary-shade': {
      '2': '#005D5D',
      '1': '#099393',
    },
    'secondary-tint': {
      '1': '#3AC0C0',
      '2': '#61D6D6',
      '3': '#91E7E7',
      '4': '#C2F4F4',
      '5': '#F8FDFD',
    },

    // Grayscale
    black: '#121212',
    gray: {
      '0': '#333234',
      '1': '#3F3E40',
      '2': '#4F4F4F',
      '3': '#828282',
      '4': '#C2C2C2',
      '5': '#E0E0E0',
      '6': '#F2F2F2',
      '7': '#FAFAFA',
    },
    white: '#fff',

    // Semantic accents
    error: '#B0223E',
    'error-light': '#FDF2F4',
    warning: '#EE8A2E',
    'warning-light': '#FFFDF2',
    success: '#00AB82',
    'success-light': '#F2FDFB',
    info: '#0988B0',
    'info-light': '#EFF9FC',

    // Third-party brand colors
    intercom: '#276EFA',
    facebook: '#3B5998',
    twitter: '#1DA1F2',
    google: '#4285F4',
    linkedin: '#0077B5',
    trustpilot: '#007F4E',
    youtube: '#FF0000',
  },
  fontFamily: {
    sans: "'proxima-soft', 'system-ui', sans-serif",
  },
  fontSize,
  fontWeight,
  inset: {
    '1/2': '50%',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.01em',
    wider: '0.075em',
    widest: '0.1em',
  },
  opacity: {
    '0': '0',
    '10': '.1',
    '20': '.2',
    '30': '.3',
    '40': '.4',
    '50': '.5',
    '60': '.6',
    '70': '.7',
    '80': '.8',
    '90': '.9',
    '100': '1',
  },
};
