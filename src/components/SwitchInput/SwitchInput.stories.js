import BaseIcon from '../BaseIcon/BaseIcon.vue';
import Form from '../../constants/Form';
import SwitchInput from './SwitchInput.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

const sizes = [Form.Sizes.DENSE, Form.Sizes.NORMAL];

export default {
  title: 'Toggles/SwitchInput',
  component: SwitchInput,
  parameters: {
    componentSubtitle: 'A single checkbox input styled as a switch',
  },
};

export const Gallery = () => ({
  components: { SwitchInput, TypeOverline },
  data() {
    return {
      sizes,
      value: true,
    };
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My checkbox" />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My checkbox" invalid />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My checkbox" disabled />
    </div>
  </div>
  `,
});

export const LabelOnTheLeft = () => ({
  components: { SwitchInput, TypeOverline },
  data() {
    return {
      sizes,
      value: true,
    };
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My checkbox" label-position="left" />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My checkbox" label-position="left" invalid />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My checkbox" label-position="left" disabled />
    </div>
  </div>
  `,
});

export const HTMLLabel = () => ({
  components: { SwitchInput, TypeOverline },
  data() {
    return {
      sizes,
      value: true,
    };
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My <i>checkbox</i>" />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My <i>checkbox</i>" invalid />
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchInput v-model="value" :size="size" label="My <i>checkbox</i>" disabled />
    </div>
  </div>
  `,
});

export const WithLabelAsSlot = () => ({
  components: { BaseIcon, SwitchInput, TypeOverline },
  data() {
    return {
      sizes,
      value: true,
    };
  },
  template: `
  <div>
    <div v-for="size in sizes" :key="size">
      <TypeOverline tag="h3" class="mb-2">{{ size }}</TypeOverline>
      <SwitchInput v-model="value" :size="size">
        <div>
          <BaseIcon icon="lock" />
          Lock it down?
        </div>
      </SwitchInput>
      <TypeOverline tag="h3" class="mb-2">{{ size }}, invalid</TypeOverline>
      <SwitchInput v-model="value" :size="size" invalid>
        <div>
          <BaseIcon icon="lock" />
          Lock it down?
        </div>
      </SwitchInput>
      <TypeOverline tag="h3" class="mb-2">{{ size }}, disabled</TypeOverline>
      <SwitchInput v-model="value" :size="size" disabled>
        <div>
          <BaseIcon icon="lock" />
          Lock it down?
        </div>
      </SwitchInput>
    </div>
  </div>
  `,
});

/* eslint-disable no-param-reassign */
[Gallery, LabelOnTheLeft, HTMLLabel, WithLabelAsSlot].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['SwitchInput.test.js'],
    },
  };
});
