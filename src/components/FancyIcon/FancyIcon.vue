<template functional>
  <component
    :is="$options.getComponent(props.icon)"
    :class="[data.class, data.staticClass]"
    class="fancy-icon"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  />
</template>

<script>
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

import clipboard from '../../assets/icons/fancy/clipboard.svg';
import signTablet from '../../assets/icons/fancy/sign-tablet.svg';

import getAttributes from '../../util/getAttributes';

const IconComponents = Object.freeze({
  clipboard,
  signTablet,
});

export const Icons = Object.freeze(
  Object.keys(IconComponents).reduce(
    (obj, val) => ({
      ...obj,
      [snakeCase(val).toUpperCase()]: val,
    }),
    {}
  )
);

export const isValidIcon = (value) =>
  Object.values(Icons).includes(camelCase(value));

const getComponent = (iconName) => IconComponents[iconName];

/**
 * `import { FancyIcon } from '@bambee/pollen';`
 *
 * An SVG icon component pulling from Bambee's predefined multi-color icon set.
 * These are sized using contextual font size, but unlike BaseIcons, their
 * colors will not change.
 */
export default {
  props: {
    /** The name of the icon to use. */
    icon: {
      type: String,
      required: true,
      validator: isValidIcon,
    },
  },
  getAttributes,
  getComponent,
};
</script>

<style>
.fancy-icon {
  @apply block leading-none;
  height: 1em;
  width: 1em;
}
</style>
