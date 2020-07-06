import { mount } from '@vue/test-utils';
import CheckboxInput from './CheckboxInput.vue';

describe('CheckboxInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(CheckboxInput, {
      propsData: {
        value: true,
        id: 'test',
        label: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits an input event', async () => {
    const Component = {
      components: { CheckboxInput },
      template: `
        <div>
          <CheckboxInput v-model="value" label="test" />
        </div>
      `,
      data() {
        return {
          value: false,
        };
      },
    };
    const wrapper = mount(Component);
    const input = wrapper.find('input');
    await input.trigger('click');
    expect(wrapper.vm.value).toEqual(true);
    await input.trigger('click');
    expect(wrapper.vm.value).toEqual(false);
  });

  test('emits an input event with defined trueValue and falseValue prop strings', async () => {
    const Component = {
      components: { CheckboxInput },
      template: `
        <div>
          <CheckboxInput v-model="value" true-value="yes" false-value="no" label="test" />
        </div>
      `,
      data() {
        return {
          value: 'yes',
        };
      },
    };
    const wrapper = mount(Component);
    const input = wrapper.find('input');
    await input.trigger('click');
    expect(wrapper.vm.value).toEqual('no');
    await input.trigger('click');
    expect(wrapper.vm.value).toEqual('yes');
  });
});
