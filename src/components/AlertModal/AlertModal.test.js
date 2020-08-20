import { mount } from '@vue/test-utils';
import AlertModal from './AlertModal.vue';
import Modal from '../../constants/Modal';

describe('AlertModal', () => {
  Object.values(Modal.Alerts).forEach((variant) => {
    test(`renders ${variant} variant correctly`, () => {
      const wrapper = mount(AlertModal, {
        slots: {
          default: 'Content goes here',
          header: 'Heading goes here',
        },
        propsData: { variant },
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  test('emits a confirm and cancel event', () => {
    const wrapper = mount(AlertModal);
    wrapper.find('.modal-actions__action--primary').trigger('click');
    expect(wrapper.emitted().confirm.length).toBe(1);
    wrapper.find('.modal-actions__action--secondary').trigger('click');
    expect(wrapper.emitted().cancel.length).toBe(1);
  });
});
