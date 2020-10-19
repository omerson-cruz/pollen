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
        name: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders options correctly', () => {
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
    await inputs.at(1).trigger('click');
    await inputs.at(0).trigger('click');
    await inputs.at(2).trigger('click');
    expect(wrapper.emitted().input).toEqual([['foo'], ['Option 1'], ['bar']]);
  });

  test('triggers position update when value changes', async () => {
    const wrapper = mount(RadioToggle, {
      propsData: {
        options,
        value: 'foo',
      },
    });
    const mockPositionIndicator = jest.fn();
    wrapper.vm.positionIndicator = mockPositionIndicator;
    wrapper.setProps({ value: 'bar' });
    await wrapper.vm.$nextTick();
    expect(mockPositionIndicator).toBeCalled();
  });

  test('updates bgStyle correctly', () => {
    const expectedStyle = {
      left: '10px',
      height: '10px',
      width: '10px',
    };
    const wrapper = mount(RadioToggle, {
      propsData: {
        options,
        value: 'foo',
      },
    });
    wrapper.vm.$refs = {
      foo: [
        {
          offsetLeft: 10,
          offsetHeight: 10,
          offsetWidth: 10,
        },
      ],
    };
    wrapper.vm.positionIndicator();
    expect(wrapper.vm.bgStyle).toEqual(expectedStyle);
  });
});
