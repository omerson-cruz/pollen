<template functional>
  <div
    class="field-container"
    :class="[
      `field-container__${props.variant}`,
      `field-container__${props.size}`,
      {
        'field-container__disabled': props.disabled,
        'field-container__invalid': props.invalid,
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
.field-container {
  @apply flex 
    items-center 
    relative
    /* For legacy */
    box-border;
}

.field-container__standard {
  @apply bg-white
    border
    border-gray-4
    /* For legacy */
    border-solid;
}

.field-container__raised {
  @apply bg-white
    shadow-2;
}

.field-container__ghost {
  background: rgba(0, 0, 0, 0.04);
}

.field-container__ghost-inverted {
  background: rgba(255, 255, 255, 0.2);
}

.field-container__dense {
  @apply font-body-text rounded px-3;
}

.field-container__normal {
  @apply font-body-text rounded-md px-4;
}

.field-container__large {
  @apply font-body-medium rounded-md px-4;
}

.field-container__disabled.field-container__standard,
.field-container__disabled.field-container__raised {
  @apply bg-gray-7;
}

.field-container__disabled.field-container__ghost {
  background: rgba(0, 0, 0, 0.02);
}

.field-container__disabled.field-container__ghost-inverted {
  background: rgba(255, 255, 255, 0.1);
}

.field-container__standard.field-container__invalid {
  @apply border-error;
}
</style>
