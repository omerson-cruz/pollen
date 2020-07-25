import { boolean, select, text } from '@storybook/addon-knobs';
import Alert from '../../constants/Alert';
import AlertBar from './AlertBar.vue';
import BaseButton from '../BaseButton/BaseButton.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';

const { Sizes, Variants } = Alert;

export default {
  title: 'AlertBar',
  component: AlertBar,
};

export const Gallery = () => ({
  components: { AlertBar, TypeOverline },
  data() {
    return {
      sizes: Object.values(Sizes),
      variants: Object.values(Variants),
    };
  },
  template: `
  <div class="flex -mx-8">
    <div v-for="size in sizes" :key="size" class="px-8 w-1/4">
      <TypeOverline tag="h1" variant="large" class="mb-4">{{ size }}</TypeOverline>
      <div v-for="variant in variants" :key="variant" class="mb-4">
        <TypeOverline tag="h2" class="mb-2">{{ variant }}</TypeOverline>
        <AlertBar
          icon="alertTriangle"
          message="Lorem ipsum dolor sit omet"
          :variant="variant"
          :size="size"
        />
      </div>
    </div>
  </div>
  `,
});

export const WithDescription = () => ({
  components: { AlertBar },
  template: `
  <AlertBar
    icon="alertTriangle"
    message="Lorem ipsum dolor sit omet"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    size="large"
  />
  `,
});

export const WithMessageAndDescriptionAsASlots = () => ({
  components: { AlertBar },
  template: `
  <AlertBar
    icon="alertTriangle"
    size="large"
  >
    Lorem <strike>ipsum</strike> dolor sit omet
    <template #description>
      <div class="alert-bar__description">
        Ut <a href="#" class="text-white">enim ad minim</a> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </template>
  </AlertBar>
  `,
});

export const NoIcon = () => ({
  components: { AlertBar, BaseButton },
  template: `
  <AlertBar
    message="Lorem ipsum dolor sit omet"
    :variant="variant"
    :size="size"
  />
  `,
});

export const NoActions = () => ({
  components: { AlertBar, BaseButton },
  template: `
  <AlertBar
    icon="alertTriangle"
    message="Lorem ipsum dolor sit omet"
    :variant="variant"
    :size="size"
    :showActions="false"
  />
  `,
});

export const WithActionAsSlot = () => ({
  components: { AlertBar, BaseButton },
  template: `
  <AlertBar
    icon="alertTriangle"
    message="Lorem ipsum dolor sit omet"
    :variant="variant"
    :size="size"
  >
    <template #actions>
      <BaseButton variant="inverted" flat @click="$emit('confirm')">Ok, got it</BaseButton>
      <BaseButton variant="inverted" flat @click="$emit('cancel')">Nevermind</BaseButton>
    </template>
  </AlertBar>
  `,
});

export const WithKnobs = () => ({
  components: { AlertBar },
  props: {
    description: {
      default: text('Description', 'Update me!'),
    },
    icon: {
      default: select(
        'Icon',
        ['', ...Object.values(Icons)],
        Icons.ALERT_TRIANGLE
      ),
    },
    message: {
      default: text('Message', 'Lorem ipsum dolor sit omet'),
    },
    showActions: {
      default: boolean('Show Actions', true),
    },
    size: {
      default: select('Size', Object.values(Sizes), Sizes.NORMAL),
    },
    variant: {
      default: select('Variant', Object.values(Variants), Variants.PRIMARY),
    },
  },
  template: `
  <AlertBar
    :description="description"
    :icon="icon"
    :message="message"
    :showActions="showActions"
    :size="size"
    :variant="variant"
  />
  `,
});
