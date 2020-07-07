// TODO(jon.jandoc): For now we are disabling the ghost and ghost-inverted
// variants.
const Form = Object.freeze({
  Variants: {
    STANDARD: 'standard',
    RAISED: 'raised',
    // GHOST: 'ghost',
    // GHOST_INVERTED: 'ghost-inverted',
  },
  Sizes: {
    DENSE: 'dense',
    NORMAL: 'normal',
    LARGE: 'large',
  },
  LabelPositions: {
    LEFT: 'left',
    RIGHT: 'right',
  },
});

export default Form;
