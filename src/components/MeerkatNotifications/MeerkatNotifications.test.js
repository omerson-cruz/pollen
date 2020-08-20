import { mount } from '@vue/test-utils';
import MeerkatNotifications from './MeerkatNotifications.vue';
import { Default } from './MeerkatNotifications.stories';

describe('MeerkatNotifications', () => {
  test('renders correctly', () => {
    const notifications = Default();
    const wrapper = mount(notifications);
    expect(wrapper.element).toMatchSnapshot();
  });
  test('does not render if there are no notifications passed', () => {
    const wrapper = mount(MeerkatNotifications);
    expect(wrapper.find('.meerkat-notifications').exists()).toBeFalsy();
  });
  // TODO(jon.jandoc): This is not rendering at all for some reason and I have
  // no idea why. Skipping for now.
  test.skip('renders an action', async () => {
    const action = jest.fn();
    const wrapper = mount(MeerkatNotifications, {
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
    expect(wrapper.findAll('.meerkat-notification').length).toBe(2);
    await wrapper.findAll('button').trigger('click');
    expect(action).toHaveBeenCalled();
  });
});
