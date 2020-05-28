import { shallowMount } from '@vue/test-utils';
import SearchField from './SearchField.vue';

describe('SearchField', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(SearchField, {
      propsData: {
        value: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
