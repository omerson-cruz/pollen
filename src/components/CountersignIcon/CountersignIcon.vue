<template>
  <div
    class="countersign-icon"
    role="text"
    :aria-label="label"
    :title="label"
    :style="style"
  >
    <svg
      class="countersign-icon__checks"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="countersign-icon__check"
        :class="{ 'countersign-icon__check--signed': signed }"
        d="M23.7911 7.23176L22.3237 5.7119C22.1844 5.6069 22.0275 5.55493 21.8523 5.55493C21.6771 5.55493 21.5378 5.60743 21.4333 5.7119L7.65071 19.5465L2.56774 14.4635C2.46273 14.3237 2.32398 14.2541 2.1488 14.2541C1.97362 14.2541 1.81611 14.3237 1.67736 14.4635L0.209469 15.9303C0.0701801 16.0702 0 16.2277 0 16.4018C0 16.5759 0.0701801 16.7163 0.209469 16.8207L7.17927 23.8425C7.31856 23.9475 7.47552 24 7.65071 24C7.82589 24 7.96518 23.9475 8.06964 23.8425L23.7905 8.1216C23.9298 7.98177 24 7.82427 24 7.65016C24.0005 7.47658 23.9304 7.33622 23.7911 7.23176Z"
        fill="currentColor"
      />
      <path
        class="countersign-icon__check"
        :class="{ 'countersign-icon__check--signed': countersigned }"
        d="M7.06519 13.556C7.20555 13.6616 7.36412 13.7146 7.54091 13.7146C7.7177 13.7146 7.85806 13.6616 7.9636 13.556L18.9294 2.59024C19.0697 2.4488 19.141 2.29023 19.141 2.11451C19.141 1.93879 19.0697 1.79736 18.9294 1.69182L17.4492 0.158575C17.3088 0.0530369 17.1502 0 16.9734 0C16.7967 0 16.6563 0.0530369 16.5508 0.158575L7.54091 9.22092L4.30459 5.9846C4.19905 5.84317 4.05869 5.77299 3.8819 5.77299C3.70511 5.77299 3.54654 5.84317 3.40618 5.9846L1.92597 7.46481C1.78561 7.60624 1.71436 7.76482 1.71436 7.94053C1.71436 8.11679 1.78561 8.25768 1.92597 8.36322L7.06519 13.556Z"
        fill="currentColor"
      />
    </svg>
    <span class="countersign-icon__label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    /** If true, displays the top checkmark as complete. */
    countersigned: {
      type: Boolean,
      default: false,
    },
    /** If true, displays the bottom checkmark as complete. */
    signed: {
      type: Boolean,
      default: false,
    },
    /** The size of the square icon in pixels. */
    size: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    label() {
      if (this.signed && this.countersigned) {
        return 'Signatures completed';
      }
      if (this.signed) {
        return 'Awaiting counter signature';
      }
      if (this.countersigned) {
        return `Awaiting recipient's signature`;
      }
      return 'Awaiting signatures';
    },
    style() {
      return {
        height: `${this.size}px`,
        fontSize: `${this.size}px`,
        width: `${this.size}px`,
      };
    },
  },
};
</script>

<style scoped>
.countersign-icon__checks {
  @apply text-gray-0;
  height: 1em;
  width: 1em;
}

.countersign-icon__check {
  @apply opacity-30;
}

.countersign-icon__check--signed {
  @apply opacity-100 text-success;
}

.countersign-icon__label {
  @apply sr-only;
}
</style>
