import { action } from '@storybook/addon-actions';
import Form from '../../constants/Form';
import RadioGroup from './RadioGroup.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Sizes, Variants } = Form;

const sizes = [Sizes.DENSE, Sizes.NORMAL];

export default {
  title: 'Toggles/RadioGroup',
  component: RadioGroup,
  parameters: {
    componentSubtitle: 'A group of `RadioInput` components',
  },
};

export const Gallery = () => ({
  components: { RadioGroup, TypeOverline },
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
      value: 'foo',
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
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" invalid />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" disabled />
      </div>
    </div>
  </div>
  `,
});

export const LabelOnTheLeft = () => ({
  components: { RadioGroup, TypeOverline },
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
      value: 'foo',
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
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" invalid />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" disabled />
      </div>
    </div>
  </div>
  `,
});

export const Vertical = () => ({
  components: { RadioGroup, TypeOverline },
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
      value: 'foo',
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
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" vertical />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" invalid vertical />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" disabled vertical />
      </div>
    </div>
  </div>
  `,
});

export const VerticalWithLabelOnTheLeft = () => ({
  components: { RadioGroup, TypeOverline },
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
      value: 'foo',
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
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" vertical />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" invalid vertical />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <RadioGroup v-model="value" @input="handleInput" :variant="variant" :size="size" :options="options" label-position="left" disabled vertical />
      </div>
    </div>
  </div>
  `,
});

/* eslint-disable no-param-reassign */
[Gallery, LabelOnTheLeft, Vertical, VerticalWithLabelOnTheLeft].forEach(
  (item) => {
    item.story = {
      parameters: {
        jest: ['RadioGroup.test.js'],
      },
    };
  }
);
