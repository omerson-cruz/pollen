import { mount } from '@vue/test-utils';
import TypeOverline from './TypeOverline.vue';

describe('TypeOverline', () => {
  test('renders correctly', () => {
    const wrapper = mount(TypeOverline, {
      slots: {
        default: 'Hello world!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
