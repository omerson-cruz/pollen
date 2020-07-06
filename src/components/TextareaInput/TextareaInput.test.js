import { mount } from '@vue/test-utils';
import Form from '../../constants/Form';
import TextareaInput from './TextareaInput.vue';

const { Sizes, Variants } = Form;

describe('TextareaInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(TextareaInput, {
      propsData: {
        variant: Variants.RAISED,
        size: Sizes.DENSE,
        error: 'There was an error',
        label: 'Test',
        id: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('transparently passes through classes and attributes', () => {
    const wrapper = mount(TextareaInput, {
      attrs: {
        id: 'test',
        disabled: true,
      },
    });
    const inputEl = wrapper.find('textarea').element;
    expect(inputEl.id).toBe('test');
    expect(inputEl.disabled).toBe(true);
  });

  test('emits an input event event', () => {
    const onInput = jest.fn();
    const wrapper = mount(TextareaInput, {
      listeners: {
        input: onInput,
      },
    });
    wrapper.find('textarea').setValue('hello world');
    expect(onInput).toHaveBeenCalledWith('hello world');
  });

  test('does not emit an input event when disabled', () => {
    const onInput = jest.fn();
    const wrapper = mount(TextareaInput, {
      listeners: {
        input: onInput,
      },
      propsData: {
        disabled: true,
      },
    });
    wrapper.find('textarea').setValue('hello world');
    expect(onInput).not.toHaveBeenCalled();
  });
});
