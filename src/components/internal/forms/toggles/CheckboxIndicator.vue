<script>
import BaseIcon, { Icons } from '../../../BaseIcon/BaseIcon.vue';
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
          'checkbox-indicator',
          `checkbox-indicator--${props.size}`,
          `checkbox-indicator--${props.variant}`,
          {
            'checkbox-indicator--checked': props.checked,
            'checkbox-indicator--disabled': props.disabled,
            'checkbox-indicator--focused': props.focused,
            'checkbox-indicator--invalid': props.invalid,
          },
        ],
      },
      [<BaseIcon icon={Icons.CHECK} />]
    );
  },
};
</script>

<style scoped>
.checkbox-indicator {
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
    text-white
    transition-all
    /* For legacy */
    border-solid;
}

.checkbox-indicator--standard {
  @apply border-gray-4;
}

.checkbox-indicator--raised {
  @apply shadow-1;
}

.checkbox-indicator--raised:hover {
  @apply shadow-2;
}

.checkbox-indicator--checked {
  @apply bg-primary border-primary;
}

.checkbox-indicator--focused {
  @apply shadow-outline;
}

.checkbox-indicator >>> .base-icon {
  @apply absolute
    duration-75 
    ease-out
    opacity-0 
    transition-opacity;
}

.checkbox-indicator--checked >>> .base-icon {
  @apply opacity-100;
}

.checkbox-indicator--dense {
  @apply h-4 rounded text-10 w-4;
}

.checkbox-indicator--normal {
  @apply h-6 rounded-md text-14 w-6;
}

.checkbox-indicator--large {
  @apply h-8 rounded-md text-19 w-8;
}

.checkbox-indicator--invalid {
  @apply border-error;
}

.checkbox-indicator--invalid.checkbox-indicator--checked {
  @apply bg-error;
}

.checkbox-indicator--raised.checkbox-indicator--disabled:not(.checkbox-indicator--checked) {
  @apply bg-gray-5 shadow-none;
}
</style>
