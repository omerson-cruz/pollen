import { mount } from '@vue/test-utils';
import TypeHeading from './TypeHeading.vue';

describe('TypeHeading', () => {
  test('renders correctly', () => {
    const wrapper = mount(TypeHeading, {
      slots: {
        default: 'Hello world!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
