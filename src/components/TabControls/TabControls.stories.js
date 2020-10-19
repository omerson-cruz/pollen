import CounterBadge from '../CounterBadge/CounterBadge.vue';
import TabControls from './TabControls.vue';

export default {
  title: 'TabControls',
  component: TabControls,
};

export const Default = () => ({
  components: { TabControls },
  data() {
    return {
      options: ['Foo', 'Bar', 'Bizz', 'Buzz'],
      selected: null,
    };
  },
  template: `<TabControls :options="options" v-model="selected" />`,
});

export const WithInitialValue = () => ({
  components: { TabControls },
  data() {
    return {
      options: ['Foo', 'Bar', 'Bizz', 'Buzz'],
      selected: 'Bar',
    };
  },
  template: `<TabControls :options="options" v-model="selected" />`,
});

export const FullWidthTabs = () => ({
  components: { TabControls },
  data() {
    return {
      options: ['Foo', 'Bar', 'Bizz', 'Buzz'],
      selected: null,
    };
  },
  template: `<TabControls :options="options" v-model="selected" full-width />`,
});

export const Wrapping = () => ({
  components: { TabControls },
  data() {
    return {
      options: ['Foo', 'Bar', 'Bizz', 'Buzz', 'Lorem Ipsum', 'Dolor Sit Amet'],
      selected: null,
    };
  },
  template: `<div class="max-w-xs"><TabControls :options="options" v-model="selected" full-width /></div>`,
});

export const WithLabelsAsComponents = () => ({
  components: { TabControls },
  data() {
    return {
      firstCount: 2,
      secondCount: 12,
      selected: null,
    };
  },
  computed: {
    options() {
      return [
        {
          label: {
            components: { CounterBadge },
            template: `<span class="flex items-center">Foo <CounterBadge :value="${this.firstCount}" class="ml-1" /></span>`,
          },
          value: 'foo',
        },
        {
          label: {
            components: { CounterBadge },
            template: `<span class="flex items-center">Bar <CounterBadge :value="${this.secondCount}" class="ml-1" /></span>`,
          },
          value: 'bar',
        },
      ];
    },
  },
  template: `<TabControls :options="options" v-model="selected" />`,
});
