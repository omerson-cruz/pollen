import BaseIcon from '../BaseIcon/BaseIcon.vue';
import TwoColumnMultiSelect from './TwoColumnMultiSelect.vue';
import '../../assets/tailwind.css';

export default {
  title: 'TwoColumnMultiSelect',
  component: TwoColumnMultiSelect,
};

export const Default = () => ({
  components: { TwoColumnMultiSelect },
  data() {
    return {
      options: [
        {
          icon: 'folder',
          label: 'Option 1',
          value: 'Option 1',
        },
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
        {
          label: 'Something',
          value: 'Something',
        },
        {
          label: 'Hello',
          value: 'Worl',
        },
      ],
      value: [],
    };
  },
  template: `
    <TwoColumnMultiSelect v-model="value" :options="options" />
  `,
});

export const WithFilter = () => ({
  components: { TwoColumnMultiSelect },
  data() {
    return {
      options: [
        {
          label: 'Option 1',
          value: 'Option 1',
        },
        {
          label: 'Option 2',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: [],
    };
  },
  template: `
    <TwoColumnMultiSelect v-model="value" :options="options" filterable />
  `,
});

export const WithPrefilledFilter = () => ({
  components: { TwoColumnMultiSelect },
  data() {
    return {
      options: [
        {
          label: 'Option 1',
          value: 'Option 1',
        },
        {
          label: 'Option 2',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: [],
      filter: '1',
    };
  },
  template: `
    <TwoColumnMultiSelect 
      v-model="value" 
      :options="options" 
      :initialFilter="filter" 
      filterable 
    />
  `,
});

export const WithHeaderAsProps = () => ({
  components: { TwoColumnMultiSelect },
  data() {
    return {
      options: [
        {
          icon: 'folderOutline',
          label: 'Option 1',
          value: 'Option 1',
        },
        {
          label: 'Option 2',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: [],
    };
  },
  template: `
    <TwoColumnMultiSelect
      v-model="value"
      :options="options"
      selectedHeader="Yup"
      unselectedHeader="Nope"
    />
  `,
});
export const WithHeadersAsSlots = () => ({
  components: { BaseIcon, TwoColumnMultiSelect },
  data() {
    return {
      options: [
        {
          label: 'Option 1',
          value: 'Option 1',
        },
        {
          label: 'Option 2',
          value: 'foo',
        },
        {
          label: 'Option 3',
          value: 'bar',
        },
      ],
      value: [],
    };
  },
  template: `
    <TwoColumnMultiSelect v-model="value" :options="options">
      <template v-slot:unselected-header>
        <span :style="{ 'margin-right': '8px' }"><BaseIcon icon="folder" /></span>
        <b>Things left to do...</b>
      </template>
      <template v-slot:selected-header>
        <span :style="{ 'margin-right': '8px' }"><BaseIcon icon="folder" /></span>
        <b>Things that I have done!</b>
      </template>
    </TwoColumnMultiSelect />
  `,
});
