<template>
  <div
    class="toast-notification"
    :class="[
      `toast-notification--${variant}`,
      { 'toast-notification--with-avatar': !!avatar },
    ]"
    :role="showActions ? 'alertdialog' : 'alert'"
  >
    <div class="toast-notification__content">
      <div v-if="avatar" class="toast-notification__avatar-container">
        <AvatarImage v-bind="avatar" class="toast-notification__avatar" />
      </div>
      <div class="toast-notification__message">
        <slot>{{ message }}</slot>
      </div>
      <div v-if="showActions" class="toast-notification__actions">
        <slot name="actions">
          <IconButton
            v-bind="actionProps"
            title="Close"
            class="toast-notification__close"
            @click="$emit('close')"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarImage from '../AvatarImage/AvatarImage.vue';
import Button from '../../constants/Button';
import IconButton from '../IconButton/IconButton.vue';
import Notification from '../../constants/Notification';
import { Icons } from '../BaseIcon/BaseIcon.vue';

/**
 * A notification component. Designed to displayed within a `ToastNotifications`
 * container that would display this in a fixed, overlayed position. Also
 * referred to as a "Snackbar" or "Meerkat".
 */
export default {
  components: { AvatarImage, IconButton },
  props: {
    /** The url of an avatar image to display. */
    image: {
      type: String,
      default: null,
    },
    /**
     * A fallback pair of initials to display if no image is supplied, but a
     * prepended avatar component is still desired.
     */
    initials: {
      type: String,
      default: null,
    },
    /**
     * The alert message. This can be passed in as a prop, or as the
     * default slot.
     */
    message: {
      type: String,
      default: null,
    },
    /**
     * If true, displays by default an `x` button that emits a `close` event.
     * This button can be overridden by using the `#actions` named slot.
     */
    showActions: {
      type: Boolean,
      default: true,
    },
    /** One of `default`, `secondary`, or `error`. */
    variant: {
      type: String,
      default: Notification.Variants.DEFAULT,
      validator: (value) =>
        Object.values(Notification.Variants).includes(value),
    },
  },
  computed: {
    actionProps() {
      return {
        size: Button.Sizes.MEDIUM,
        icon: Icons.CLOSE,
        variant: Button.Variants.INVERTED,
        title: 'Close',
        flat: true,
      };
    },
    avatar() {
      const { image, initials } = this;
      if (image || initials) {
        return { image, initials };
      }
      return null;
    },
  },
};
</script>

<style scoped>
.toast-notification__content {
  @apply box-border flex font-body-small items-center relative rounded-md shadow-6 text-white py-3 px-4;
  min-height: 3rem;
}

.toast-notification__avatar-container {
  @apply absolute left-0 -ml-6 p-1 rounded-full top-0;
}

.toast-notification--default .toast-notification__content,
.toast-notification--default .toast-notification__avatar-container {
  @apply bg-gray-0;
}

.toast-notification--seconary .toast-notification__content,
.toast-notification--seconary .toast-notification__avatar-container {
  @apply bg-secondary;
}

.toast-notification--error .toast-notification__content,
.toast-notification--error .toast-notification__avatar-container {
  @apply bg-error;
}

.toast-notification__message {
  @apply flex-grow;
}

.toast-notification__actions {
  @apply flex-shrink-0 flex items-center ml-3 -mr-1 -my-1 self-stretch;
}

.toast-notification .icon-button {
  @apply opacity-50;
}

.toast-notification--with-avatar {
  @apply pl-6;
}

.toast-notification--with-avatar .toast-notification__content {
  @apply pl-8;
}
</style>
