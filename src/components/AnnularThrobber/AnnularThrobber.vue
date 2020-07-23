<template functional>
  <div
    class="annular-throbber"
    :class="[`annular-throbber--${props.size}`, data.class, data.staticClass]"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  />
</template>

<script>
import getAttributes from '../../util/getAttributes';

export const Sizes = Object.freeze({
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
});

/**
 * A ring-shaped graphical element to show that an action is in progress. In
 * contrast to a progress bar, a throbber does not convey how much of the action
 * has been completed.
 */
export default {
  getAttributes,
  props: {
    /** One of `sm`, `md`, `lg`, or `xl`. */
    size: {
      type: String,
      default: Sizes.MD,
      validator: (value) => Object.values(Sizes).includes(value),
    },
  },
};
</script>

<style scoped>
.annular-throbber {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(60);
  background-size: auto 100%;
}

@keyframes moveSm {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -3840px;
  }
}

.annular-throbber--sm {
  @apply h-8 w-8;
  animation-name: moveSm;
  background-image: url(https://images.ctfassets.net/tb3mx4vb7wqk/7ly72lwgXSOmq29YG21AXt/09f7d806694add0cd3bbd79d6e388a44/logo-sprite.png?h=64);
}

@keyframes moveMd {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -5760px;
  }
}

.annular-throbber--md {
  @apply h-12 w-12;
  animation-name: moveMd;
  background-image: url(https://images.ctfassets.net/tb3mx4vb7wqk/7ly72lwgXSOmq29YG21AXt/09f7d806694add0cd3bbd79d6e388a44/logo-sprite.png?h=96);
}

@keyframes moveLg {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -7680px;
  }
}

.annular-throbber--lg {
  @apply h-16 w-16;
  animation-name: moveLg;
  background-image: url(https://images.ctfassets.net/tb3mx4vb7wqk/7ly72lwgXSOmq29YG21AXt/09f7d806694add0cd3bbd79d6e388a44/logo-sprite.png?h=128);
}

@keyframes moveXl {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -11520px;
  }
}

.annular-throbber--xl {
  @apply h-24 w-24;
  animation-name: moveXl;
  background-image: url(https://images.ctfassets.net/tb3mx4vb7wqk/7ly72lwgXSOmq29YG21AXt/09f7d806694add0cd3bbd79d6e388a44/logo-sprite.png?h=192);
}
</style>
