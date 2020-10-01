import ProgressIcon from './ProgressIcon.vue';

export default {
  title: 'ProgressIcon',
  component: ProgressIcon,
  parameters: {
    componentSubtitle: '',
  },
};

export const Gallery = () => ({
  components: { ProgressIcon },
  template: `
  <div>
    <div class="mb-2">
      <ProgressIcon /> Incomplete
    </div>
    <div class="mb-2">
      <ProgressIcon complete /> Complete
    </div>
    <div class="mb-2">
      <ProgressIcon disabled /> Disabled
    </div>
    <div class="mb-2">
      <ProgressIcon complete disabled /> Complete and disabled
    </div>
  </div>
  `,
});
