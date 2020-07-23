import { mount } from '@vue/test-utils';
import SwitchGroup from './SwitchGroup.vue';

const options = [
  'Option 1',
  {
    label: 'Option 2',
    value: 'foo',
  },
  {
    label: 'Option 3',
    value: 'bar',
  },
];

describe('SwitchGroup', () => {
  test('renders correctly', () => {
    const wrapper = mount(SwitchGroup, {
      propsData: {
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders options correctly', () => {
    const wrapper = mount(SwitchGroup, {
      propsData: {
        options,
        value: ['foo'],
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits an input event', async () => {
    const onInput = jest.fn();
    const component = {
      components: { SwitchGroup },
      data() {
        return {
          options,
          value: null,
        };
      },
      methods: {
        onInput,
      },
      template: `<SwitchGroup v-model="value" :options="options" @input="onInput" />`,
    };
    const wrapper = mount(component);
    const inputs = wrapper.findAll('input');
    expect(inputs.length).toBe(3);
    await inputs.at(1).trigger('click');
    expect(onInput).toHaveBeenLastCalledWith(['foo']);
    expect(wrapper.vm.$data.value).toEqual(['foo']);
    await inputs.at(0).trigger('click');
    expect(onInput).toHaveBeenLastCalledWith(['foo', 'Option 1']);
    expect(wrapper.vm.$data.value).toEqual(['foo', 'Option 1']);
    await inputs.at(2).trigger('click');
    expect(onInput).toHaveBeenLastCalledWith(['foo', 'Option 1', 'bar']);
    expect(wrapper.vm.$data.value).toEqual(['foo', 'Option 1', 'bar']);
    await inputs.at(2).trigger('click');
    expect(onInput).toHaveBeenLastCalledWith(['foo', 'Option 1']);
    expect(wrapper.vm.$data.value).toEqual(['foo', 'Option 1']);
  });
});
