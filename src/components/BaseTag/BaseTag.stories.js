import { boolean, select, text } from '@storybook/addon-knobs';
import BaseTag, { Sizes } from './BaseTag.vue';
import { extendedPalette } from '../../tailwind/theme';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

export default {
  title: 'BaseTag',
  component: BaseTag,
  parameters: {
    componentSubtitle: 'Basic tag component.',
  },
};

const colors = ['black', 'gray', ...Object.keys(extendedPalette)];

export const Gallery = () => ({
  components: { BaseTag, TypeOverline },
  data() {
    return {
      sizes: Sizes,
      colors,
    };
  },
  template: `
    <div>
      <div class="flex">
        <div class="w-1/2">
          <TypeOverline tag="h2" class="mb-2" variant="large">Filled</TypeOverline>
          <div v-for="color in colors" :key="color">
            <TypeOverline tag="h3" class="mb-2">{{ color }}</TypeOverline>
            <div class="flex items-end mb-2"> 
              <div v-for="size in sizes" :key="'filled-' + color + size" class="mr-8">
                <BaseTag :color="color" :size="size">{{ size }}</BaseTag>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <TypeOverline tag="h2" class="mb-2" variant="large">Outline</TypeOverline>
          <div v-for="color in colors" :key="color">
            <TypeOverline tag="h3" class="mb-2">{{ color }}</TypeOverline>
            <div class="flex items-end mb-2"> 
              <div v-for= "size in sizes" :key="'outline-' + color + size" class="mr-8">
                <BaseTag :color="color" :size="size" outline>{{ size }}</BaseTag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

export const WithKnobs = () => {
  return {
    components: { BaseTag },
    props: {
      text: {
        default: text('Text', 'Hello world'),
      },
      color: {
        default: select('Color', colors, colors[0]),
      },
      size: {
        default: select('Size', Object.values(Sizes), Sizes.MEDIUM),
      },
      outline: {
        default: boolean('Outline', false),
      },
    },
    template: `
      <BaseTag
        :color="color"
        :size="size"
        :outline="outline"
      >
        {{ text }}
      </BaseTag>
    `,
  };
};

/* eslint-disable no-param-reassign */
[Gallery, WithKnobs].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['BaseTag.test.js'],
    },
  };
});
