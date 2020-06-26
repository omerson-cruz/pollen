<template functional>
  <component
    :is="$options.FontAwesomeIcon"
    :class="[data.class, data.staticClass]"
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
  faEye as eye,
  faEyeSlash as eyeSlash,
  faPlus as plus,
  faTimes as close,
} from '@fortawesome/pro-light-svg-icons';

import { faLock as lock } from '@fortawesome/free-solid-svg-icons';

import getAttributes from '../../util/getAttributes';

const IconComponents = Object.freeze({
  clipboardCheck,
  close,
  eye,
  eyeSlash,
  folder,
  lock,
  search,
  plus,
});

Object.values(IconComponents).forEach((icon) => {
  library.add(icon);
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

export const isValidIcon = (value) => camelCase(value) in IconComponents;

export default {
  props: {
    icon: {
      type: String,
      required: true,
      validator: isValidIcon,
    },
  },
  FontAwesomeIcon,
  getAttributes,
  getIcon: (icon) => IconComponents[camelCase(icon)] || null,
};
</script>
