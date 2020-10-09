import { mount } from '@vue/test-utils';
import ModalDialog from './ModalDialog.vue';

describe('ModalDialog', () => {
  test('renders correctly', () => {
    const wrapper = mount(ModalDialog, {
      slots: {
        default: 'Content goes here',
        header: 'Heading goes here',
        subfooter: 'Subfooter goes here',
      },
      propsData: {
        id: 'test',
        actions: {
          primary: {
            label: 'Accept',
          },
          secondary: {
            label: 'Skip',
          },
          tertiary: {
            label: 'Delete',
            preIcon: 'trash',
          },
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('emits a close event when escape is pressed', () => {
    const elem = document.createElement('div');
    if (document.body) {
      document.body.appendChild(elem);
    }
    const wrapper = mount(ModalDialog, {
      attachTo: elem,
    });
    wrapper.trigger('keyup.enter');
    expect(wrapper.emitted().close).toBeFalsy();
    wrapper.trigger('keyup.esc');
    expect(wrapper.emitted().close.length).toBe(1);
    wrapper.destroy();
    wrapper.trigger('keyup.esc');
    expect(wrapper.emitted().close.length).toBe(1);
  });

  test('emits a close event when the overlay is clicked', () => {
    const wrapper = mount(ModalDialog);
    wrapper.find('.modal-overlay').trigger('click');
    expect(wrapper.emitted().close.length).toBe(1);
  });

  test('does not emit a close event when the overlay is clicked if `closeOnOverlayClick` is false', () => {
    const wrapper = mount(ModalDialog, {
      propsData: { overlayClose: false },
    });
    wrapper.find('.modal-overlay').trigger('click');
    expect(wrapper.emitted().close).toBeFalsy();
  });
});
