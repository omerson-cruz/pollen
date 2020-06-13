import capitalize from 'lodash/capitalize';
import { action } from '@storybook/addon-actions';
import BaseButton from './BaseButton.vue';
import Button from '../../constants/Button';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import '../../assets/tailwind.css';

const { Sizes, Variants } = Button;

export default {
  title: 'BaseButton',
  component: BaseButton,
};

export const Gallery = () => ({
  components: { BaseButton, TypeOverline },
  data() {
    return {
      sizes: Sizes,
      variants: Variants,
    };
  },
  methods: {
    capitalize,
    handleClick(variant, size) {
      console.log(`clicked: ${variant} - ${size}`);
      action(`clicked: ${variant} - ${size}`); // TODO(jon.jandoc): This is not working.
    },
  },
  template: `
    <div>
      <TypeOverline tag="h1" variant="large">Regular buttons</TypeOverline>
      <div class="flex flex-wrap -mx-8 -mt-8">
        <div v-for="variant in variants" :key="variant" class="m-8 w-56">
        <TypeOverline tag="h2" class="mb-2">{{ variant }}</TypeOverline>
          <div v-for= "size in sizes" :key="'regular-' + variant + '-' + size" class="mb-2">
            <BaseButton :variant="variant" :size="size" @click="handleClick(variant, size)">{{ capitalize(size) }}</BaseButton>
          </div>
          <div v-for= "size in sizes" :key="'block-' + variant + '-' + size" class="mb-2">
            <BaseButton :variant="variant" :size="size" block @click="handleClick(variant, size)">{{ capitalize(size) }}</BaseButton>
          </div>
          <div>
            <BaseButton :variant="variant" block disabled @click="handleClick(variant, size)">Medium - Disabled</BaseButton>
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
            <BaseButton :variant="variant" :size="size" flat @click="handleClick(variant, size)">{{ capitalize(size) }}</BaseButton>
          </div>
          <div>
            <BaseButton :variant="variant" flat disabled @click="handleClick(variant, size)">Medium - Disabled</BaseButton>
          </div>
        </div>      
      </div>
    </div>
  `,
});

export const WithPreIcon = () => ({
  components: { BaseButton, TypeOverline },
  template: `
    <BaseButton preIcon="lock">Button</BaseButton>
  `,
});

export const WithPostIcon = () => ({
  components: { BaseButton, TypeOverline },
  template: `
    <BaseButton postIcon="lock">Button</BaseButton>
  `,
});
