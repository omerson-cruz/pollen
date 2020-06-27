<template functional>
  <div
    class="field-label"
    :class="[
      `field-label__${props.variant}`,
      `field-label__${props.size}`,
      {
        'field-label__disabled': props.disabled,
        'field-label__invalid': props.invalid,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
import Form from '../../../constants/Form';

const { Sizes, Variants } = Form;

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    variant: {
      type: String,
      default: Variants.STANDARD,
      validator: (value) => Object.values(Variants).includes(value),
    },
  },
};
</script>

<style scoped>
.field-label__dense {
  @apply font-body-text mb-1;
}

.field-label__normal {
  @apply font-body-text mb-2;
}

.field-label__large {
  @apply font-body-medium mb-2;
}

.field-label__ghost-inverted {
  @apply text-white;
}

.field-label__invalid {
  @apply text-error;
}

.field-label__invalid.field-label__ghost-inverted {
  @apply text-error-light-ghost;
}
</style>
