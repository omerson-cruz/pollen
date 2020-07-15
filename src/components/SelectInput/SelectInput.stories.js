import capitalize from 'lodash/capitalize';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Form from '../../constants/Form';
import SelectInput from './SelectInput.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Sizes, Variants } = Form;

export default {
  title: 'SelectInput',
  component: SelectInput,
  parameters: {
    componentSubtitle: 'A select input capable of selecting multiple options.',
  },
};

const options = [
  'Option 1',
  {
    label: 'Option 2',
    value: 'foo',
  },
  {
    label: 'Option 3',
    value: 'bar',
  },
  {
    label: 'Test',
    value: 'test',
  },
  'Something',
  {
    label: 'Hello',
    value: 'World',
  },
];

export const Gallery = () => ({
  components: { SelectInput, TypeOverline },
  data() {
    return {
      options,
      value: '',
      multiValue: [],
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
    <TypeOverline tag="h1" variant="large">Select Inputs</TypeOverline>
    <div class="flex -mx-8">
      <div
        v-for="variant in variants"
        :key="variant"
        :class="['px-8 py-4 w-5/12']"
      >
        <TypeOverline tag="h2" class="mb-2" variant="large">{{ variant }}</TypeOverline>
        <div v-for= "size in sizes" :key="'regular-' + variant + '-' + size" class="mb-2">
          <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
          <SelectInput
            v-model="value"
            :options="options"
            :variant="variant"
            :size="size"
            :placeholder="capitalize(size)"
            @input="handleInput"
          />
          <TypeOverline tag="h3" class="mb-2">{{ size }}, Multiple</TypeOverline>
          <SelectInput
            v-model="multiValue"
            :options="options"
            :variant="variant"
            :size="size"
            :placeholder="capitalize(size)"
            :value="capitalize(size)"
            multiple
            @input="handleInput"
          />
          <TypeOverline tag="h3" class="mb-2">{{ size }}, Invalid</TypeOverline>
          <SelectInput
            v-model="value"
            :options="options"
            :variant="variant"
            :size="size"
            :placeholder="capitalize(size)"
            invalid
            @input="handleInput"
          />            
          <TypeOverline tag="h3" class="mb-2">{{ size }}, Disabled</TypeOverline>
          <SelectInput
            v-model="value"
            :options="options"
            :variant="variant"
            :size="size"
            :placeholder="capitalize(size)"
            disabled
            @input="handleInput"
          />
        </div>
      </div>
    </div>
  </div>
  `,
});

export const Default = () => ({
  components: { SelectInput },
  props: {
    variant: {
      default: select('Variant', Object.values(Variants), Variants.STANDARD),
    },
    size: {
      default: select('Size', Object.values(Sizes), Sizes.NORMAL),
    },
    label: {
      default: text('Label', 'My options'),
    },
    placeholder: {
      default: text('Placeholder', 'Select something'),
    },
    error: {
      default: text('Error', ''),
    },
    invalid: {
      default: boolean('Invalid', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    showReset: {
      default: boolean('Show Reset', true),
    },
  },
  data() {
    return {
      options,
      value: null,
    };
  },
  template: `
    <div>
      <p>Value: {{ value }}</p>
      <SelectInput 
        v-model="value" 
        :options="options" 
        :variant="variant"
        :size="size"
        :placeholder="placeholder"
        :label="label"
        :error="error"
        :invalid="invalid"
        :disabled="disabled"
        :show-reset="showReset"
      />
    </div>
  `,
});

export const MultiSelect = () => ({
  components: { SelectInput },
  props: {
    variant: {
      default: select('Variant', Object.values(Variants), Variants.STANDARD),
    },
    size: {
      default: select('Size', Object.values(Sizes), Sizes.NORMAL),
    },
    label: {
      default: text('Label', 'My options'),
    },
    placeholder: {
      default: text('Placeholder', 'Select something'),
    },
    error: {
      default: text('Error', ''),
    },
    invalid: {
      default: boolean('Invalid', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    showReset: {
      default: boolean('Show Reset', true),
    },
  },
  data() {
    return {
      options,
      value: null,
    };
  },
  template: `
    <div>
      <p>Value: {{ value }}</p>
      <SelectInput 
        v-model="value" 
        :options="options" 
        :variant="variant"
        :size="size"
        :placeholder="placeholder"
        :label="label"
        :error="error"
        :invalid="invalid"
        :disabled="disabled"
        :show-reset="showReset"
        multiple
      />
    </div>
  `,
});

/* eslint-disable no-param-reassign */
[Gallery, Default, MultiSelect].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['SelectInput.test.js'],
    },
  };
});
