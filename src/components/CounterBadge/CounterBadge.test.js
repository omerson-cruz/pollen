import { mount } from '@vue/test-utils';
import CounterBadge from './CounterBadge.vue';
import { Gallery } from './CounterBadge.stories';

describe('CounterBadge', () => {
  test('renders correctly', () => {
    const wrapper = mount(CounterBadge, {
      propsData: {
        value: 8,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('rounds large numbers', () => {
    const wrapper = mount(CounterBadge, {
      propsData: {
        value: 1200,
      },
    });
    expect(wrapper.text()).toBe('1.2K');
  });
});
