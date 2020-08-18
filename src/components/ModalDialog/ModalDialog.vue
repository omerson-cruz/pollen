<template>
  <FocusLock class="modal-dialog" :disabled="true">
    <ModalWindow :size="size">
      <ModalHeader v-if="!!$slots.header" :variant="header">
        <slot name="header" />
      </ModalHeader>
      <div class="modal-dialog__body">
        <slot />
      </div>
      <ModalActions
        v-if="actions"
        :alignment="actionAlignment"
        :primary-action="actions.primary"
        :secondary-action="actions.secondary"
        :tertiary-action="actions.tertiary"
      />
      <ModalSubfooter v-if="!!$slots.subfooter" class="modal-dialog__subfooter">
        <slot name="subfooter" />
      </ModalSubfooter>
    </ModalWindow>
    <ModalClose :variant="overlay" @click="close" />
    <ModalOverlay :variant="overlay" />
  </FocusLock>
</template>

<script>
import FocusLock from 'vue-focus-lock';
import Modal from '../../constants/Modal';
import ModalActions from '../internal/modal/ModalActions.vue';
import ModalClose from '../internal/modal/ModalClose.vue';
import ModalHeader from '../internal/modal/ModalHeader.vue';
import ModalOverlay from '../internal/modal/ModalOverlay.vue';
import ModalSubfooter from '../internal/modal/ModalSubfooter.vue';
import ModalWindow from '../internal/modal/ModalWindow.vue';

export default {
  components: {
    FocusLock,
    ModalActions,
    ModalClose,
    ModalHeader,
    ModalOverlay,
    ModalSubfooter,
    ModalWindow,
  },
  props: {
    actionAlignment: {
      type: String,
      default: Modal.ActionAlignments.CENTER,
      validator: (value) =>
        Object.values(Modal.ActionAlignments).includes(value),
    },
    actions: {
      type: Object,
      default: null,
    },
    header: {
      type: String,
      default: Modal.Headers.TRANSPARENT,
      validator: (value) => Object.values(Modal.Headers).includes(value),
    },
    overlay: {
      type: String,
      default: Modal.Overlays.PRIMARY,
      validator: (value) => Object.values(Modal.Overlays).includes(value),
    },
    size: {
      type: String,
      default: Modal.Sizes.REGULAR,
      validator: (value) => Object.values(Modal.Sizes).includes(value),
    },
  },
  mounted() {
    document.addEventListener('keyup', this.handleKeyup);
    document.body.classList.add('overflow-hidden');
  },

  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup);
    document.body.classList.remove('overflow-hidden');
  },
  methods: {
    /**
     * Close the modal if the user presses the escape key.
     * @param {Event} e
     */
    handleKeyup(e) {
      if (e.keyCode !== 27) {
        return;
      }
      this.close();
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-dialog__body {
  @apply text-center;
}

.modal-dialog >>> .modal-overlay {
  @apply fixed inset-0 z-40;
}

.modal-dialog >>> .modal-close {
  @apply fixed m-6 right-0 top-0 z-50;
}

.modal-dialog >>> .modal-window {
  @apply fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50;
}

@media screen and (min-height: 48rem) {
  .modal-dialog >>> .modal-window {
    @apply translate-y-0;
    max-height: calc(100vh - 13rem);
    top: 6.5rem;
  }
}
</style>
