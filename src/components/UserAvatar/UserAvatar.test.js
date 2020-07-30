import { mount } from '@vue/test-utils';
import UserAvatar from './UserAvatar.vue';
import { Gallery } from './UserAvatar.stories';

describe('UserAvatar', () => {
  test('renders correctly', () => {
    const wrapper = mount(UserAvatar, {
      propsData: {
        image: 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc',
        name: 'Xavier Oaxaca',
        title: 'HR Manager',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders gallery correctly', () => {
    const gallery = Gallery();
    const wrapper = mount(gallery);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('displays intials if there is no image', () => {
    const wrapper = mount(UserAvatar, {
      propsData: {
        name: 'Xavier Oaxaca',
        title: 'HR Manager',
      },
    });
    expect(wrapper.text()).toContain('XO');
  });
});
