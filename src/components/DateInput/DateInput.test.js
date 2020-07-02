import { mount } from '@vue/test-utils';
import Form from '../../constants/Form';
import DateInput from './DateInput.vue';

const { Sizes, Variants } = Form;

describe('DateInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(DateInput, {
      propsData: {
        variant: Variants.RAISED,
        size: Sizes.DENSE,
        error: 'There was an error',
        label: 'Test',
        id: 'test',
        value: '07/07/2007',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits an input event, auto formats on blur, and verifies leap year', () => {
    const onInput = jest.fn();
    const Component = {
      components: { DateInput },
      data() {
        return {
          value: null,
        };
      },
      methods: {
        onInput,
      },
      template: `
        <div>
          <DateInput v-model="value" @input="onInput" />
        </div>
      `,
    };
    const wrapper = mount(Component);
    const monthInput = wrapper.find('input[name="month"]');
    monthInput.setValue('2');
    expect(onInput).toHaveBeenLastCalledWith('2//');
    monthInput.trigger('blur');
    expect(onInput).toHaveBeenLastCalledWith('02//');

    const dayInput = wrapper.find('input[name="day"]');
    dayInput.setValue('2');
    expect(onInput).toHaveBeenLastCalledWith('02/2/');
    dayInput.trigger('blur');
    expect(onInput).toHaveBeenLastCalledWith('02/02/');
    dayInput.setValue('29');
    expect(onInput).toHaveBeenLastCalledWith('02/29/');

    const yearInput = wrapper.find('input[name="year"]');
    yearInput.setValue('2');
    expect(onInput).toHaveBeenLastCalledWith('02/29/2');
    yearInput.trigger('blur');
    expect(onInput).toHaveBeenLastCalledWith('02//2002');
    yearInput.setValue('2004');
    expect(onInput).toHaveBeenLastCalledWith('02//2004');
    dayInput.setValue('29');
    expect(onInput).toHaveBeenLastCalledWith('02/29/2004');
  });

  test('does not emit an input event when disabled', () => {
    const onInput = jest.fn();
    const wrapper = mount(DateInput, {
      listeners: {
        input: onInput,
      },
      propsData: {
        disabled: true,
      },
    });
    wrapper.findAll('input').setValue('07');
    expect(onInput).not.toHaveBeenCalled();
  });
});
