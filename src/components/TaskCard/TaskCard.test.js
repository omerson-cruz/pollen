import { mount } from '@vue/test-utils';
import TaskCard from './TaskCard.vue';
import {
  DocumentsAwaitingSignature,
  EmploymentNotices,
  AccountSetup,
} from './TaskCard.stories';

describe('TaskCard', () => {
  test('renders default correctly', () => {
    const wrapper = mount(TaskCard);
    expect(wrapper.element).toMatchSnapshot();
  });
  test('renders signature example correctly', () => {
    const example = DocumentsAwaitingSignature();
    const wrapper = mount(example);
    expect(wrapper.element).toMatchSnapshot();
  });
  test('renders signature example correctly', () => {
    const example = EmploymentNotices();
    const wrapper = mount(example);
    expect(wrapper.element).toMatchSnapshot();
  });
  test('renders setup example correctly', () => {
    const example = AccountSetup();
    const wrapper = mount(example);
    expect(wrapper.element).toMatchSnapshot();
  });
});
