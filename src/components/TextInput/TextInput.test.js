import { mount } from '@vue/test-utils';
import Form from '../../constants/Form';
import TextInput from './TextInput.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';

const testIcon = Icons.LOCK;
const { Sizes, Variants } = Form;

describe('TextInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        variant: Variants.RAISED,
        size: Sizes.DENSE,
        preIcon: testIcon,
        postIcon: testIcon,
        error: 'There was an error',
        prefix: '$',
        label: 'Test',
        id: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders pre and post icons', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        preIcon: testIcon,
        postIcon: testIcon,
      },
    });
    expect(wrapper.findAll('.base-icon').length).toBe(2);
  });

  test('transparently passes through classes and attributes', () => {
    const wrapper = mount(TextInput, {
      attrs: {
        id: 'test',
        type: 'email',
        disabled: true,
      },
    });
    const inputEl = wrapper.find('input').element;
    expect(inputEl.id).toBe('test');
    expect(inputEl.type).toBe('email');
    expect(inputEl.disabled).toBe(true);
  });

  test('emits an input event event', () => {
    const onInput = jest.fn();
    const wrapper = mount(TextInput, {
      listeners: {
        input: onInput,
      },
    });
    wrapper.find('input').setValue('hello world');
    expect(onInput).toHaveBeenCalledWith('hello world');
  });

  test('does not emit an input event when disabled', () => {
    const onInput = jest.fn();
    const wrapper = mount(TextInput, {
      listeners: {
        input: onInput,
      },
      propsData: {
        disabled: true,
      },
    });
    wrapper.find('input').setValue('hello world');
    expect(onInput).not.toHaveBeenCalledWith('hello world');
  });
});
