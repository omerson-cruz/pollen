import { mount } from '@vue/test-utils';
import SwitchInput from './SwitchInput.vue';

describe('SwitchInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(SwitchInput, {
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
      components: { SwitchInput },
      template: `
        <div>
          <SwitchInput v-model="value" label="test" />
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
      components: { SwitchInput },
      template: `
        <div>
          <SwitchInput v-model="value" true-value="yes" false-value="no" label="test" />
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
