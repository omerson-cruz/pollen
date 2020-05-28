import { shallowMount } from '@vue/test-utils';
import TwoColumnMultiSelect from './TwoColumnMultiSelect.vue';

const options = [
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
];

describe('TwoColumnMultiSelect', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(TwoColumnMultiSelect, {
      propsData: {
        options,
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
