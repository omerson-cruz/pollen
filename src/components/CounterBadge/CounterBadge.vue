<template>
  <div
    class="counter-badge"
    :class="[`counter-badge--${size}`, `counter-badge--${variant}`]"
  >
    {{ formattedNumber }}
  </div>
</template>

<script>
import abbreviateNumber from '../../util/abbreviateNumber';

export const Sizes = Object.freeze({
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
});

export const Variants = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
});

export default {
  props: {
    /** One of `small`, `medium`, or `large`. */
    size: {
      type: String,
      default: Sizes.MEDIUM,
    },
    /**
     * A number to display. Large numbers (over 1,000) will be displayed
     * abbreviated, i.e. 1,123 will show as 1.1K
     */
    value: {
      type: Number,
      default: 0,
    },
    /** One of `primary`, `secondary`, and `tertiary`. */
    variant: {
      type: String,
      default: Variants.PRIMARY,
    },
  },
  computed: {
    formattedNumber() {
      return abbreviateNumber(this.value);
    },
  },
};
</script>

<style scoped>
.counter-badge {
  @apply box-border
    font-bold 
    inline-flex
    items-center
    justify-center
    rounded-full
    text-center
    text-white;
}

.counter-badge--primary {
  @apply bg-primary;
}

.counter-badge--secondary {
  @apply bg-secondary;
}

.counter-badge--tertiary {
  @apply bg-error;
}

.counter-badge--small {
  @apply font-body-legal h-3;
  min-width: 0.75rem;
  padding: 0 0.125rem;
}

.counter-badge--medium {
  @apply font-body-legal h-4 px-1;
  min-width: 1rem;
}

.counter-badge--large {
  @apply font-body-small h-6 px-1;
  min-width: 1.5rem;
}
</style>
