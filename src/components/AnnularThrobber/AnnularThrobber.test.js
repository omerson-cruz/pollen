import { mount } from '@vue/test-utils';
import AnnularThrobber from './AnnularThrobber.vue';
import { Gallery } from './AnnularThrobber.stories';

describe('LoadingSprite', () => {
  test('renders correctly', () => {
    const wrapper = mount(AnnularThrobber);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });
});
