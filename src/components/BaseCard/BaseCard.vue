<template functional>
  <component
    :is="props.tag"
    class="base-card"
    :class="[
      { 'base-card--full-bleed': props.fullBleed },
      data.class,
      data.staticClass,
    ]"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <template v-if="$slots.header">
      <header class="base-card__header">
        <slot name="header" />
      </header>
    </template>
    <section class="base-card__content">
      <slot />
    </section>
    <template v-if="$slots.footer">
      <footer class="base-card__footer">
        <slot name="footer" />
      </footer>
    </template>
  </component>
</template>

<script>
import getAttributes from '../../util/getAttributes';

export default {
  getAttributes,
  props: {
    /** If true, removes the internal padding of the card. */
    fullBleed: {
      type: Boolean,
      default: false,
    },
    /** Defines the semantic tag for the root element. */
    tag: {
      type: String,
      default: 'article',
    },
  },
};
</script>

<style scoped>
.base-card {
  @apply bg-white flex flex-col rounded-md shadow-1 w-full;
}

.base-card__content {
  @apply flex-grow px-6 py-4;
}

.base-card__footer {
  @apply bg-gray-7 font-body-caption p-3 text-center text-gray-3;
}

.base-card--full-bleed .base-card__content {
  @apply p-0;
}
</style>
