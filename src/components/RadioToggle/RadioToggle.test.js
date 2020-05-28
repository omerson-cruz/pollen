import { mount } from '@vue/test-utils';
import RadioToggle from './RadioToggle.vue';

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

describe('RadioToggle', () => {
  test('renders correctly', () => {
    const wrapper = mount(RadioToggle, {
      propsData: {
        options,
        value: 'foo',
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('highlights the correct label', () => {
    const wrapper = mount(RadioToggle, {
      propsData: {
        options,
        value: 'foo',
      },
    });
    expect(wrapper.find('.active').text()).toBe('Option 2');
  });

  test('emits an input event', async () => {
    const wrapper = mount(RadioToggle, {
      propsData: {
        options,
      },
    });
    const inputs = wrapper.findAll('input');
    expect(inputs.length).toBe(3);
    await inputs.at(1).trigger('input');
    await inputs.at(0).trigger('input');
    await inputs.at(2).trigger('input');
    expect(wrapper.emitted().input).toEqual([['foo'], ['Option 1'], ['bar']]);
  });
});
