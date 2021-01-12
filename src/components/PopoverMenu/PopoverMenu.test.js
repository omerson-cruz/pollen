import { mount } from '@vue/test-utils';
import PopoverMenu from './PopoverMenu.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';

describe('PopoverMenu', () => {
  let items;
  let handler;
  beforeEach(() => {
    handler = jest.fn();
    items = [
      {
        label: 'Profile',
        handler,
      },
      {
        icon: Icons.CHECK,
        label: 'Settings',
        handler,
      },
      {
        icon: Icons.SIGN_OUT_SOLID,
        label: 'Sign Out',
        handler,
      },
    ];
  });

  test('renders correctly', () => {
    const wrapper = mount(PopoverMenu, {
      propsData: { initiallyOpen: true, items },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders empty correctly', () => {
    const wrapper = mount(PopoverMenu, { propsData: { initiallyOpen: true } });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('makes the menu visible when the trigger is clicked', async () => {
    const wrapper = mount(PopoverMenu, {
      propsData: { items },
    });
    expect(wrapper.find('.popover-menu__items').exists()).toBe(false);
    await wrapper.find('.popover-menu__trigger').trigger('click');
    expect(wrapper.find('.popover-menu__items').exists()).toBe(true);
    await wrapper.find('.popover-menu__trigger').trigger('click');
    expect(wrapper.find('.popover-menu__items').exists()).toBe(false);
  });

  test('executes the nav item handler on click', () => {
    const wrapper = mount(PopoverMenu, {
      propsData: { initiallyOpen: true, items },
    });
    wrapper.find('.popover-menu__items button').trigger('click');
    expect(handler).toHaveBeenCalled();
  });

  test('updating `initiallyOpen` updates the popover state', async () => {
    const wrapper = mount(PopoverMenu);
    expect(wrapper.vm.isActive).toBe(false);
    await wrapper.setProps({ initiallyOpen: true });
    expect(wrapper.vm.isActive).toBe(true);
  });

  test('closes the menu when escape is pressed', async () => {
    const elem = document.createElement('div');
    if (document.body) {
      document.body.appendChild(elem);
    }
    const wrapper = mount(PopoverMenu, {
      attachTo: elem,
      propsData: { initiallyOpen: true },
    });
    expect(wrapper.vm.isActive).toBe(true);
    await wrapper.trigger('keyup.enter');
    expect(wrapper.vm.isActive).toBe(true);
    await wrapper.trigger('keyup.esc');
    expect(wrapper.vm.isActive).toBe(false);
  });

  test('closes the menu when the document is clicked', async () => {
    const wrapper = mount(PopoverMenu, {
      propsData: { initiallyOpen: true },
    });
    expect(wrapper.vm.isActive).toBe(true);
    await document.body.click();
    expect(wrapper.vm.isActive).toBe(false);
  });

  test('adds and removes event listeners', () => {
    const { methods } = PopoverMenu;
    const addListenerSpy = jest.spyOn(methods, 'addListeners');
    const removeListenerSpy = jest.spyOn(methods, 'removeListeners');
    const wrapper = mount(PopoverMenu, {
      propsData: { initiallyOpen: true },
    });
    wrapper.destroy();
    expect(addListenerSpy).toHaveBeenCalled();
    expect(removeListenerSpy).toHaveBeenCalled();
  });
});
