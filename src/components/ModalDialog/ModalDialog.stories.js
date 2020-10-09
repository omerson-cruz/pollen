// import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import BaseButton from '../BaseButton/BaseButton.vue';
import ModalDialog from './ModalDialog.vue';
import Modal from '../../constants/Modal';

export default {
  title: 'ModalDialog',
  component: ModalDialog,
  parameters: {
    componentSubtitle: '',
  },
};

export const Default = () => ({
  components: { BaseButton, ModalDialog },
  props: {
    actionAlignment: {
      default: select(
        'Action Alignment',
        Object.values(Modal.ActionAlignments),
        Modal.ActionAlignments.CENTER
      ),
    },
    fullBleed: {
      default: boolean('Full Bleed', false),
    },
    header: {
      default: select(
        'Header',
        Object.values(Modal.Headers),
        Modal.Headers.TRANSPARENT
      ),
    },
    overlay: {
      default: select(
        'Overlay',
        Object.values(Modal.Overlays),
        Modal.Overlays.PRIMARY
      ),
    },
    overlayClose: {
      default: boolean('Close on overlay click', true),
    },
    size: {
      default: select('Size', Object.values(Modal.Sizes), Modal.Sizes.REGULAR),
    },
    subfooter: {
      default: text('Subfooter', 'Subfooter message goes here'),
    },
    showDelete: {
      default: boolean('Show delete', false),
    },
  },
  data() {
    return { isModalOpen: true };
  },
  computed: {
    actions() {
      return {
        primary: {
          label: 'Accept',
        },
        secondary: {
          label: 'Skip',
        },
        tertiary: this.showDelete
          ? {
              label: 'Delete',
              preIcon: 'trash',
            }
          : null,
      };
    },
  },
  template: `
  <div>
    <BaseButton @click="isModalOpen = !isModalOpen">Toggle Modal</BaseButton>
    <ModalDialog
      v-if="isModalOpen"
      :action-alignment="actionAlignment"
      :actions="actions"
      :full-bleed="fullBleed"
      :header="header"
      :overlay="overlay"
      :overlay-close="overlayClose"
      :size="size"
      @close="isModalOpen = false">
      <template #header>
        Heading Goes Here
      </template>
      Content
      <template v-if="subfooter" #subfooter>
        {{ subfooter }}
      </template>
    </ModalDialog>
  </div>
  `,
});
