import { mount } from '@vue/test-utils';
import { Gallery } from './CountersignIcon.stories';

describe('CountersignIcon', () => {
  test('renders correctly', () => {
    const wrapper = mount(Gallery());
    expect(wrapper.element).toMatchSnapshot();
  });
});
