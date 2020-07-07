import { boolean, select, text } from '@storybook/addon-knobs';
import BaseChip, { Sizes, Variants } from './BaseChip.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

export default {
  title: 'BaseChip',
  component: BaseChip,
  parameters: {
    componentSubtitle: 'Basic chip component.',
  },
};

const sizes = Object.values(Sizes);
const variants = Object.values(Variants);

export const Gallery = () => ({
  components: { BaseChip, TypeOverline },
  data() {
    return {
      sizes,
      variants,
    };
  },
  template: `
    <div>
      <div class="mb-8" v-for="variant in variants" :key="variant">
        <TypeOverline tag="h2" class="mb-2" variant="large">{{ variant }}</TypeOverline>
        <div class="flex items-end mb-2"> 
          <div v-for="size in sizes" :key="variant + '-' + size" class="mr-8">
            <BaseChip :size="size" :variant="variant">{{ size }}</BaseChip>
          </div>
        </div>
        <div class="flex items-end mb-2"> 
          <div v-for="size in sizes" :key="variant + '-' + size" class="mr-8">
            <BaseChip :size="size" :variant="variant" show-reset>{{ size }}</BaseChip>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const WithKnobs = () => {
  return {
    components: { BaseChip },
    props: {
      text: {
        default: text('Text', 'Hello world'),
      },
      showReset: {
        default: boolean('Show reset', false),
      },
      size: {
        default: select('Size', sizes, Sizes.MEDIUM),
      },
      variant: {
        default: select('Variant', variants, Variants.STANDARD),
      },
    },
    template: `
      <BaseChip
        :show-reset="showReset"
        :size="size"
        :variant="variant"
      >
        {{ text }}
      </BaseChip>
    `,
  };
};

/* eslint-disable no-param-reassign */
[Gallery, WithKnobs].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['BaseChip.test.js'],
    },
  };
});
