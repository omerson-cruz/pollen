import { action } from '@storybook/addon-actions';
import Form from '../../constants/Form';
import CheckboxGroup from './CheckboxGroup.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import '../../assets/tailwind.css';

const { Sizes, Variants } = Form;
const sizes = [Sizes.DENSE, Sizes.NORMAL];

export default {
  title: 'Toggles/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    componentSubtitle: 'A group of `CheckboxInput` components',
  },
};

export const Gallery = () => ({
  components: { CheckboxGroup, TypeOverline },
  data() {
    return {
      sizes,
      options: [
        'Option 1',
        {
          label: 'My Second Option',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: ['foo'],
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" invalid />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" disabled />
      </div>
    </div>
  </div>
  `,
});

export const LabelOnTheLeft = () => ({
  components: { CheckboxGroup, TypeOverline },
  data() {
    return {
      sizes,
      options: [
        'Option 1',
        {
          label: 'My Second Option',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: ['foo'],
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" invalid />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" disabled />
      </div>
    </div>
  </div>
  `,
});

export const Stacked = () => ({
  components: { CheckboxGroup, TypeOverline },
  data() {
    return {
      sizes,
      options: [
        'Option 1',
        {
          label: 'My Second Option',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: ['foo'],
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" stacked />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" invalid stacked />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" disabled stacked />
      </div>
    </div>
  </div>
  `,
});

export const StackedWithLabelOnTheLeft = () => ({
  components: { CheckboxGroup, TypeOverline },
  data() {
    return {
      sizes,
      options: [
        'Option 1',
        {
          label: 'My Second Option',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: ['foo'],
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" stacked />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" invalid stacked />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" disabled stacked />
      </div>
    </div>
  </div>
  `,
});

/* eslint-disable no-param-reassign */
[Gallery, LabelOnTheLeft, Stacked, StackedWithLabelOnTheLeft].forEach(
  (item) => {
    item.story = {
      parameters: {
        jest: ['CheckboxGroup.test.js'],
      },
    };
  }
);
