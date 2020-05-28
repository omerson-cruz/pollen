<template functional>
  <component
    :is="$options.getComponent(props.icon)"
    :class="[data.class, data.staticClass]"
    class="base-icon"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  />
</template>

<script>
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import getAttributes from '../../util/getAttributes';
import 'vue-material-design-icons/styles.css';

const close = () => import('vue-material-design-icons/Close');
const folder = () => import('vue-material-design-icons/FolderOutline');
const magnify = () => import('vue-material-design-icons/Magnify');
const plus = () => import('vue-material-design-icons/Plus');

const IconComponents = Object.freeze({
  close,
  folder,
  magnify,
  plus,
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
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value) => camelCase(value) in IconComponents,
    },
  },
  getAttributes,
  getComponent: (icon) => IconComponents[camelCase(icon)] || null,
};
</script>

<style lang="scss" scoped></style>
