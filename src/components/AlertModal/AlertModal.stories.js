import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import BaseButton from '../BaseButton/BaseButton.vue';
import AlertModal from './AlertModal.vue';
import Modal from '../../constants/Modal';

export default {
  title: 'AlertModal',
  component: AlertModal,
  parameters: {
    componentSubtitle: '',
  },
};

export const Default = () => ({
  components: { BaseButton, AlertModal },
  props: {
    cancelLabel: {
      default: text('Cancel label', 'Cancel'),
    },
    confirmLabel: {
      default: text('Confirm label', 'Continue'),
    },
    message: {
      default: text(
        'Message',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ),
    },
    title: {
      default: text('Title', 'What a success!'),
    },
    variant: {
      default: select(
        'Variant',
        Object.values(Modal.Alerts),
        Modal.Alerts.SUCCESS
      ),
    },
  },
  data() {
    return { isModalOpen: true };
  },
  methods: {
    handleCancel: action('cancel'),
    handleConfirm: action('confirm'),
  },
  template: `
  <div>
    <BaseButton @click="isModalOpen = !isModalOpen">Toggle Modal</BaseButton>
    <AlertModal
      v-if="isModalOpen"
      :cancel-label="cancelLabel"
      :confirm-label="confirmLabel"
      :variant="variant"
      :title="title"
      :message="message"
      @close="isModalOpen = false"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    />
  </div>
  `,
});

export const WithContentAsSlots = () => ({
  components: { BaseButton, AlertModal },
  props: {
    cancelLabel: {
      default: text('Cancel label', 'Cancel'),
    },
    confirmLabel: {
      default: text('Confirm label', 'Continue'),
    },
    message: {
      default: text(
        'Message',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ),
    },
    title: {
      default: text('Title', 'What a success!'),
    },
    variant: {
      default: select(
        'Variant',
        Object.values(Modal.Alerts),
        Modal.Alerts.SUCCESS
      ),
    },
  },
  data() {
    return { isModalOpen: true };
  },
  methods: {
    handleCancel: action('cancel'),
    handleConfirm: action('confirm'),
  },
  template: `
  <div>
    <BaseButton @click="isModalOpen = !isModalOpen">Toggle Modal</BaseButton>
    <AlertModal
      v-if="isModalOpen"
      :cancel-label="cancelLabel"
      :confirm-label="confirmLabel"
      :variant="variant"
      @cancel="handleCancel"
      @confirm="handleConfirm"
      @close="isModalOpen = false">
      <template #header>
        {{ title }}
      </template>
      <b class="font-bold">Test</b>: {{ message }}
    </AlertModal>
  </div>
  `,
});
