/**
 * Commonly used configuration objects for use with Cleave. See:
 * https://github.com/nosir/cleave.js/blob/master/doc/options.md
 */
const InputMasks = Object.freeze({
  CURRENCY: {
    prefix: '$ ',
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    noImmediatePrefix: true,
  },

  FEIN: {
    delimiters: ['-'],
    blocks: [2, 7],
    numericOnly: true,
  },

  PHONE: {
    delimiters: ['(', ') ', '-'],
    blocks: [0, 3, 3, 4],
    numericOnly: true,
  },

  YEAR: {
    blocks: [4],
    numericOnly: true,
  },

  ZIP_CODE: {
    blocks: [5],
    numericOnly: true,
  },
});

export default InputMasks;
