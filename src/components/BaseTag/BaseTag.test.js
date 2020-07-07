import { mount } from '@vue/test-utils';
import BaseTag from './BaseTag.vue';
import { Gallery } from './BaseTag.stories';

describe('BaseTag', () => {
  test('renders correctly', () => {
    const wrapper = mount(BaseTag, {
      slots: {
        default: 'Hello world',
      },
      propsData: {
        color: 'inevitable',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });
});
