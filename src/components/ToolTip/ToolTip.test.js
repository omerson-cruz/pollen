import { mount } from '@vue/test-utils';
import ToolTip from './ToolTip.vue';

describe('ToolTip', () => {
  test('renders correctly', () => {
    const wrapper = mount(ToolTip, {
      propsData: {
        id: 'test',
        initiallyOpen: true,
        title: 'Hello',
        message: 'World!',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is initially hidden', () => {
    const wrapper = mount(ToolTip);
    expect(wrapper.find('.tool-tip__content').element).not.toBeVisible();
  });

  test('is visible when trigger is clicked', async () => {
    const wrapper = mount(ToolTip);
    await wrapper.find('.tool-tip__trigger').trigger('click');
    expect(wrapper.find('.tool-tip__content').element).toBeVisible();
  });

  test('cleans up popper instance on destroy', () => {
    const destroy = jest.fn();
    const wrapper = mount(ToolTip, {
      propsData: { initiallyOpen: true },
    });
    // TODO(jon.jandoc): This isn't exactly the right way to be doing this test.
    // We should be mocking the @popperjs/core library and `createPopper`
    // function but having trouble getting that to work.
    wrapper.vm.popper = { destroy };
    wrapper.destroy();
    expect(destroy).toHaveBeenCalledTimes(1);
  });

  test('closes on escape key', async () => {
    const elem = document.createElement('div');
    if (document.body) {
      document.body.appendChild(elem);
    }
    const wrapper = mount(ToolTip, {
      attachTo: elem,
      propsData: { initiallyOpen: true },
    });
    expect(wrapper.vm.isTipActive).toBe(true);
    await wrapper.trigger('keyup.enter');
    expect(wrapper.vm.isTipActive).toBe(true);
    await wrapper.trigger('keyup.esc');
    expect(wrapper.vm.isTipActive).toBe(false);
  });
});
