import RadioToggle from './RadioToggle.vue';

export default {
  title: 'Toggles/RadioToggle',
  component: RadioToggle,
};

export const Default = () => ({
  components: { RadioToggle },
  data() {
    return {
      options: [
        'Option 1',
        {
          label: 'Option 2',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: '',
    };
  },
  template: '<RadioToggle v-model="value" :options="options" />',
});

export const WithInitialValue = () => ({
  components: { RadioToggle },
  data() {
    return {
      options: [
        'Option 1',
        {
          label: 'Option 2',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: 'foo',
    };
  },
  template: '<RadioToggle v-model="value" :options="options" />',
});

/* eslint-disable no-param-reassign */
[Default, WithInitialValue].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['RadioToggle.test.js'],
    },
  };
});
