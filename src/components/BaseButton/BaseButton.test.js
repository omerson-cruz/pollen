import { mount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';

const testIcon = Icons.LOCK;

describe('BaseButton', () => {
  test('renders correctly', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Hello world',
      },
      propsData: {
        preIcon: testIcon,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders pre and post icons', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Hello world',
      },
      propsData: {
        preIcon: testIcon,
        postIcon: testIcon,
      },
    });
    expect(wrapper.findAll('.base-icon').length).toBe(2);
  });

  test('renders the component as a button by default', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Hello world',
      },
    });
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  test('renders the component as a link when prop `tag` is `a`', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Hello world',
      },
      propsData: {
        tag: 'a',
      },
    });
    expect(wrapper.element.tagName).toBe('A');
  });

  test('transparently passes through classes and attributes', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Hello world',
      },
      attrs: {
        id: 'test-button',
        type: 'reset',
        disabled: true,
      },
    });
    expect(wrapper.element.id).toBe('test-button');
    expect(wrapper.element.type).toBe('reset');
    expect(wrapper.element.disabled).toBe(true);
  });

  test('emits a click event', () => {
    const onClick = jest.fn();
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Hello world',
      },
      listeners: {
        click: onClick,
      },
    });
    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  test('does not emit a click event when disabled', () => {
    const onClick = jest.fn();
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Hello world',
      },
      listeners: {
        click: onClick,
      },
      attrs: {
        disabled: true,
      },
    });
    wrapper.trigger('click');
    expect(onClick).not.toHaveBeenCalled();
  });
});
