<template>
  <div
    class="user-avatar"
    :class="{
      'user-avatar--vertical': vertical,
      'user-avatar--horizontal': !vertical,
    }"
  >
    <AvatarImage :image="image" :initials="initials" />
    <div v-if="name || title" class="user-avatar__details">
      <div v-if="name" class="user-avatar__name">{{ name }}</div>
      <div v-if="title" class="user-avatar__title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import AvatarImage from '../AvatarImage/AvatarImage.vue';
import getNameInitials from '../../util/getNameInitials';

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

.user-avatar--vertical {
  @apply flex-col items-center text-center;
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

.user-avatar--vertical .user-avatar__details {
  @apply mt-3;
}

.user-avatar__name {
  @apply font-body-small font-bold text-black;
}

.user-avatar__title {
  @apply font-overline-small text-gray-3;
}

.user-avatar__name + .user-avatar__title {
  @apply mt-1;
}
</style>
