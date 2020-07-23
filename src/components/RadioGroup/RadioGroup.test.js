import { mount } from '@vue/test-utils';
import RadioGroup from './RadioGroup.vue';

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

describe('RadioGroup', () => {
  test('renders correctly', () => {
    const wrapper = mount(RadioGroup, {
      propsData: {
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders options correctly', () => {
    const wrapper = mount(RadioGroup, {
      propsData: {
        options,
        value: 'foo',
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders options correctly', () => {
    const wrapper = mount(RadioGroup, {
      propsData: {
        options,
        value: 'foo',
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits an input event', async () => {
    const wrapper = mount(RadioGroup, {
      propsData: {
        options,
        value: null,
      },
    });
    const inputs = wrapper.findAll('input');
    expect(inputs.length).toBe(3);
    await inputs.at(1).trigger('click');
    await inputs.at(0).trigger('click');
    await inputs.at(2).trigger('click');
    expect(wrapper.emitted().input).toEqual([['foo'], ['Option 1'], ['bar']]);
  });
});
