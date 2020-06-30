<template functional>
  <component
    :is="props.tag"
    :class="[`type-overline-${props.variant}`, data.class, data.staticClass]"
    class="type-overline"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
import Typography from '../../constants/Typography';
import getAttributes from '../../util/getAttributes';

const { Overline } = Typography;

/**
 * A styled block of text.
 */
export default {
  props: {
    /** The html tag to use for this component. */
    tag: {
      type: String,
      default: 'span',
    },
    /** One of 'small', 'medium', or 'large'. */
    variant: {
      type: String,
      default: Typography.Overline.SMALL,
      validator: (value) => Object.values(Overline).includes(value),
    },
  },
  getAttributes,
};
</script>

<style>
/* Intentionally left unscoped to provide global helper styles. */
@each $variant in small, medium, large {
  .type-overline-$(variant) {
    @apply font-overline-$(variant);
  }
}
</style>
