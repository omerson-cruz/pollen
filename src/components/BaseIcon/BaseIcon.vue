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
  faTimes as close,
  faFolder as folder,
  faPlus as plus,
  faSearch as search,
} from '@fortawesome/pro-regular-svg-icons';

import getAttributes from '../../util/getAttributes';

const IconComponents = Object.freeze({
  close,
  folder,
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

export default {
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value) => camelCase(value) in IconComponents,
    },
  },
  FontAwesomeIcon,
  getAttributes,
  getIcon: (icon) => IconComponents[camelCase(icon)] || null,
};
</script>
