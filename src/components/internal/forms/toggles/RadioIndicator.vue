<script>
import Form from '../../../../constants/Form';

export default {
  functional: true,
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    focused: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: Form.Sizes.NORMAL,
      validator: (value) => Object.values(Form.Sizes).includes(value),
    },
    variant: {
      type: String,
      default: Form.Variants.STANDARD,
      validator: (value) =>
        [Form.Variants.STANDARD, Form.Variants.RAISED].includes(value),
    },
  },
  render(h, { data, props }) {
    return h(
      'div',
      {
        ...data,
        class: [
          data.class,
          data.staticClass,
          'radio-indicator',
          `radio-indicator--${props.size}`,
          `radio-indicator--${props.variant}`,
          {
            'radio-indicator--checked': props.checked,
            'radio-indicator--disabled': props.disabled,
            'radio-indicator--focused': props.focused,
            'radio-indicator--invalid': props.invalid,
          },
        ],
      },
      []
    );
  },
};
</script>

<style scoped>
.radio-indicator {
  @apply border
    border-transparent
    box-border
    duration-75
    ease-out
    flex
    flex-shrink-0
    items-center
    justify-center
    relative
    rounded-full
    transition-all
    /* For legacy */
    border-solid;
}

.radio-indicator--standard {
  @apply border-gray-4;
}

.radio-indicator--raised {
  @apply shadow-1;
}

.radio-indicator--raised:hover {
  @apply shadow-2;
}

.radio-indicator--checked {
  @apply border-2 border-primary;
}

.radio-indicator--focused {
  @apply shadow-outline;
}

.radio-indicator >>> .base-icon {
  @apply absolute;
}

.radio-indicator--dense {
  @apply h-4 w-4;
}

.radio-indicator--normal {
  @apply h-6 w-6;
}

.radio-indicator--large {
  @apply h-8 w-8;
}

.radio-indicator--invalid {
  @apply border-error;
}

.radio-indicator--checked::after {
  @apply absolute
    bg-primary
    block
    h-0
    rounded-full
    w-1/2;
  content: '';
  padding-top: 50%;
}

.radio-indicator--invalid.radio-indicator--checked::after {
  @apply bg-error;
}

.radio-indicator--raised.radio-indicator--disabled:not(.radio-indicator--checked) {
  @apply bg-gray-5 shadow-none;
}
</style>
