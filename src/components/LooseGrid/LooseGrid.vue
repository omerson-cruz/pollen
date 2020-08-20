<template functional>
  <div
    class="loose-grid"
    :class="[`loose-grid--${props.width}`, data.class, data.staticClass]"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <slot />
  </div>
</template>

<script>
import Grid from '../../constants/Grid';
import getAttributes from '../../util/getAttributes';

/**
 * import { TightGrid } from '@bambee/pollen';
 *
 * This creates a 12-column grid container `div` with a 24px (1.rrem) column
 * gap. Ideally this will be used with the Tailwind grid helper classes
 * (https://tailwindcss.com/docs/grid-column) but vanilla CSS for grids can also
 * be used.
 */
export default {
  getAttributes,
  props: {
    /**
     * One of `narrow`, `wide`, `auto`, and `full-bleed`. Narrow will give a
     * 768px interior width container with 24px x-axis padding. `wide` does the
     * same but with 960px interior width. `auto` fills to the container, but
     * with 16px padding, while `full-bleed` fills the container without
     * padding.
     */
    width: {
      type: String,
      default: Grid.Widths.AUTO,
      validator: (value) => Object.values(Grid.Widths).includes(value),
    },
  },
};
</script>

<style scoped>
.loose-grid {
  @apply box-border gap-6 grid grid-cols-12 mx-auto w-full;
}

.loose-grid--narrow {
  @apply px-6;
  max-width: 51rem;
}

.loose-grid--wide {
  @apply px-6;
  max-width: 63rem;
}

.loose-grid--auto {
  @apply px-6;
}
</style>
