import capitalize from 'lodash/capitalize';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import PasswordInput from './PasswordInput.vue';
import Form from '../../constants/Form';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';
import '../../assets/tailwind.css';

export default {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
  parameters: {
    componentSubtitle:
      'Password input with visiblity toggle and strength indicator',
  },
};

const { Sizes, Variants } = Form;

export const Gallery = () => ({
  components: { PasswordInput, TypeOverline },
  data() {
    return {
      password: 'ThisIsMyAwesomePassword',
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
      <div class="flex -mx-8">
        <div
          v-for="variant in variants"
          :key="variant"
          :class="['px-8 py-4 w-56', { 'bg-gray-0 text-white' : variant === 'ghost-inverted' }]"
        >
          <TypeOverline tag="h2" class="mb-2" variant="large">{{ variant }}</TypeOverline>
          <div v-for= "size in sizes" :key="'regular-' + variant + '-' + size" class="mb-2">
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Empty</TypeOverline>
            <PasswordInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Filled</TypeOverline>
            <PasswordInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              v-model="password"
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Filled, Scored</TypeOverline>
            <PasswordInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              v-model="password"
              show-score
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Invalid</TypeOverline>
            <PasswordInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              invalid
              @input="handleInput"
            />            
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled</TypeOverline>
            <PasswordInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              disabled
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled, Filled</TypeOverline>
            <PasswordInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              disabled
              v-model="password"
              @input="handleInput"
            />
            <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled, Filled, Scored</TypeOverline>
            <PasswordInput
              :variant="variant"
              :size="size"
              :placeholder="capitalize(size)"
              disabled
              v-model="password"
              show-score
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
    components: { PasswordInput },
    props: {
      variant: {
        default: select('Variant', Object.values(Variants), Variants.STANDARD),
      },
      size: {
        default: select('Size', Object.values(Sizes), Sizes.NORMAL),
      },
      label: {
        default: text('Label', 'Password'),
      },
      placeholder: {
        default: text('Placeholder', 'Password'),
      },
      preIcon: {
        default: select('Pre-Icon', iconOptions, Icons.LOCK),
      },
      showScore: {
        default: boolean('Show score', true),
      },
      error: {
        default: text('Error', 'Some error.'),
      },
      validatePassword: {
        default: boolean('Validate password', false),
      },
      invalid: {
        default: boolean('Invalid', false),
      },
      disabled: {
        default: boolean('Disabled', false),
      },
    },
    data() {
      return {
        password: 'Test',
      };
    },
    methods: {
      handleInput: action('input'),
    },
    template: `
      <div class="p-8" :class="variant === 'ghost-inverted' && 'bg-gray-0'">
        <PasswordInput
          :label="label"
          :placeholder="placeholder"
          :pre-icon="preIcon"
          :variant="variant"
          :size="size"
          :error="error"
          :invalid="invalid"
          :disabled="disabled"
          :show-score="showScore"
          :validate-password="validatePassword"
          v-model="password"
          @input="handleInput"
        />
      </div>
    `,
  };
};
