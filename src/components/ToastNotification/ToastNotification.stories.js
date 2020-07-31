import { boolean, select, text } from '@storybook/addon-knobs';
import Notification from '../../constants/Notification';
import ToastNotification from './ToastNotification.vue';
import BaseButton from '../BaseButton/BaseButton.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Variants } = Notification;

export default {
  title: 'ToastNotification',
  component: ToastNotification,
};

export const Gallery = () => ({
  components: { ToastNotification, TypeOverline },
  data() {
    return {
      variants: Object.values(Variants),
    };
  },
  template: `
  <div style="width: 400px">
    <div v-for="variant in variants" :key="variant" class="mb-4">
      <TypeOverline tag="h2" class="mb-2">{{ variant }}</TypeOverline>
      <ToastNotification
        message="Lorem ipsum dolor sit omet"
        class="mb-2"
        :variant="variant"
      />
      <ToastNotification
        message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        class="mb-2"
        :variant="variant"
      />
      <ToastNotification
        message="Lorem ipsum dolor sit omet"
        class="mb-2"
        image="https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc"
        :variant="variant"
      />
      <ToastNotification
      message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        class="mb-2"
        initials="XO"
        :variant="variant"
      />
    </div>
  </div>
  `,
});

export const WithMessageAsASlot = () => ({
  components: { ToastNotification },
  template: `
  <ToastNotification
    image="https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc"
  >
    Ut <a href="#" class="text-white">enim ad minim</a> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </ToastNotification>
  `,
});

export const NoActions = () => ({
  components: { ToastNotification },
  template: `
  <ToastNotification
    message="Lorem ipsum dolor sit omet"
    :showActions="false"
  />
  `,
});

export const WithActionAsSlot = () => ({
  components: { ToastNotification, BaseButton },
  template: `
  <ToastNotification
    image="https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc"
    message="Lorem ipsum dolor sit omet"
  >
    <template #actions>
      <BaseButton flat variant="inverted" size="small" @click="$emit('confirm')">Confirm</BaseButton>
      <BaseButton flat variant="inverted" size="small" @click="$emit('cancel')">Undo</BaseButton>
    </template>
  </ToastNotification>
  `,
});

export const WithKnobs = () => ({
  components: { ToastNotification },
  props: {
    image: {
      default: text(
        'Image',
        'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc'
      ),
    },
    initials: {
      default: text('Initials', 'XO'),
    },
    message: {
      default: text('Message', 'Lorem ipsum dolor sit omet'),
    },
    showActions: {
      default: boolean('Show Actions', true),
    },
    variant: {
      default: select('Variant', Object.values(Variants), Variants.DEFAULT),
    },
  },
  template: `
  <ToastNotification
    :image="image"
    :initials="initials"
    :message="message"
    :showActions="showActions"
    :variant="variant"
  />
  `,
});
