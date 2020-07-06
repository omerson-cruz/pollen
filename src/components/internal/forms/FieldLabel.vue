<template functional>
  <div
    class="field-label"
    :class="[
      `field-label--${props.variant}`,
      `field-label--${props.size}`,
      {
        'field-label--disabled': props.disabled,
        'field-label--invalid': props.invalid,
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
.field-label--dense {
  @apply font-body-text mb-1;
}

.field-label--normal {
  @apply font-body-text mb-2;
}

.field-label--large {
  @apply font-body-medium mb-2;
}

/* .field-label--ghost-inverted {
  @apply text-white;
} */

.field-label--invalid {
  @apply text-error;
}

/* .field-label--invalid.field-label--ghost-inverted {
  @apply text-error-light-ghost;
} */
</style>
