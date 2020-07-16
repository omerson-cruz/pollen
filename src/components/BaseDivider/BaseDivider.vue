<template functional>
  <div
    class="base-divider"
    :class="[
      {
        'base-divider--dashed': props.dashed,
        'base-divider--solid': !props.dashed,
        'base-divider--horizontal': !props.vertical,
        'base-divider--vertical': props.vertical,
      },
      data.class,
      data.staticClass,
    ]"
    v-bind="$options.getAttributes({ data, parent })"
    role="separator"
    v-on="listeners"
  >
    <div v-if="props.label" class="base-divider__label">{{ props.label }}</div>
  </div>
</template>

<script>
import getAttributes from '../../util/getAttributes';

export default {
  getAttributes,
  props: {
    dashed: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.base-divider {
  @apply flex items-center;
}

.base-divider::before,
.base-divider::after {
  @apply block flex-grow;
  content: '';
}

.base-divider--solid::before,
.base-divider--solid::after {
  @apply bg-gray-5;
}

.base-divider--horizontal.base-divider--dashed::before,
.base-divider--horizontal.base-divider--dashed::after {
  background: repeating-linear-gradient(
    90deg,
    #e0e0e0,
    #e0e0e0 2px,
    transparent 2px,
    transparent 4px
  );
}

.base-divider--vertical.base-divider--dashed::before,
.base-divider--vertical.base-divider--dashed::after {
  background: repeating-linear-gradient(
    0deg,
    #e0e0e0,
    #e0e0e0 2px,
    transparent 2px,
    transparent 4px
  );
}

.base-divider--horizontal {
  @apply h-4 w-full;
}

.base-divider--horizontal::before,
.base-divider--horizontal::after {
  height: 1px;
}

.base-divider--vertical {
  @apply flex-col h-full w-4;
}

.base-divider--vertical::before,
.base-divider--vertical::after {
  width: 1px;
}

.base-divider__label {
  @apply font-overline-small text-gray-4;
}

.base-divider--horizontal .base-divider__label {
  @apply px-2;
}

.base-divider--vertical .base-divider__label {
  @apply py-2;
}
</style>
