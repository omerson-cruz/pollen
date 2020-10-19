import { mount } from '@vue/test-utils';
import TabPanel from '../internal/TabPanel/TabPanel.vue';
import TabSet from './TabSet.vue';

const options = [
  {
    label: 'Foo',
    content: 'This is the simplest way to display content.',
  },
  {
    label: 'Bar',
    content:
      'Pass Tabset an array of objects with a `label` and `content` key.',
  },
];

describe('TabSet', () => {
  test('renders correctly', () => {
    const wrapper = mount(TabSet, {
      propsData: {
        id: 'test',
        options,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('activates first option when no initialValue is passed', () => {
    const wrapper = mount(TabSet, {
      propsData: {
        options,
      },
    });
    expect(wrapper.find('.tab-controls__tab--active').text()).toBe('Foo');
  });

  test('activates selected option when initialValue is passed', () => {
    const wrapper = mount(TabSet, {
      propsData: {
        options,
        initialValue: 'Bar',
      },
    });
    expect(wrapper.find('.tab-controls__tab--active').text()).toBe('Bar');
  });

  test('shows correct content when switching tabs', async () => {
    const wrapper = mount(TabSet);
    wrapper.setProps({ options });
    wrapper.setData({ activeTab: 'Foo' });
    await wrapper.vm.$nextTick();
    const firstPanel = wrapper.findAllComponents(TabPanel).at(0);
    const secondPanel = wrapper.findAllComponents(TabPanel).at(1);
    expect(firstPanel.element).toBeVisible();
    expect(secondPanel.element).not.toBeVisible();

    wrapper.setData({ activeTab: 'Bar' });
    await wrapper.vm.$nextTick();
    expect(firstPanel.element).not.toBeVisible();
    expect(secondPanel.element).toBeVisible();
  });
});
