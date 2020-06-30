<template functional>
  <component
    :is="props.tag"
    :class="[
      `type-body-${props.variant}`,
      `type-body-${props.variant}__${props.weight}`,
      data.class,
      data.staticClass,
    ]"
    class="type-body"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
import Typography from '../../constants/Typography';
import getAttributes from '../../util/getAttributes';

const { Body, Weights } = Typography;

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
    /** One of `legal`, `caption`, `small`, `text`, `medium`, or `large`. */
    variant: {
      type: String,
      default: Typography.Body.TEXT,
      validator: (value) => Object.values(Body).includes(value),
    },
    /** One of `regular`, `medium`, or `strong`. */
    weight: {
      type: String,
      default: Typography.Weights.REGULAR,
      validator: (value) => Object.values(Weights).includes(value),
    },
  },
  getAttributes,
};
</script>

<style>
/* Intentionally left unscoped to provide global helper styles. */
@each $variant in legal, caption, small, text, medium, large {
  .type-body-$(variant) {
    @apply font-body-$(variant);
  }

  .type-body-$(variant)__regular {
    @apply font-normal;
  }

  .type-body-$(variant)__medium {
    @apply font-medium;
  }

  .type-body-$(variant)__strong {
    @apply font-semibold;
  }
}
</style>
