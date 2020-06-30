<script>
import BaseIcon, { Icons } from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';
import getAttributes from '../../util/getAttributes';

const { Sizes, Variants } = Button;

/** A button component similar to `BaseButton` but just displaying an icon. */
export default {
  functional: true,
  components: { BaseIcon },
  props: {
    /**
     * If true, component will display with a transparent background color,
     * but will still retain size-appropriate padding and focus border.
     */
    flat: {
      type: Boolean,
      default: false,
    },
    /** The name of an icon (see BaseIcon). */
    icon: {
      type: String,
      required: true,
      validator: (value) => Object.values(Icons).includes(value),
    },
    /** One of `small`, `medium`, `large`, or `giant`. */
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    /**
     * The html tag to use for this component. `button`, `nuxt-link`, and `a`
     * are the most common uses.
     */
    tag: {
      type: String,
      default: 'button',
    },
    /**
     * The title attribute to describe what clicking this button will do. This
     * field is optional, but for the purposes of accessiblity it is strongly
     * recommended that you enter a value.
     */
    title: {
      type: String,
      default: '',
    },
    /**
     * The color theme. Can be one of `primary`, `secondary`, `tertiary`, and
     * `inverted`.
     */
    variant: {
      type: String,
      default: Variants.PRIMARY,
      validator: (value) => Object.values(Variants).includes(value),
    },
  },
  render(h, { data, props, parent }) {
    const icon = <BaseIcon icon={props.icon} class="icon-button--icon" />;
    const screenReaderText = (
      <span class="icon-button--title">{props.title}</span>
    );
    const attrs = { ...getAttributes({ data, parent }) };
    if (props.title) {
      attrs.title = props.title;
    }
    return h(
      props.tag,
      {
        ...data,
        attrs,
        class: [
          data.class,
          data.staticClass,
          'icon-button',
          `icon-button__${props.variant}`,
          `icon-button__${props.size}`,
          {
            'icon-button__flat': props.flat,
            'icon-button__regular': !props.flat,
          },
        ],
      },
      [icon, screenReaderText]
    );
  },
};
</script>

<style scoped>
.icon-button {
  @apply border-transparent
    cursor-pointer
    items-center
    justify-center
    p-0
    rounded
    whitespace-no-wrap
    /* For legacy */
    border-solid;
}

.icon-button:focus {
  outline: 0;
}

.icon-button[disabled] {
  @apply cursor-not-allowed opacity-50;
}

.icon-button--title {
  @apply sr-only;
}

/* Size variations */
.icon-button__small {
  @apply h-6 text-12 w-6;
}

.icon-button__medium {
  @apply h-8 text-16 w-8;
}

.icon-button__large {
  @apply h-10 w-10;
  font-size: 1.25rem;
}

.icon-button__giant {
  @apply h-14 w-14;
  font-size: 1.5rem;
}

/* Theme variations */
/** Regular buttons  */
.icon-button__regular {
  @apply border-2 shadow-2;
}

/*** Regular primary buttons */
.icon-button__regular.icon-button__primary {
  @apply bg-primary text-white;
}

.icon-button__regular.icon-button__primary:focus {
  @apply border-primary-tint-3;
}

.icon-button__regular.icon-button__primary:active:not([disabled]) {
  @apply bg-primary-tint-1;
}

/*** Regular secondary buttons */
.icon-button__regular.icon-button__secondary {
  @apply bg-secondary text-white;
}

.icon-button__regular.icon-button__secondary:focus {
  @apply border-secondary-tint-3;
}

.icon-button__regular.icon-button__secondary:active:not([disabled]) {
  @apply bg-secondary-tint-1;
}

/*** Regular tertiary buttons */
.icon-button__regular.icon-button__tertiary {
  @apply bg-error text-white;
}

.icon-button__regular.icon-button__tertiary:focus {
  border-color: #e35b76; /* This is a one-off color. */
}

.icon-button__regular.icon-button__tertiary:active:not([disabled]) {
  background: #e32c50; /* This is a one-off color. */
}

/*** Regular primary inverted */
.icon-button__regular.icon-button__inverted {
  @apply bg-white border border-primary text-primary;
  padding: 1px;
}

.icon-button__regular.icon-button__inverted:focus {
  @apply border-2 p-0;
}

.icon-button__regular.icon-button__inverted:hover:not([disabled]) {
  @apply text-primary-tint-1;
}

.icon-button__regular.icon-button__inverted:active:not([disabled]) {
  @apply bg-primary-tint-5 text-primary;
}

/** Flat buttons */
.icon-button__flat {
  @apply bg-transparent border;
}

/*** Flat primary buttons */
.icon-button__flat.icon-button__primary {
  @apply text-primary;
}

.icon-button__flat.icon-button__primary:focus {
  @apply border-primary-tint-3;
}

.icon-button__flat.icon-button__primary:hover:not([disabled]) {
  @apply text-primary-tint-1;
}

.icon-button__flat.icon-button__primary:active:not([disabled]) {
  @apply text-primary-shade-1;
}

/*** Flat secondary buttons */
.icon-button__flat.icon-button__secondary {
  @apply text-gray-0;
}

.icon-button__flat.icon-button__secondary:focus {
  @apply border-gray-5;
}

.icon-button__flat.icon-button__secondary:hover:not([disabled]) {
  @apply text-gray-2;
}

.icon-button__flat.icon-button__secondary:active:not([disabled]) {
  @apply text-black;
}

/*** Flat tertiary buttons */
.icon-button__flat.icon-button__tertiary {
  @apply text-error;
}

.icon-button__flat.icon-button__tertiary:focus {
  border-color: #f2dce1; /* This is a one-off color. */
}

.icon-button__flat.icon-button__tertiary:hover:not([disabled]) {
  color: #e32c50;
}

.icon-button__flat.icon-button__tertiary:active:not([disabled]) {
  color: #961d35; /* This is a one-off color. */
}

/*** Flat inverted buttons */
.icon-button__flat.icon-button__inverted {
  @apply text-white;
}

.icon-button__flat.icon-button__inverted:focus {
  border-color: rgba(255, 255, 255, 0.2);
}

.icon-button__flat.icon-button__inverted:hover:not([disabled]) {
  @apply text-gray-5;
}
</style>
