<template functional>
  <component
    :is="props.tag"
    :class="[
      `type-display-${props.variant}`,
      `type-display-${props.variant}__${props.weight}`,
      data.class,
      data.staticClass,
    ]"
    class="type-display"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
import Typography from '../../constants/Typography';
import getAttributes from '../../util/getAttributes';

const { Display, Weights } = Typography;

export default {
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    variant: {
      type: String,
      default: Display.PETA,
      validator: (value) => Object.values(Display).includes(value),
    },
    weight: {
      type: String,
      default: Weights.STRONG,
      validator: (value) => [Weights.REGULAR, Weights.STRONG].includes(value),
    },
  },
  getAttributes,
};
</script>

<style>
@each $variant in mega, giga, tera, peta {
  .type-display-$(variant) {
    @apply font-display-$(variant);
  }

  .type-display-$(variant)__regular {
    @apply font-normal;
  }

  .type-display-$(variant)__strong {
    @apply font-semibold;
  }
}
</style>
