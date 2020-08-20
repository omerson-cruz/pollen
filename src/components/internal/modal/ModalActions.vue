<template>
  <div class="modal-actions" :class="`modal-actions--${computedAlignment}`">
    <BaseButton
      v-if="primaryAction"
      class="modal-actions__action modal-actions__action--primary"
      v-bind="getProps(primaryAction)"
      @click="
        () => (primaryAction.handler ? primaryAction.handler() : () => {})
      "
    />
    <BaseButton
      v-if="secondaryAction"
      class="modal-actions__action modal-actions__action--secondary"
      flat
      :variant="$options.Button.Variants.SECONDARY"
      v-bind="getProps(secondaryAction)"
      @click="
        () => (secondaryAction.handler ? secondaryAction.handler() : () => {})
      "
    />
    <BaseButton
      v-if="tertiaryAction"
      class="modal-actions__action modal-actions__action--tertiary"
      flat
      :variant="$options.Button.Variants.TERTIARY"
      v-bind="getProps(tertiaryAction)"
      @click="
        () => (tertiaryAction.handler ? tertiaryAction.handler() : () => {})
      "
    />
  </div>
</template>

<script>
import BaseButton from '../../BaseButton/BaseButton.vue';
import Button from '../../../constants/Button';
import Modal from '../../../constants/Modal';

export default {
  Button,
  components: { BaseButton },
  props: {
    alignment: {
      type: String,
      default: Modal.ActionAlignments.CENTER,
      validator: (value) =>
        Object.values(Modal.ActionAlignments).includes(value),
    },
    primaryAction: {
      type: Object,
      default: null,
    },
    secondaryAction: {
      type: Object,
      default: null,
    },
    tertiaryAction: {
      type: Object,
      default: null,
    },
  },
  computed: {
    computedAlignment() {
      // If there is a tertiary action, the buttons are always justified.
      return this.tertiaryAction
        ? Modal.ActionAlignments.JUSTIFY
        : this.alignment;
    },
  },
  methods: {
    getProps(action) {
      const { handler, ...rest } = action;
      return { type: 'button', ...rest };
    },
  },
};
</script>

<style scoped>
.modal-actions {
  @apply flex flex-row-reverse items-center mt-2 -mx-2;
}

.modal-actions--center {
  @apply flex-wrap justify-center;
}

.modal-actions--right {
  @apply flex-row-reverse justify-start;
}

.modal-actions__action {
  @apply mt-4 mx-2;
}

.modal-actions--justify .modal-actions__action:last-of-type {
  @apply mr-auto;
}
</style>
