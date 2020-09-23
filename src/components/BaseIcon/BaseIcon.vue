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
  faAnalytics as analytics,
  faEar as ear,
  faTachometerFast as tachometer,
} from '@fortawesome/pro-solid-svg-icons';

import {
  faFolder as folder,
  faSearch as search,
} from '@fortawesome/pro-regular-svg-icons';

import {
  faClipboardCheck as clipboardCheck,
  faPlus as plus,
  faTimes as close,
  faGift as gift,
} from '@fortawesome/pro-light-svg-icons';

import {
  faBan as ban,
  faBell as bell,
  faBuilding as building,
  faCalendar as calendar,
  faCheck as check,
  faCheckCircle as checkCircle,
  faClock as clock,
  faCloudUploadAlt as upload,
  faCogs as cogs,
  faExclamation as alert,
  faExclamationCircle as alertCircle,
  faExclamationTriangle as alertTriangle,
  faLock as lock,
  faPen as pen,
  faPhoneAlt as phone,
  faPrint as print,
  faQuestion as question,
  faQuestionCircle as questionCircle,
  faSignOutAlt as signOut,
  faUsers as users,
  faTrash as trash,
  faWrench as wrench,
  faGift as giftSolid,
} from '@fortawesome/free-solid-svg-icons';

import caretDown from '../../assets/icons/caret-down.svg';
import eyeClosed from '../../assets/icons/eye-closed.svg';
import eyeOpen from '../../assets/icons/eye-open.svg';

import getAttributes from '../../util/getAttributes';

const FAIcons = Object.freeze({
  alert,
  alertCircle,
  alertTriangle,
  analytics,
  ban,
  bell,
  building,
  calendar,
  check,
  checkCircle,
  clipboardCheck,
  clock,
  close,
  cogs,
  ear,
  folder,
  gift,
  giftSolid,
  lock,
  pen,
  phone,
  plus,
  print,
  question,
  questionCircle,
  search,
  signOut,
  tachometer,
  trash,
  upload,
  users,
  wrench,
});

Object.values(FAIcons).forEach((icon) => {
  library.add(icon);
});

const CustomIcons = Object.freeze({
  caretDown,
  eyeClosed,
  eyeOpen,
});

export const Icons = Object.freeze(
  [...Object.keys(FAIcons), ...Object.keys(CustomIcons)].sort().reduce(
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
 * `import { BaseIcon } from '@bambee/pollen';`
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
