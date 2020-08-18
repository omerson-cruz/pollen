<script>
import Modal from '../../../constants/Modal';

const LeftSplotch = {
  template: `<svg width="102" height="56" viewBox="0 0 102 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81.3142 16.7088C90.3984 20.2736 100.092 25.254 101.738 31.9119C103.384 38.5699 96.9829 46.9578 90.3984 52.41C83.8138 57.9146 76.9855 60.4834 71.0716 61.3746C65.2187 62.2658 60.2193 61.5319 54.1226 62.8949C47.9648 64.2579 40.7097 67.8228 35.0397 66.8268C29.4306 65.8307 25.4677 60.3785 25.041 54.8739C24.6142 49.4218 27.6626 44.022 27.6626 35.7913C27.7235 27.5607 24.6142 16.5515 28.76 11.6236C32.8448 6.64322 44.0629 7.74414 53.9397 9.3693C63.7555 10.9945 72.23 13.1439 81.3142 16.7088Z" fill="currentColor"/>
<path d="M44.3068 1.61404C50.0125 3.46353 56.0779 7.21387 56.9004 12.0944C57.7228 16.975 53.3022 22.9858 49.19 27.0958C45.0779 31.1544 41.2741 33.3635 37.7273 40.1449C34.1806 46.9778 30.9422 58.4343 25.6478 61.2599C20.302 64.0855 12.9514 58.3315 7.09158 52.2693C1.23172 46.2071 -3.08607 39.8881 -7.14685 32.2846C-11.259 24.6812 -15.0628 15.7934 -11.7217 10.5018C-8.3805 5.15889 2.20836 3.36078 9.97011 2.23054C17.7318 1.04892 22.7179 0.483803 27.9095 0.175556C33.1525 -0.132691 38.5498 -0.235441 44.3068 1.61404Z" fill="white" fill-opacity="0.1"/>
</svg>`,
};

const RightSplotch = {
  template: `<svg width="97" height="72" viewBox="0 0 97 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M90.701 -8.42997C99.0327 -0.156342 108.528 9.41389 107.977 18.6137C107.364 27.8134 96.766 36.581 85.4936 40.9031C74.16 45.1634 62.2138 44.9781 50.3901 40.6561C38.6276 36.3958 26.9877 27.9987 26.0688 18.6137C25.0886 9.22866 34.7681 -1.08249 43.5287 -9.47961C52.2892 -17.8767 60.1921 -24.298 67.6662 -23.9893C75.2015 -23.6806 82.3692 -16.7036 90.701 -8.42997Z" fill="currentColor"/>
<path d="M61.4061 20.3765C68.364 22.1578 75.3847 27.1199 78.6443 34.1815C81.9039 41.1794 81.2771 50.1495 79.7726 60.0739C78.2682 69.9982 75.8235 80.8132 69.1789 84.8211C62.4717 88.8926 51.5646 86.0935 40.9709 85.6481C30.3145 85.2664 20.0342 87.2386 15.1448 82.5945C10.1927 78.014 10.7569 66.8173 8.06145 57.0202C5.36601 47.2231 -0.526342 38.8256 0.037819 31.1915C0.664665 23.621 7.81071 16.8139 15.6463 15.3507C23.4819 13.8239 32.0697 17.7045 39.7799 18.9133C47.5528 20.0584 54.3854 18.5952 61.4061 20.3765Z" fill="white" fill-opacity="0.1"/>
</svg>`,
};

export default {
  functional: true,
  props: {
    variant: {
      type: String,
      default: Modal.Headers.TRANSPARENT,
      validator: (value) => Object.values(Modal.Headers).includes(value),
    },
  },
  render(h, { data, props, children }) {
    const childNodes = [];
    if (
      [
        Modal.Headers.PRIMARY_ORNATE,
        Modal.Headers.WARNING_ORNATE,
        Modal.Headers.ERROR_ORNATE,
      ].includes(props.variant)
    ) {
      childNodes.push(
        <LeftSplotch
          class="modal-header__splotch modal-header__splotch--left"
          aria-hidden
        />,
        <RightSplotch
          class="modal-header__splotch modal-header__splotch--right"
          aria-hidden
        />
      );
    }
    childNodes.push(children);
    return h(
      'div',
      { ...data, class: ['modal-header', `modal-header--${props.variant}`] },
      [childNodes]
    );
  },
};
</script>

<style scoped>
.modal-header {
  @apply font-heading-headline font-bold overflow-hidden p-6 relative text-center text-white;
}

.modal-header--transparent {
  @apply text-black;
}

.modal-header--primary,
.modal-header--primary-ornate {
  @apply bg-primary;
}

.modal-header--secondary {
  @apply bg-secondary;
}

.modal-header--warning,
.modal-header--warning-ornate {
  @apply bg-warning;
}

.modal-header--error,
.modal-header--error-ornate {
  @apply bg-error;
}

.modal-header__splotch {
  @apply absolute;
  color: rgba(255, 255, 255, 0.4);
}

.modal-header--primary-ornate .modal-header__splotch {
  @apply text-eastern;
}

.modal-header__splotch--left {
  @apply bottom-0 left-0;
}

.modal-header__splotch--right {
  @apply right-0 top-0;
}
</style>
