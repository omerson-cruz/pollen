<template functional>
  <component
    :is="$options.getComponent(props.icon)"
    :class="[
      data.class,
      data.staticClass,
      { 'base-icon--custom': $options.isCustomIcon(props.icon) },
    ]"
    :icon="$options.getIcon(props.icon)"
    class="base-icon"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  />
</template>

<script>
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faFolder as folder,
  faSearch as search,
} from '@fortawesome/pro-regular-svg-icons';

import {
  faClipboardCheck as clipboardCheck,
  faPlus as plus,
  faTimes as close,
} from '@fortawesome/pro-light-svg-icons';

import {
  faCheck as check,
  faLock as lock,
} from '@fortawesome/free-solid-svg-icons';

import eyeClosed from '../../assets/icons/eye-closed.svg';
import eyeOpen from '../../assets/icons/eye-open.svg';

import getAttributes from '../../util/getAttributes';

const FAIcons = Object.freeze({
  check,
  clipboardCheck,
  close,
  folder,
  lock,
  search,
  plus,
});

Object.values(FAIcons).forEach((icon) => {
  library.add(icon);
});

const CustomIcons = Object.freeze({
  eyeClosed,
  eyeOpen,
});

export const Icons = Object.freeze(
  [...Object.keys(FAIcons), ...Object.keys(CustomIcons)].reduce(
    (obj, val) => ({
      ...obj,
      [snakeCase(val).toUpperCase()]: val,
    }),
    {}
  )
);

export const isValidIcon = (value) =>
  Object.values(Icons).includes(camelCase(value));

const isCustomIcon = (iconName) => Object.keys(CustomIcons).includes(iconName);

const getComponent = (iconName) =>
  isCustomIcon(iconName) ? CustomIcons[iconName] : FontAwesomeIcon;

/**
 * `import { BaseIcon } from '@bambeehr/pollen';`
 *
 * An SVG icon component pulling from Bambee's predefined icon set. Icons are
 * designed to be styled according to the contextual size and font color, e.g.
 * if you want a red, 40px icon, make sure it or its containing element is
 * styled with `color: red; font-size: 40px;`.
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
  getIcon: (icon) => FAIcons[camelCase(icon)] || null,
  isCustomIcon,
};
</script>

<style>
.base-icon--custom {
  height: 1em;
  width: 1em;
}
</style>
