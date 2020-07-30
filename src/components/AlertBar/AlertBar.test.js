import { mount } from '@vue/test-utils';
import AlertBar from './AlertBar.vue';
import { Gallery } from './AlertBar.stories';

describe('AlertBar', () => {
  test('renders correctly', () => {
    const wrapper = mount(AlertBar);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits a `close` event', () => {
    const onClose = jest.fn();
    const wrapper = mount(AlertBar, {
      listeners: {
        close: onClose,
      },
    });
    wrapper.find('.alert-bar__close').trigger('click');
    expect(onClose).toHaveBeenCalled();
  });
});
