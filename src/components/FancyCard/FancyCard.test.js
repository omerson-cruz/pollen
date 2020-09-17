import { mount } from '@vue/test-utils';
import FancyCard from './FancyCard.vue';

describe('FancyCard', () => {
  test('renders correctly', () => {
    const wrapper = mount(FancyCard, {
      slots: {
        default: 'Hello world',
        footer: 'This is the footer',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
