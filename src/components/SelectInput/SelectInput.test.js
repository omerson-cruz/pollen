import { mount } from '@vue/test-utils';
import SelectInput from './SelectInput.vue';

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
  {
    label: 'Test',
    value: 'test',
  },
  'Something',
  {
    label: 'Hello',
    value: 'World',
  },
];

describe('SelectInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(SelectInput, {
      propsData: {
        options,
        value: 'test',
        id: 'test',
        label: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  // TODO(jjandoc): Not sure of the best way to test this since it's using the
  // third-party vue-select component, and there seems to be some issues with
  // properly mounting the component for tests. Skipping for now.
  test.skip('emits an input event', async () => {
    const pressDown = new KeyboardEvent('keydown', { keyCode: 37 });
    const pressEnter = new KeyboardEvent('keydown', { key: 'Enter' });
    const Component = {
      components: { SelectInput },
      template: `<SelectInput v-model="value" :options="options" />`,
      data() {
        return {
          options,
          value: '',
        };
      },
    };
    const wrapper = mount(Component);
    const input = wrapper.find('input');
    await input.trigger('focus');
    document.dispatchEvent(pressDown);
    document.dispatchEvent(pressEnter);
    expect(wrapper.vm.value).toEqual('foo');
  });
});
