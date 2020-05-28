import RadioToggle from './RadioToggle.vue';
import '../../assets/tailwind.css';

export default {
  title: 'RadioToggle',
  component: RadioToggle,
};

export const Text = () => ({
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
