import { mount } from '@vue/test-utils';
import TabControls from './TabControls.vue';

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

describe('TabControls', () => {
  test('renders correctly', () => {
    const wrapper = mount(TabControls, {
      propsData: {
        options,
        tabsetId: 'test',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('highlights the correct label', async () => {
    const wrapper = mount(TabControls);
    wrapper.setProps({
      options,
      value: 'foo',
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.tab-controls__tab--active').text()).toBe('Option 2');
  });

  test('updates bgStyle correctly', () => {
    const expectedStyle = {
      left: '10px',
      top: '20px',
      width: '10px',
    };
    const wrapper = mount(TabControls, {
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
          offsetTop: 10,
          offsetWidth: 10,
        },
      ],
    };
    wrapper.vm.positionIndicator();
    expect(wrapper.vm.indicatorStyle).toEqual(expectedStyle);
  });
});
