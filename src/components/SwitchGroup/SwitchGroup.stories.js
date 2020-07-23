import { action } from '@storybook/addon-actions';
import Form from '../../constants/Form';
import SwitchGroup from './SwitchGroup.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const { Sizes } = Form;
const sizes = [Sizes.DENSE, Sizes.NORMAL];

export default {
  title: 'Toggles/SwitchGroup',
  component: SwitchGroup,
  parameters: {
    componentSubtitle: 'A group of `CheckboxInput` components',
  },
};

export const Gallery = () => ({
  components: { SwitchGroup, TypeOverline },
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
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" invalid />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" disabled />
    </div>
  </div>
  `,
});

export const LabelOnTheLeft = () => ({
  components: { SwitchGroup, TypeOverline },
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
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" label-position="left" />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" label-position="left" invalid />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" label-position="left" disabled />
    </div>
  </div>
  `,
});

export const Vertical = () => ({
  components: { SwitchGroup, TypeOverline },
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
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" vertical />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" invalid vertical />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" disabled vertical />
    </div>
  </div>
  `,
});

export const VerticalWithLabelOnTheLeft = () => ({
  components: { SwitchGroup, TypeOverline },
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
    };
  },
  methods: {
    handleInput: action('input'),
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" label-position="left" vertical />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" label-position="left" invalid vertical />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchGroup v-model="value" @input="handleInput" :size="size" :options="options" label-position="left" disabled vertical />
    </div>
  </div>
  `,
});

/* eslint-disable no-param-reassign */
[Gallery, LabelOnTheLeft, Vertical, VerticalWithLabelOnTheLeft].forEach(
  (item) => {
    item.story = {
      parameters: {
        jest: ['SwitchGroup.test.js'],
      },
    };
  }
);
