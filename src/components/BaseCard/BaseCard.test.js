import { mount } from '@vue/test-utils';
import BaseCard from './BaseCard.vue';

describe('BaseCard', () => {
  test('renders correctly', () => {
    const wrapper = mount(BaseCard, {
      slots: {
        header: 'This is the header',
        default: 'Hello world',
        footer: 'This is the footer',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
