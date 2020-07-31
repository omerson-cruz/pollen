import { mount } from '@vue/test-utils';
import ToastNotification from './ToastNotification.vue';
import { Gallery } from './ToastNotification.stories';

describe('ToastNotification', () => {
  test('renders correctly', () => {
    const wrapper = mount(ToastNotification);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits a `close` event', () => {
    const onClose = jest.fn();
    const wrapper = mount(ToastNotification, {
      listeners: {
        close: onClose,
      },
    });
    wrapper.find('.toast-notification__close').trigger('click');
    expect(onClose).toHaveBeenCalled();
  });
});
