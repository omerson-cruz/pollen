<script>
import BaseIcon, { isValidIcon } from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';
import getAttributes from '../../util/getAttributes';

const { Sizes, Variants } = Button;

export default {
  functional: true,
  components: { BaseIcon },
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    preIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    postIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    tag: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: Variants.PRIMARY,
      validator: (value) => Object.values(Variants).includes(value),
    },
  },
  render(h, { data, props, parent, children }) {
    const preIcon = props.preIcon ? (
      <BaseIcon
        icon={props.preIcon}
        class="base-button--icon base-button--icon__pre"
      />
    ) : null;
    const postIcon = props.postIcon ? (
      <BaseIcon
        icon={props.postIcon}
        class="base-button--icon base-button--icon__post"
      />
    ) : null;
    const wrappedChildNodes = h('div', { class: 'base-button--inner' }, [
      preIcon,
      ...(children || []),
      postIcon,
    ]);

    return h(
      props.tag,
      {
        ...data,
        attrs: { ...getAttributes({ data, parent }) },
        class: [
          data.class,
          data.staticClass,
          'base-button',
          `base-button__${props.variant}`,
          `base-button__${props.size}`,
          {
            'base-button__flat': props.flat,
            'base-button__regular': !props.flat,
            'base-button__inline': !props.block || props.flat,
            'base-button__block': props.block && !props.flat,
          },
        ],
      },
      [wrappedChildNodes]
    );
  },
};
</script>

<style scoped>
.base-button {
  @apply border-transparent
    cursor-pointer
    items-center
    justify-center
    rounded
    whitespace-no-wrap
    /* For legacy */
    border-solid;
}

.base-button:focus {
  outline: 0;
}

.base-button[disabled] {
  @apply cursor-not-allowed opacity-50;
}

.base-button--inner {
  @apply flex
  font-semibold
    items-center
    justify-center
    tracking-wide
    w-full;
}

.base-button--icon__pre {
  @apply mr-2;
}

.base-button--icon__post {
  @apply ml-2;
}

/* Display variations */
.base-button__inline {
  @apply inline-flex;
}

.base-button__block {
  @apply flex w-full;
}

/* Size variations */
.base-button__small {
  @apply h-6 text-12;
}
.base-button__small .base-button--inner {
  @apply px-2;
}

.base-button__medium {
  @apply h-8 text-14;
}

.base-button__medium .base-button--inner {
  @apply px-4;
}

.base-button__large {
  @apply h-10 text-16;
}

.base-button__large .base-button--inner {
  @apply px-6;
}

.base-button__giant {
  @apply text-18;
  height: 3.5rem;
}

.base-button__giant .base-button--inner {
  @apply px-8;
}

/* Theme variations */
/** Regular buttons  */
.base-button__regular {
  @apply border-2 shadow-2;
}

/*** Regular primary buttons */
.base-button__regular.base-button__primary {
  @apply bg-primary text-white;
}

.base-button__regular.base-button__primary:focus {
  @apply border-primary-tint-3;
}

.base-button__regular.base-button__primary:active:not([disabled]) {
  @apply bg-primary-tint-1;
}

/*** Regular secondary buttons */
.base-button__regular.base-button__secondary {
  @apply bg-secondary text-white;
}

.base-button__regular.base-button__secondary:focus {
  @apply border-secondary-tint-3;
}

.base-button__regular.base-button__secondary:active:not([disabled]) {
  @apply bg-secondary-tint-1;
}

/*** Regular tertiary buttons */
.base-button__regular.base-button__tertiary {
  @apply bg-error text-white;
}

.base-button__regular.base-button__tertiary:focus {
  border-color: #e35b76; /* This is a one-off color. */
}

.base-button__regular.base-button__tertiary:active:not([disabled]) {
  background: #e32c50; /* This is a one-off color. */
}

/*** Regular primary inverted */
.base-button__regular.base-button__inverted {
  @apply bg-white border border-primary text-primary;
  padding: 1px;
}

.base-button__regular.base-button__inverted:focus {
  @apply border-2 p-0;
}

.base-button__regular.base-button__inverted:hover:not([disabled]) {
  @apply text-primary-tint-1;
}

.base-button__regular.base-button__inverted:active:not([disabled]) {
  @apply bg-primary-tint-5 text-primary;
}

/** Flat buttons */
.base-button__flat {
  @apply bg-transparent border;
}

/*** Flat primary buttons */
.base-button__flat.base-button__primary {
  @apply text-primary;
}

.base-button__flat.base-button__primary:focus {
  @apply border-primary-tint-3;
}

.base-button__flat.base-button__primary:hover:not([disabled]) {
  @apply text-primary-tint-1;
}

.base-button__flat.base-button__primary:active:not([disabled]) {
  @apply text-primary-shade-1;
}

/*** Flat secondary buttons */
.base-button__flat.base-button__secondary {
  @apply text-gray-0;
}

.base-button__flat.base-button__secondary:focus {
  @apply border-gray-5;
}

.base-button__flat.base-button__secondary:hover:not([disabled]) {
  @apply text-gray-2;
}

.base-button__flat.base-button__secondary:active:not([disabled]) {
  @apply text-black;
}

/*** Flat tertiary buttons */
.base-button__flat.base-button__tertiary {
  @apply text-error;
}

.base-button__flat.base-button__tertiary:focus {
  border-color: #f2dce1; /* This is a one-off color. */
}

.base-button__flat.base-button__tertiary:hover:not([disabled]) {
  color: #e32c50;
}

.base-button__flat.base-button__tertiary:active:not([disabled]) {
  color: #961d35; /* This is a one-off color. */
}

/*** Flat inverted buttons */
.base-button__flat.base-button__inverted {
  @apply text-white;
}

.base-button__flat.base-button__inverted:focus {
  border-color: rgba(255, 255, 255, 0.2);
}

.base-button__flat.base-button__inverted:hover:not([disabled]) {
  @apply text-gray-5;
}
</style>
