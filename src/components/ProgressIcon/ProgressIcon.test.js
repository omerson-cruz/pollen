import { mount } from '@vue/test-utils';
import ProgressIcon from './ProgressIcon.vue';
import { Gallery } from './ProgressIcon.stories';

describe('ProgressIcon', () => {
  test('renders correctly', () => {
    const wrapper = mount(ProgressIcon);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });
});
