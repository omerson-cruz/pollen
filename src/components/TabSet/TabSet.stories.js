import CounterBadge from '../CounterBadge/CounterBadge.vue';
import TabSet from './TabSet.vue';

export default {
  title: 'TabSet',
  component: TabSet,
};

export const Default = () => ({
  components: { TabSet },
  data() {
    return {
      options: [
        {
          label: 'Foo',
          content: 'This is the simplest way to display content.',
        },
        {
          label: 'Bar',
          content:
            'Pass Tabset an array of objects with a `label` and `content` key.',
        },
      ],
    };
  },
  template: `<TabSet :options="options" />`,
});

export const WithContentAsDynamicSlots = () => ({
  components: { TabSet },
  data() {
    return {
      options: [
        {
          label: 'Foo',
          value: 'foo',
        },
        {
          label: 'Bar',
          value: 'bar',
        },
      ],
    };
  },
  template: `
  <div>
    <TabSet :options="options">
      <template v-for="{ label, value } in options" v-slot:[value]>
        <div :key="value" class="bg-gray-5 p-8">Hello from {{ label }}</div>
      </template>
    </Tabset>
    <p class="mt-4">
      If you want to customize the TabPanel, dynamically named slots are
      provided. The slot name will match the value key of each option.
    </p>
  </div>
  `,
});

export const WithContentAsSlots = () => ({
  components: { TabSet },
  data() {
    return {
      options: ['Foo', 'Bar', 'Hello World'],
    };
  },
  template: `
  <div>
    <TabSet :options="options">
      <template v-slot:Foo>
        <div class="bg-gray-5 p-8">Hello from Foo</div>
      </template>
      <template v-slot:Bar>
        <div class="bg-primary p-8 text-white">Hello from Foo</div>
      </template>
      <template v-slot:['Hello World']>
        <div class="bg-success p-8 text-white">Hello from Hello world</div>
      </template>
    </Tabset>
    <p class="mt-4">
      If you want to customize the TabPanel, dynamically named slots are
      provided. The slot name will match the value key of each option. You can
      also simply pass an array of strings to the option prop. Strings will be
      mapped to objects with label and value keys.
    </p>
  </div>
  `,
});

export const WithLabelsPassedAsComponents = () => {
  return {
    components: { TabSet },
    data() {
      return {
        firstCount: 2,
        secondCount: 12,
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
            content: 'Hello from Foo',
          },
          {
            label: {
              components: { CounterBadge },
              template: `<span class="flex items-center">Bar <CounterBadge :value="${this.secondCount}" class="ml-1" /></span>`,
            },
            value: 'bar',
            content: 'Hello from Bar',
          },
        ];
      },
    },
    template: `
    <TabSet :options="options" />
    `,
  };
};
