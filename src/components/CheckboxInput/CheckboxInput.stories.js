import BaseIcon from '../BaseIcon/BaseIcon.vue';
import Form from '../../constants/Form';
import CheckboxInput from './CheckboxInput.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import '../../assets/tailwind.css';

const { Sizes, Variants } = Form;
const sizes = [Sizes.DENSE, Sizes.NORMAL];

export default {
  title: 'Toggles/CheckboxInput',
  component: CheckboxInput,
  story: {
    parameters: {
      jest: ['CheckboxInput.test.js'],
    },
  },
};

export const Gallery = () => ({
  components: { CheckboxInput, TypeOverline },
  data() {
    return {
      sizes,
      value: true,
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My checkbox" />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My checkbox" invalid />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My checkbox" disabled />
      </div>
    </div>
  </div>
  `,
});

export const LabelOnTheLeft = () => ({
  components: { CheckboxInput, TypeOverline },
  data() {
    return {
      sizes,
      value: true,
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My checkbox" label-position="left" />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My checkbox" label-position="left" invalid />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My checkbox" label-position="left" disabled />
      </div>
    </div>
  </div>
  `,
});

export const HTMLLabel = () => ({
  components: { CheckboxInput, TypeOverline },
  data() {
    return {
      sizes: Object.values(Sizes),
      value: true,
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My <i>checkbox</i>" />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My <i>checkbox</i>" invalid />
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" label="My <i>checkbox</i>" disabled />
      </div>
    </div>
  </div>
  `,
});

export const WithLabelAsSlot = () => ({
  components: { BaseIcon, CheckboxInput, TypeOverline },
  data() {
    return {
      sizes: Object.values(Sizes),
      value: true,
      variants: [Variants.STANDARD, Variants.RAISED],
    };
  },
  template: `
  <div class="flex -mx-8">
    <div class="flex-grow mx-8" v-for="variant in variants" :key="variant">
      <TypeOverline tag="h2" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div v-for="size in sizes" :key="variant + '-' + size">
        <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size">
          <div>
            <BaseIcon icon="lock" />
            Lock it down?
          </div>
        </CheckboxInput>
        <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" invalid>
          <div>
            <BaseIcon icon="lock" />
            Lock it down?
          </div>
        </CheckboxInput>
        <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
        <CheckboxInput v-model="value" :variant="variant" :size="size" disabled>
          <div>
            <BaseIcon icon="lock" />
            Lock it down?
          </div>
        </CheckboxInput>
      </div>
    </div>
  </div>
  `,
});

/* eslint-disable no-param-reassign */
[Gallery, LabelOnTheLeft, HTMLLabel, WithLabelAsSlot].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['CheckboxInput.test.js'],
    },
  };
});
