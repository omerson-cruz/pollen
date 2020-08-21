<template functional>
  <div
    :class="[
      {
        'avatar-image--rounded': !props.square,
        'avatar-image--bordered': props.border,
      },
      data.class,
      data.staticClass,
    ]"
    class="avatar-image"
    :style="$options.getStyles(props)"
    v-bind="$options.getAttributes({ data, parent })"
    v-on="listeners"
  >
    <div
      v-if="(props.initials || props.name) && !props.image"
      class="avatar-image__initials"
    >
      {{ props.name ? $options.getNameInitials(props.name) : props.initials }}
    </div>
  </div>
</template>

<script>
import DEFAULT_USER_IMAGE from '../../assets/defaultUserImage';
import getAttributes from '../../util/getAttributes';
import getNameInitials from '../../util/getNameInitials';
import resizeFilestackImage from '../../util/resizeFilestackImage';

const pxToRem = (val) => `${parseInt(val, 10) / 16}rem`;

const getStyles = (props) => {
  const { size, image, initials } = props;
  let backgroundImage = null;
  if (image) {
    backgroundImage = `url(${resizeFilestackImage(image, {
      width: size,
      height: size,
    })})`;
  } else if (!initials) {
    backgroundImage = `url(${DEFAULT_USER_IMAGE})`;
  }
  return {
    backgroundImage,
    fontSize: pxToRem(props.size * 0.44),
    height: pxToRem(props.size),
    width: pxToRem(props.size),
  };
};

/**
 * Display a user's image. If that `image` is coming from Filestack, appropriate
 * resize parameters will be applied to match the `size` prop. If no `image` url
 * is supplied, the user's `initials` will display. If both initials and image
 * are missing, a default user image will be displayed.
 */
export default {
  getAttributes,
  getNameInitials,
  getStyles,
  props: {
    /** If true, adds a border around the image. */
    border: {
      type: Boolean,
      default: false,
    },
    /** The url of the image to display. */
    image: {
      type: String,
      default: null,
    },
    /** A fallback pair of initials to display if no image is supplied. */
    initials: {
      type: String,
      default: null,
    },
    /** A full name that will be displayed as initials. */
    name: {
      type: String,
      default: null,
    },
    /** The height/width of the avatar in pixels. */
    size: {
      type: Number,
      default: 40,
    },
    /** If true, displays the image as a square. */
    square: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.avatar-image {
  @apply bg-cover 
    bg-center 
    bg-gray-5 
    bg-no-repeat 
    box-border
    flex 
    items-center 
    justify-center;
}

.avatar-image--bordered {
  @apply border border-gray-5 border-solid;
}

.avatar-image--rounded {
  @apply rounded-full;
}

.avatar-image__initials {
  @apply font-semibold text-white tracking-wide;
}
</style>
