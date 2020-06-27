<template functional>
  <div
    class="field-container"
    :class="[
      `field-container__${props.variant}`,
      `field-container__${props.size}`,
      {
        'field-container__disabled': props.disabled,
        'field-container__invalid': props.invalid,
        'field-container__focused': props.focused,
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
  @apply border
    border-transparent
    flex 
    items-center 
    relative
    /* For legacy */
    box-border
    border-solid;
}

.field-container__standard {
  @apply bg-white
    border-gray-4;
}

.field-container__standard:hover:not(.field-container__disabled) {
  @apply border-gray-3;
}

.field-container__standard.field-container__focused,
.field-container__standard.field-container__focused:hover:not(.field-container__disabled) {
  @apply border-primary;
}

.field-container__raised,
.field-container__raised.field-container__focused,
.field-container__raised.field-container__focused:hover:not(.field-container__disabled) {
  @apply bg-white
    shadow-2;
}

.field-container__raised:hover:not(.field-container__disabled) {
  @apply shadow-3;
}

.field-container__ghost,
.field-container__ghost.field-container__focused,
.field-container__ghost.field-container__focused:hover:not(.field-container__disabled) {
  background: rgba(0, 0, 0, 0.04);
}

.field-container__ghost:hover {
  background: rgba(0, 0, 0, 0.06);
}

.field-container__ghost-inverted,
.field-container__ghost-inverted.field-container__focused,
.field-container__ghost-inverted.field-container__focused:hover:not(.field-container__disabled) {
  background: rgba(255, 255, 255, 0.2);
}

.field-container__ghost-inverted:hover:not(.field-container__disabled) {
  background: rgba(255, 255, 255, 0.3);
}

.field-container__dense {
  @apply font-body-text rounded;
}

.field-container__normal {
  @apply font-body-text rounded-md;
}

.field-container__large {
  @apply font-body-medium rounded-md;
}

.field-container__disabled,
.field-container__disabled >>> [disabled] {
  @apply cursor-not-allowed;
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
