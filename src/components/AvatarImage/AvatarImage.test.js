import { mount } from '@vue/test-utils';
import DEFAULT_USER_IMAGE from '../../assets/defaultUserImage';
import AvatarImage from './AvatarImage.vue';

describe('AvatarImage', () => {
  test('renders correctly', () => {
    const wrapper = mount(AvatarImage, {
      propsData: {
        image: 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc',
        initials: 'XO',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('applies filestack resize parameters', () => {
    const wrapper = mount(AvatarImage, {
      propsData: {
        image: 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc',
        initials: 'XO',
      },
    });
    expect(wrapper.attributes().style).toContain('/resize=width:40,height:40/');
  });

  test('displays intials if there is no image', () => {
    const wrapper = mount(AvatarImage, {
      propsData: {
        initials: 'XO',
      },
    });
    expect(wrapper.text()).toBe('XO');
  });

  test('displays default user image if no initials or image are provided', () => {
    const wrapper = mount(AvatarImage, {});
    expect(wrapper.attributes().style).toContain(DEFAULT_USER_IMAGE);
  });
});
