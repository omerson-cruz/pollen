<template functional>
  <component
    :is="props.tag"
    :class="[
      `type-heading-${props.variant}`,
      `type-heading-${props.variant}--${props.weight}`,
      data.class,
      data.staticClass,
    ]"
    class="type-heading"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
import Typography from '../../constants/Typography';
import getAttributes from '../../util/getAttributes';

const { Heading, Weights } = Typography;

/**
 * `import { TypeHeading } from '@bambeehr/pollen';`
 * A styled block of text.
 */
export default {
  props: {
    /** The html tag to use for this component. */
    tag: {
      type: String,
      default: 'span',
    },
    /** One of `subtitle`, `title`, or `headline`. */
    variant: {
      type: String,
      default: Typography.Heading.HEADLINE,
      validator: (value) => Object.values(Heading).includes(value),
    },
    /** One of `regular`, or `strong`. */
    weight: {
      type: String,
      default: Typography.Weights.STRONG,
      validator: (value) => [Weights.REGULAR, Weights.STRONG].includes(value),
    },
  },
  getAttributes,
};
</script>

<style>
/* Intentionally left unscoped to provide global helper styles. */
@each $variant in subtitle, headline {
  .type-heading-$(variant) {
    @apply font-heading-$(variant);
  }

  .type-heading-$(variant)--regular {
    @apply font-normal;
  }

  .type-heading-$(variant)--strong {
    @apply font-semibold;
  }
}

.type-heading-title--regular {
  @apply font-heading-title;
}

.type-heading-title--strong {
  @apply font-heading-title-special;
}
</style>
