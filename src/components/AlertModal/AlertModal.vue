<template>
  <ModalDialog
    class="alert-modal"
    :class="`alert-modal--${variant}`"
    :actions="actions"
    v-bind="dialogProps"
    @close="$emit('close')"
  >
    <template #header>
      <BaseIcon class="alert-modal__icon" :icon="headerIcon" />
      <slot name="header">
        {{ title }}
      </slot>
    </template>
    <slot>
      {{ message }}
    </slot>
  </ModalDialog>
</template>

<script>
import BaseIcon, { Icons } from '../BaseIcon/BaseIcon.vue';
import ModalDialog from '../ModalDialog/ModalDialog.vue';
import Modal from '../../constants/Modal';

/**
 * import { AlertModal } from '@bambee/pollen';
 *
 * An alert modal. This will display a `success`, `warning`, or `error` dialog
 * with proper color and iconography. The modal actions will emit either a
 * `cancel` or `confirm` event.
 */
export default {
  components: { BaseIcon, ModalDialog },
  inheritAttrs: false,
  props: {
    /** The label for the cancel button. */
    cancelLabel: {
      type: String,
      default: 'Cancel',
    },
    /** The label for the confirm button. */
    confirmLabel: {
      type: String,
      default: 'Continue',
    },
    /** Message to display. This can also be defined by the `default` slot. */
    message: {
      type: String,
      default: null,
    },
    /** The title to display. This can also be defined by the `header` slot. */
    title: {
      type: String,
      default: null,
    },
    /** One of `success`, `warning`, or `error`. */
    variant: {
      type: String,
      default: Modal.Alerts.SUCCESS,
      validator: (value) => Object.values(Modal.Alerts).includes(value),
    },
  },
  computed: {
    actions() {
      return {
        primary: {
          label: this.confirmLabel,
          handler: () => {
            this.$emit('confirm');
          },
        },
        secondary: {
          label: this.cancelLabel,
          handler: () => {
            this.$emit('cancel');
          },
        },
      };
    },
    dialogProps() {
      return {
        actionAlignment: Modal.ActionAlignments.CENTER,
        header: Modal.Headers.TRANSPARENT,
        size: Modal.Sizes.SMALL,
        ...this.$attrs,
      };
    },
    headerIcon() {
      switch (this.variant) {
        case Modal.Alerts.WARNING:
          return Icons.ALERT_TRIANGLE;
        case Modal.Alerts.ERROR:
          return Icons.ALERT_CIRCLE;
        case Modal.Alerts.SUCCESS:
        default:
          return Icons.CHECK_CIRCLE;
      }
    },
  },
};
</script>

<style scoped>
.alert-modal__icon {
  @apply block mb-4 mt-2 mx-auto text-33;
}

.alert-modal--success .alert-modal__icon {
  @apply text-success;
}

.alert-modal--success >>> .modal-actions__action--primary {
  @apply bg-success;
}

.alert-modal--warning .alert-modal__icon {
  @apply text-warning;
}

.alert-modal--warning >>> .modal-actions__action--primary {
  @apply bg-warning;
}

.alert-modal--error .alert-modal__icon {
  @apply text-error;
}

.alert-modal--error >>> .modal-actions__action--primary {
  @apply bg-error;
}
</style>
