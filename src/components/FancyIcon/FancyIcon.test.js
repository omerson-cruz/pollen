import { mount } from '@vue/test-utils';
import { Gallery } from './FancyIcon.stories';

describe('FancyIcon', () => {
  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });
});
