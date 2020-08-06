<template>
  <div
    class="user-avatar"
    :class="[
      `user-avatar--${size}`,
      {
        'user-avatar--vertical': vertical,
        'user-avatar--horizontal': !vertical,
      },
    ]"
  >
    <AvatarImage :image="image" :initials="initials" :size="avatarSize" />
    <div v-if="name || title" class="user-avatar__details">
      <div v-if="name" class="user-avatar__name">{{ name }}</div>
      <div v-if="title" class="user-avatar__title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import AvatarImage from '../AvatarImage/AvatarImage.vue';
import getNameInitials from '../../util/getNameInitials';

export const Sizes = Object.freeze({
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
});

/**
 * A component for displaying a user profile photo next to their name and job
 * title.
 */
export default {
  components: { AvatarImage },
  props: {
    /** A url to the user's photo. */
    image: {
      type: String,
      default: null,
    },
    /** The user's name. */
    name: {
      type: String,
      default: null,
    },
    /** The size of the component. One of `small`, `medium`, and `large`. */
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    /** The user's job title. */
    title: {
      type: String,
      default: null,
    },
    /** If true, displays the user name and title below their image, centered. */
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    avatarSize() {
      switch (this.size) {
        case Sizes.TINY:
          return this.vertical ? 48 : 16;
        case Sizes.SMALL:
          return this.vertical ? 48 : 24;
        case Sizes.LARGE:
          return this.vertical ? 104 : 40;
        case Sizes.MEDIUM:
        default:
          return this.vertical ? 64 : 32;
      }
    },
    initials() {
      return getNameInitials(this.name);
    },
  },
};
</script>

<style scoped>
.user-avatar {
  @apply inline-flex;
}

.avatar-image {
  @apply flex-shrink-0;
}

.user-avatar__details {
  @apply flex flex-col flex-grow justify-center;
}

.user-avatar--horizontal .user-avatar__details {
  @apply ml-3;
}

.user-avatar__name {
  @apply font-body-small font-bold text-black;
}

.user-avatar--small .user-avatar__name {
  @apply font-body-caption;
}

.user-avatar__title {
  @apply font-body-caption text-gray-3;
}

.user-avatar__name + .user-avatar__title {
  margin-top: 0.125em;
}

.user-avatar--vertical {
  @apply flex-col items-center text-center;
}
.user-avatar--vertical .user-avatar__details {
  @apply mt-4;
}

.user-avatar--vertical .user-avatar__name + .user-avatar__title {
  @apply mt-1;
}

.user-avatar--vertical.user-avatar--tiny .user-avatar__name,
.user-avatar--vertical.user-avatar--small .user-avatar__name {
  @apply font-body-text;
}

.user-avatar--vertical.user-avatar--medium .user-avatar__name,
.user-avatar--vertical.user-avatar--large .user-avatar__title {
  @apply font-body-medium;
}

.user-avatar--vertical.user-avatar--medium .user-avatar__title {
  @apply font-body-small;
}

.user-avatar--vertical.user-avatar--large .user-avatar__name {
  @apply font-heading-title;
}

.user-avatar--tiny.user-avatar--horizontal .user-avatar__name,
.user-avatar--tiny.user-avatar--horizontal .user-avatar__title {
  @apply font-body-legal;
}
</style>
