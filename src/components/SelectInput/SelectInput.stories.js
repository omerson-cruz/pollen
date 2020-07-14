import BaseIcon from '../BaseIcon/BaseIcon.vue';
import SelectInput from './SelectInput.vue';

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

export const Default = () => ({
  components: { SelectInput },
  data() {
    return {
      options,
      value: null,
    };
  },
  template: `
    <SelectInput v-model="value" :options="options" />
  `,
});

export const MultiSelect = () => ({
  components: { SelectInput },
  data() {
    return {
      options,
      value: null,
    };
  },
  template: `
    <SelectInput v-model="value" :options="options" multiple />
  `,
});

/* eslint-disable no-param-reassign */
[Default, MultiSelect].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['SelectInput.test.js'],
    },
  };
});
