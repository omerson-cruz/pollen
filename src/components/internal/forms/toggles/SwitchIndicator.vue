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
  },
  render(h, { data, props }) {
    return h(
      'div',
      {
        ...data,
        class: [
          data.class,
          data.staticClass,
          'switch-indicator',
          `switch-indicator--${props.size}`,
          {
            'switch-indicator--checked': props.checked,
            'switch-indicator--disabled': props.disabled,
            'switch-indicator--focused': props.focused,
            'switch-indicator--invalid': props.invalid,
          },
        ],
      },
      []
    );
  },
};
</script>

<style scoped>
.switch-indicator {
  @apply bg-gray-4
    box-border
    duration-75
    ease-out
    flex-shrink-0
    inline-flex
    items-center
    justify-center
    relative
    rounded-full
    transition-colors;
}

.switch-indicator--checked {
  @apply bg-primary;
}

.switch-indicator--raised:hover {
  @apply shadow-2;
}
.switch-indicator--focused {
  @apply shadow-outline;
}

.switch-indicator--invalid {
  @apply bg-error;
}

.switch-indicator::after {
  @apply bg-white 
    block 
    duration-75 
    ease-in-out 
    rounded-full 
    shadow-1 
    transition-transform;
  content: '';
}

.switch-indicator:hover::after {
  @apply shadow-3;
}

.switch-indicator--dense {
  @apply h-4 w-8;
  padding: 0 0.1875rem;
}

.switch-indicator--dense::after {
  height: 0.625rem; /* 10px */
  transform: translateX(-90%);
  width: 0.625rem;
}

.switch-indicator--checked.switch-indicator--dense::after {
  transform: translateX(90%);
}

.switch-indicator--normal {
  @apply h-6 w-12;
}

.switch-indicator--normal::after {
  @apply h-4 w-4;
  transform: translateX(-75%);
}

.switch-indicator--checked.switch-indicator--normal::after {
  transform: translateX(75%);
}

.switch-indicator--large {
  @apply h-8 w-16;
}

.switch-indicator--large::after {
  @apply h-6 w-6;
  transform: translateX(-66.7%);
}

.switch-indicator--checked.switch-indicator--large::after {
  transform: translateX(66.7%);
}

.switch-indicator--invalid.switch-indicator--checked {
  @apply bg-error;
}
</style>
