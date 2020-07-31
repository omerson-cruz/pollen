<template>
  <transition-group
    v-if="notifications.length"
    tag="div"
    class="toast-notifications"
    :class="`toast-notifications--${position}`"
    name="toast"
    @before-leave="beforeLeave"
  >
    <ToastNotification
      v-for="{ message, actions = [], id, ...rest } in notifications"
      :key="id"
      v-bind="rest"
      @close="$emit('close', id)"
    >
      {{ message }}
      <template v-if="actions.length" #actions>
        <BaseButton
          v-for="{ label, handler } in actions"
          :key="label"
          :size="$options.Button.Sizes.SMALL"
          :variant="$options.Button.Variants.INVERTED"
          flat
          @click="handler"
        >
          {{ label }}
        </BaseButton>
      </template>
    </ToastNotification>
  </transition-group>
</template>

<script>
import BaseButton from '../BaseButton/BaseButton.vue';
import Button from '../../constants/Button';
import Notification from '../../constants/Notification';
import ToastNotification from '../ToastNotification/ToastNotification.vue';

/**
 * A container for displaying `ToastNotification` components. This can be
 * displayed on the top or bottom, in the center or right corner using the
 * `position` prop. It accepts a `notifications` array of objects. These objects
 * should have at the very least a `message` string and a unique `id` string or
 * number. Optionally, the notification object can have an array of `actions`
 * that have a string `label` and a `handler` function that is executed on
 * click. Any other attributes on the notification object will be transparently
 * passed through to the `ToastNotification` child.
 */
export default {
  Button,
  components: { BaseButton, ToastNotification },
  props: {
    /**
     * An array of notification objects. Should include at least a `message` and
     * `id`. An optional `actions` array of objects with `label` and `handler`
     * can also be passed in to override the default `x` close button of an
     * individual notification.
     */
    notifications: {
      type: Array,
      default: () => [],
    },
    /** One of `bottom-center`, `bottom-right`, `top-center`, or `top-right`. */
    position: {
      type: String,
      default: Notification.Positions.BOTTOM_CENTER,
      validator: (value) =>
        Object.values(Notification.Positions).includes(value),
    },
  },
  methods: {
    beforeLeave(el) {
      el.setAttribute('style', `top: ${el.offsetTop || 0}px`);
    },
  },
};
</script>

<style scoped>
.toast-notifications {
  @apply box-border fixed flex -my-2 p-4;
  max-width: 100vw;
  width: 25rem;
}

.toast-notifications .toast-notification {
  @apply duration-lazy my-2 transition-all;
}

.toast-notifications--top-center,
.toast-notifications--top-right {
  @apply flex-col-reverse top-0;
}

.toast-notifications--bottom-center,
.toast-notifications--bottom-right {
  @apply bottom-0 flex-col;
}

.toast-notifications--top-center,
.toast-notifications--bottom-center {
  @apply left-1/2 transform -translate-x-1/2;
}

.toast-notifications--top-right,
.toast-notifications--bottom-right {
  @apply right-0;
}

.toast-enter,
.toast-leave-to {
  opacity: 0;
}

.toast-notifications--bottom-center .toast-enter,
.toast-notifications--bottom-right .toast-enter,
.toast-notifications--bottom-center .toast-leave-to,
.toast-notifications--bottom-right .toast-leave-to {
  transform: translateY(100%);
}

.toast-notifications--top-center .toast-enter,
.toast-notifications--top-right .toast-enter,
.toast-notifications--top-center .toast-leave-to,
.toast-notifications--top-right .toast-leave-to {
  transform: translateY(-100%);
}

.toast-enter-active,
.toast-leave-active {
  z-index: -1;
}

.toast-enter-active {
  @apply ease-out;
}

.toast-leave-active {
  @apply absolute ease-in;
  width: calc(100% - 2rem);
}
</style>
