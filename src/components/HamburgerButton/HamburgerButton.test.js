import { mount } from '@vue/test-utils';
import HamburgerButton from './HamburgerButton.vue';

describe('HamburgerButton', () => {
  test('renders correctly when closed', () => {
    const wrapper = mount(HamburgerButton);
    expect(wrapper.element).toMatchSnapshot();
  });
  test('renders correctly when open', () => {
    const wrapper = mount(HamburgerButton, { propsData: { open: true } });
    expect(wrapper.element).toMatchSnapshot();
  });
  test('emits a click event', () => {
    const onClick = jest.fn();
    const wrapper = mount(HamburgerButton, {
      listeners: {
        click: onClick,
      },
    });
    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });
});
