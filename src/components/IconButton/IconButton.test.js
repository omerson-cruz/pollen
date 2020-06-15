import { mount } from '@vue/test-utils';
import IconButton from './IconButton.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';

const testIcon = Object.values(Icons)[0];

describe('IconButton', () => {
  test('renders correctly', () => {
    const wrapper = mount(IconButton, {
      propsData: {
        icon: testIcon,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders the component as a button by default', () => {
    const wrapper = mount(IconButton, {
      propsData: {
        icon: testIcon,
      },
    });
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  test('renders the component as a link when prop `tag` is `a`', () => {
    const wrapper = mount(IconButton, {
      propsData: {
        tag: 'a',
        icon: testIcon,
      },
    });
    expect(wrapper.element.tagName).toBe('A');
  });

  test('transparently passes through classes and attributes', () => {
    const wrapper = mount(IconButton, {
      attrs: {
        id: 'test-button',
        type: 'reset',
        disabled: true,
      },
      propsData: {
        icon: testIcon,
      },
    });
    expect(wrapper.element.id).toBe('test-button');
    expect(wrapper.element.type).toBe('reset');
    expect(wrapper.element.disabled).toBe(true);
  });

  test('renders screen reader text', () => {
    const wrapper = mount(IconButton, {
      propsData: {
        icon: testIcon,
        title: 'Hello world',
      },
    });
    expect(wrapper.text()).toBe('Hello world');
  });

  test('emits a click event', () => {
    const onClick = jest.fn();
    const wrapper = mount(IconButton, {
      listeners: {
        click: onClick,
      },
      propsData: {
        icon: testIcon,
      },
    });
    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  test('does not emit a click event when disabled', () => {
    const onClick = jest.fn();
    const wrapper = mount(IconButton, {
      listeners: {
        click: onClick,
      },
      attrs: {
        disabled: true,
      },
      propsData: {
        icon: testIcon,
      },
    });
    wrapper.trigger('click');
    expect(onClick).not.toHaveBeenCalled();
  });
});
