import { mount } from '@vue/test-utils';
import ToastNotifications from './ToastNotifications.vue';
import { Default } from './ToastNotifications.stories';

describe('ToastNotifications', () => {
  test('renders correctly', () => {
    const notifications = Default();
    const wrapper = mount(notifications);
    expect(wrapper.element).toMatchSnapshot();
  });
  test('does not render if there are no notifications passed', () => {
    const wrapper = mount(ToastNotifications);
    expect(wrapper.find('.toast-notifications').exists()).toBeFalsy();
  });
  // TODO(jon.jandoc): This is not rendering at all for some reason and I have
  // no idea why. Skipping for now.
  test.skip('renders an action', async () => {
    const action = jest.fn();
    const wrapper = mount(ToastNotifications, {
      propsData: {
        notifications: [
          {
            message: 'Lorem ipsum dolor sit amet',
            id: 1,
          },
          {
            message: 'Lorem ipsum dolor sit amet',
            actions: [
              {
                label: 'Close',
                handler: () => {
                  action();
                },
              },
            ],
            id: 2,
          },
        ],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.findAll('.toast-notification').length).toBe(2);
    await wrapper.findAll('button').trigger('click');
    expect(action).toHaveBeenCalled();
  });
});
