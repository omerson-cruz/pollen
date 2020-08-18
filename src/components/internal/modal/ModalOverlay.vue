<template functional>
  <div
    class="modal-overlay"
    :class="`modal-overlay--${props.variant}`"
    v-on="listeners"
  />
</template>

<script>
import Modal from '../../../constants/Modal';

export default {
  props: {
    /** One of `primary`, `dark`, or `light`. */
    variant: {
      type: String,
      default: Modal.Overlays.PRIMARY,
      validator: (value) => Object.values(Modal.Overlays).includes(value),
    },
  },
};
</script>

<style scoped>
.modal-overlay--primary {
  @apply bg-primary opacity-90;
  backdrop-filter: blur(0.5rem);
}

.modal-overlay--dark {
  @apply bg-black opacity-80;
  backdrop-filter: blur(0.5rem);
}
.modal-overlay--light {
  @apply bg-white opacity-90;
  backdrop-filter: blur(0.75rem);
}
</style>
