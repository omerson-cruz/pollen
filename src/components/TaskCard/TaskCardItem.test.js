import { mount } from '@vue/test-utils';
import TaskCardItem, { TaskStatuses } from './TaskCardItem.vue';

describe('TaskCardItem', () => {
  test('does not display a progress icon if no status is passed', () => {
    const wrapper = mount(TaskCardItem, {
      propsData: { title: 'Hello world!' },
    });
    expect(wrapper.vm.progressIcon).toBeNull();
  });
  test('displays a progress icon if a status is passed', () => {
    const wrapper = mount(TaskCardItem, {
      propsData: { title: 'Hello world!', status: TaskStatuses.COMPLETE },
    });
    expect(wrapper.vm.progressIcon).toBeTruthy();
  });
});
