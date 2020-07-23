import { mount } from '@vue/test-utils';
import TypeBody from './TypeBody.vue';

describe('TypeBody', () => {
  test('renders correctly', () => {
    const wrapper = mount(TypeBody, {
      slots: {
        default: 'Hello world!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
