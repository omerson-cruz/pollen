import capitalize from 'lodash/capitalize';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import TextInput from './TextInput.vue';
import Form from '../../constants/Form';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';
import '../../assets/tailwind.css';

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
};

const { Sizes, Variants } = Form;

export const Gallery = () => ({
  components: { TextInput, TypeOverline },
  data() {
    return {
      sizes: Sizes,
      variants: Variants,
    };
  },
  methods: {
    capitalize,
    handleInput: action('input'),
  },
  template: `
    <div>
      <TypeOverline tag="h1" variant="large">Regular Inputs</TypeOverline>
      <div class="flex flex-wrap -mx-8 -mt-8">
        <div
          v-for="variant in variants"
          :key="variant"
          :class="['w-56', (variant === 'ghost-inverted' ? 'm-4 p-4 bg-gray-0 text-white' : 'm-8')]"
        >
          <TypeOverline tag="h2" class="mb-2" variant="large">{{ variant }}</TypeOverline>
          <div v-for= "size in sizes" :key="'regular-' + variant + '-' + size" class="mb-2">
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Empty</TypeOverline>
            <TextInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Filled</TypeOverline>
            <TextInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              :value="capitalize(size)"
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Invalid</TypeOverline>
            <TextInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              invalid
              @input="handleInput"
            />            
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled</TypeOverline>
            <TextInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              disabled
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled, Filled</TypeOverline>
            <TextInput
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
  const iconOptions = ['', ...Object.values(Icons)];
  return {
    components: { TextInput },
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
      preIcon: {
        default: select('Pre-Icon', iconOptions, Icons.SEARCH),
      },
      postIcon: {
        default: select('Post-Icon', iconOptions, Icons.LOCK),
      },
      prefix: {
        default: text('Prefix', '$'),
      },
      invalid: {
        default: boolean('Invalid', false),
      },
      showReset: {
        default: boolean('Show Reset', true),
      },
    },
    methods: {
      handleInput: action('input'),
    },
    template: `
      <div class="p-8" :class="variant === 'ghost-inverted' && 'bg-gray-0'">
        <TextInput
          :label="label"
          :placeholder="placeholder"
          :variant="variant"
          :size="size"
          :error="error"
          :pre-icon="preIcon"
          :post-icon="postIcon"
          :prefix="prefix"
          :invalid="invalid"
          :show-reset="showReset"
          @input="handleInput"
        />
      </div>
    `,
  };
};
