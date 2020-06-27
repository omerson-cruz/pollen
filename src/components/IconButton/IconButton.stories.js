import capitalize from 'lodash/capitalize';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import IconButton from './IconButton.vue';
import Button from '../../constants/Button';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';
import '../../assets/tailwind.css';

const { Sizes, Variants } = Button;

export default {
  title: 'IconButton',
  component: IconButton,
};

export const Gallery = () => ({
  components: { IconButton, TypeOverline },
  data() {
    return {
      sizes: Sizes,
      variants: Variants,
    };
  },
  methods: {
    capitalize,
    handleClick: action('click'),
  },
  template: `
    <div>
      <TypeOverline tag="h1" variant="large">Regular buttons</TypeOverline>
      <div class="flex flex-wrap -mx-8 -mt-8">
        <div v-for="variant in variants" :key="variant" class="m-8 w-56">
        <TypeOverline tag="h2" class="mb-2">{{ variant }}</TypeOverline>
          <div v-for= "size in sizes" :key="'regular-' + variant + '-' + size" class="mb-2">
            <IconButton :variant="variant" :size="size" icon="lock" @click="handleClick" />
          </div>
          <div class="mb-2">
            <IconButton :variant="variant" icon="lock" disabled />
          </div>
        </div>
      </div>
      <TypeOverline tag="h1" variant="large">Flat buttons</TypeOverline>
      <div class="flex flex-wrap -mx-8 -my-8">
        <div
          v-for="variant in variants" 
          :key="'flat' + variant"
          :class="variant === 'inverted' ? 'bg-gray-0 m-4 p-4 text-white w-48' : 'm-8 w-56'"
        >
          <TypeOverline tag="h2" class="mb-2">{{ variant }}</TypeOverline>
          <div v-for= "size in sizes" :key="'flat-regular-' + variant + '-' + size" class="mb-2">
            <IconButton :variant="variant" :size="size" icon="lock" flat @click="handleClick" />
          </div>
          <div>
            <IconButton :variant="variant" icon="lock" flat disabled />
          </div>
        </div>      
      </div>
    </div>
  `,
});

export const WithKnobs = () => {
  const iconOptions = Object.values(Icons);
  return {
    components: { IconButton },
    props: {
      icon: {
        default: select('Icon', iconOptions, iconOptions[0]),
      },
      variant: {
        default: select('Variant', Object.values(Variants), Variants.PRIMARY),
      },
      size: {
        default: select('Size', Object.values(Sizes), Sizes.MEDIUM),
      },
      flat: {
        default: boolean('Flat', false),
      },
      title: {
        default: text('Title', 'Click me'),
      },
    },
    template: `
      <IconButton
        :icon="icon"
        :variant="variant"
        :size="size"
        :flat="flat"
        :title="title"
      />
    `,
  };
};
