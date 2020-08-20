import { mount } from '@vue/test-utils';
import MeerkatNotification from './MeerkatNotification.vue';
import { Gallery } from './MeerkatNotification.stories';

describe('MeerkatNotification', () => {
  test('renders correctly', () => {
    const wrapper = mount(MeerkatNotification);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits a `close` event', () => {
    const onClose = jest.fn();
    const wrapper = mount(MeerkatNotification, {
      listeners: {
        close: onClose,
      },
    });
    wrapper.find('.meerkat-notification__close').trigger('click');
    expect(onClose).toHaveBeenCalled();
  });
});
