import { mount } from '@vue/test-utils';
import TypeDisplay from './TypeDisplay.vue';

describe('TypeDisplay', () => {
  test('renders correctly', () => {
    const wrapper = mount(TypeDisplay, {
      slots: {
        default: 'Hello world!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
