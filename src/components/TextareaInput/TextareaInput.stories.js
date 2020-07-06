import capitalize from 'lodash/capitalize';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import TextareaInput from './TextareaInput.vue';
import Form from '../../constants/Form';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import '../../assets/tailwind.css';

export default {
  title: 'Inputs/TextareaInput',
  component: TextareaInput,
  parameters: {
    componentSubtitle: 'Multi-line text input',
  },
};

const { Sizes, Variants } = Form;

export const Gallery = () => ({
  components: { TextareaInput, TypeOverline },
  data() {
    return {
      sizes: Sizes,
      variants: Variants,
    };
  },
  methods: {
    capitalize,
    handleInput: action('click'),
  },
  template: `
    <div>
      <TypeOverline tag="h1" variant="large">Textarea Inputs</TypeOverline>
      <div class="flex -mx-8">
        <div
          v-for="variant in variants"
          :key="variant"
          :class="['px-8 py-4 w-56', { 'bg-gray-0 text-white' : variant === 'ghost-inverted' }]"
        >
          <TypeOverline tag="h2" class="mb-2" variant="large">{{ variant }}</TypeOverline>
          <div v-for= "size in sizes" :key="'regular-' + variant + '-' + size" class="mb-2">
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Empty</TypeOverline>
            <TextareaInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Filled</TypeOverline>
            <TextareaInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              :value="capitalize(size)"
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Invalid</TypeOverline>
            <TextareaInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              invalid
              @input="handleInput"
            />            
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled</TypeOverline>
            <TextareaInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              disabled
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled, Filled</TypeOverline>
            <TextareaInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              disabled
              :value="capitalize(size)"
              @input="handleInput"
            />
          </div>
        </div>
      </div>
    </div>
  `,
});

export const WithKnobs = () => {
  return {
    components: { TextareaInput },
    props: {
      variant: {
        default: select('Variant', Object.values(Variants), Variants.STANDARD),
      },
      size: {
        default: select('Size', Object.values(Sizes), Sizes.NORMAL),
      },
      label: {
        default: text('Label', 'First name'),
      },
      placeholder: {
        default: text('Placeholder', 'Joe Smith'),
      },
      error: {
        default: text('Error', 'Something went wrong'),
      },
      invalid: {
        default: boolean('Invalid', false),
      },
    },
    methods: {
      handleInput: action('click'),
    },
    template: `
      <div class="p-8" :class="variant === 'ghost-inverted' && 'bg-gray-0'">
        <TextareaInput
          :label="label"
          :placeholder="placeholder"
          :variant="variant"
          :size="size"
          :error="error"
          :invalid="invalid"
          @input="handleInput"
        />
      </div>
    `,
  };
};

/* eslint-disable no-param-reassign */
[Gallery, WithKnobs].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['TextareaInput.test.js'],
    },
  };
});
