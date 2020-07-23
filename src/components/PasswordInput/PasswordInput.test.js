import { mount } from '@vue/test-utils';
import PasswordInput from './PasswordInput.vue';

describe('PasswordInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(PasswordInput, {
      propsData: {
        id: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  test('toggles password visibility when clicking the eye icon', async () => {
    const elem = document.createElement('div');
    if (document.body) {
      document.body.appendChild(elem);
    }
    const wrapper = mount(PasswordInput, {
      attachTo: elem,
      propsData: {
        id: 'test',
      },
    });
    expect(wrapper.find('input[name="password"]').element.type).toBe(
      'password'
    );
    await wrapper.find('.password-input__toggle').trigger('click');
    expect(wrapper.find('input[name="password"]').element.type).toBe('text');
    await wrapper.find('.password-input__toggle').trigger('click');
    expect(wrapper.find('input[name="password"]').element.type).toBe(
      'password'
    );
  });
});
