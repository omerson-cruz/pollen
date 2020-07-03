import { mount } from '@vue/test-utils';
import Form from '../../constants/Form';
import InputMasks from '../../constants/InputMasks';
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
        value: 'Hello world!',
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

  // TODO(jon.jandoc): Skipping this test for now because lazy-loaded components
  // are treated as `shallowMount`s so no `input` will be found in this test.
  // This fails as-is, but passes if we change the `CleaveInput` to a normal
  // import rather than a lazy load.
  test.skip('masks inputs', () => {
    const onInput = jest.fn();
    const wrapper = mount(TextInput, {
      listeners: {
        input: onInput,
      },
      propsData: {
        mask: InputMasks.PHONE,
      },
    });
    const input = wrapper.find('input');
    input.setValue('5555555555');
    expect(onInput).toHaveBeenCalledWith('5555555555');
    expect(wrapper.find('input').element.value).toBe('+1 (555) 555-5555');
  });
});
