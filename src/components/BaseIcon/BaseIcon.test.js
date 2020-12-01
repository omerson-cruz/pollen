import { mount } from '@vue/test-utils';
import { Gallery } from './BaseIcon.stories';

describe('Gallery', () => {
  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });
});
