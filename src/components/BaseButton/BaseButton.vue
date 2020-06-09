<template functional>
  <component
    :is="props.tag"
    :class="[
      data.class,
      data.staticClass,
      `base-button__${props.variant}`,
      `base-button__${props.size}`,
      {
        'base-button__flat': props.flat,
        'base-button__regular': !props.flat,
        'base-button__inline': !props.block,
        'base-button__block': props.block,
      },
    ]"
    class="base-button"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <BaseIcon
      v-if="preIcon"
      :icon="props.preIcon"
      class="base-button--icon base-button--icon__pre"
    />
    <span class="base-button--inner">
      <slot />
    </span>
    <BaseIcon
      v-if="postIcon"
      :icon="props.postIcon"
      class="base-button--icon base-button--icon__post"
    />
  </component>
</template>

<script>
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';

const { Sizes, Variants } = Button;

export default {
  components: { BaseIcon },
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    preIcon: {
      type: String,
      default: null,
    },
    postIcon: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    tag: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: Variants.PRIMARY,
      validator: (value) => Object.values(Variants).includes(value),
    },
  },
};
</script>

<style scoped>
.base-button {
  @apply border-transparent
    cursor-pointer
    items-center
    rounded
    tracking-wide
    /* For legacy */
    border-solid;
}

.base-button[disabled] {
  @apply opacity-50;
}

.base-button:focus {
  @apply shadow-outline;
}

.base-button__small {
  @apply h-6 px-2 text-12;
}

.base-button__medium {
  @apply h-8 px-4 text-14;
}

.base-button__large {
  @apply h-10 px-6 text-16;
}

.base-button__giant {
  @apply px-8 text-18;
  height: 3.5rem;
}

.base-button__regular {
  @apply border-2;
}

.base-button__regular.base-button__primary {
  @apply bg-primary text-white;
}

.base-button__regular.base-button__primary:hover,
.base-button__regular.base-button__primary:active {
  @apply bg-primary-tint-1;
}

.base-button__regular.base-button__primary:focus {
  @apply border-primary-tint-3;
}

.base-button__regular.base-button__secondary {
  @apply bg-secondary text-white;
}

.base-button__regular.base-button__secondaryy:hover,
.base-button__regular.base-button__secondary:active {
  @apply bg-secondary-tint-1;
}

.base-button__regular.base-button__secondary:focus {
  @apply border-secondary-tint-3;
}

.base-button__regular.base-button__tertiary {
  @apply bg-error text-white;
}

.base-button__regular.base-button__tertiary:hover,
.base-button__regular.base-button__tertiary:active {
  background: #e32c50; /* This is a one-off color. */
}

.base-button__regular.base-button__tertiary:focus {
  border-color: #e35b76; /* This is a one-off color. */
}
</style>
