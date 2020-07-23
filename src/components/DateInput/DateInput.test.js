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

  test('hides the placeholder and changes focus to the month element when placeholder is focused', async () => {
    const elem = document.createElement('div');
    if (document.body) {
      document.body.appendChild(elem);
    }
    const wrapper = mount(DateInput, {
      propsData: {
        placeholder: 'Date of birth',
      },
      attachTo: elem,
    });
    await wrapper.find('.date-input__placeholder').trigger('focus');
    const monthInput = wrapper.find('input[name="month"]').element;
    expect(monthInput).toBe(document.activeElement);
    wrapper.destroy();
  });

  test('only allows valid days depending on month', () => {
    const Component = {
      components: { DateInput },
      data() {
        return {
          value: null,
        };
      },
      template: `
        <div>
          <DateInput v-model="value" />
        </div>
      `,
    };
    const wrapper = mount(Component);
    const monthInput = wrapper.find('input[name="month"]');
    monthInput.setValue('04');
    const dayInput = wrapper.find('input[name="day"]');
    dayInput.setValue('31');
    expect(wrapper.vm.value).toBe('04/3/');
    dayInput.setValue('30');
    expect(wrapper.vm.value).toBe('04/30/');
    monthInput.setValue('');
    dayInput.setValue('31');
    expect(wrapper.vm.value).toBe('/31/');
  });

  test('emits an input event, auto formats on blur, and verifies leap year', async () => {
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
    monthInput.setValue('13');
    expect(onInput).toHaveBeenLastCalledWith('1//');
    monthInput.setValue('1');
    expect(onInput).toHaveBeenLastCalledWith('1//');
    monthInput.setValue('01');
    expect(onInput).toHaveBeenLastCalledWith('01//');
    monthInput.setValue('2');
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
