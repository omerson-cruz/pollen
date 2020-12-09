import HamburgerButton from './HamburgerButton.vue';

export default {
  title: 'Buttons/HamburgetButton',
  parameters: {
    componentSubtitle: 'Hamburget menu button.',
  },
};

export const Default = () => ({
  components: { HamburgerButton },
  data() {
    return {
      isOpen: false,
    };
  },
  template: `<HamburgerButton @click="isOpen = !isOpen" :open="isOpen" />`,
});
