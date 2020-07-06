<template functional>
  <div
    :id="`${props.fieldId}-error`"
    class="field-error"
    :class="`field-error--${props.variant}`"
    role="alert"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fieldId: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.field-error {
  @apply absolute bottom-0 font-body-small inset-x-0 pt-1 text-error transform translate-y-full;
}

/* .field-error--ghost-inverted {
  @apply text-error-light-ghost;
} */
</style>
