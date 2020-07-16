import { mount } from '@vue/test-utils';
import { Gallery } from './BaseDivider.stories';

describe('BaseDivider', () => {
  test('renders correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });
});
