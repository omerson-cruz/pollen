import { mount } from '@vue/test-utils';
import BaseChip from './BaseChip.vue';
import { Gallery } from './BaseChip.stories';

describe('BaseChip', () => {
  test('renders correctly', () => {
    const wrapper = mount(BaseChip, {
      slots: {
        default: 'Hello world',
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
