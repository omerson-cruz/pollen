import { boolean, select, text } from '@storybook/addon-knobs';
import Notification from '../../constants/Notification';
import MeerkatNotification from './MeerkatNotification.vue';
import BaseButton from '../BaseButton/BaseButton.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Variants } = Notification;

export default {
  title: 'MeerkatNotification',
  component: MeerkatNotification,
};

export const Gallery = () => ({
  components: { MeerkatNotification, TypeOverline },
  data() {
    return {
      variants: Object.values(Variants),
    };
  },
  template: `
  <div style="width: 400px">
    <div v-for="variant in variants" :key="variant" class="mb-4">
      <TypeOverline tag="h2" class="mb-2">{{ variant }}</TypeOverline>
      <MeerkatNotification
        message="Lorem ipsum dolor sit omet"
        class="mb-2"
        :variant="variant"
      />
      <MeerkatNotification
        message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        class="mb-2"
        :variant="variant"
      />
      <MeerkatNotification
        message="Lorem ipsum dolor sit omet"
        class="mb-2"
        image="https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc"
        :variant="variant"
      />
      <MeerkatNotification
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
  components: { MeerkatNotification },
  template: `
  <MeerkatNotification
    image="https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc"
  >
    Ut <a href="#" class="text-white">enim ad minim</a> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </MeerkatNotification>
  `,
});

export const NoActions = () => ({
  components: { MeerkatNotification },
  template: `
  <MeerkatNotification
    message="Lorem ipsum dolor sit omet"
    :showActions="false"
  />
  `,
});

export const WithActionAsSlot = () => ({
  components: { MeerkatNotification, BaseButton },
  template: `
  <MeerkatNotification
    image="https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc"
    message="Lorem ipsum dolor sit omet"
  >
    <template #actions>
      <BaseButton flat variant="inverted" size="small" @click="$emit('confirm')">Confirm</BaseButton>
      <BaseButton flat variant="inverted" size="small" @click="$emit('cancel')">Undo</BaseButton>
    </template>
  </MeerkatNotification>
  `,
});

export const WithKnobs = () => ({
  components: { MeerkatNotification },
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
  <MeerkatNotification
    :image="image"
    :initials="initials"
    :message="message"
    :showActions="showActions"
    :variant="variant"
  />
  `,
});
