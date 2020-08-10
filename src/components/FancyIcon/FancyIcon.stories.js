import { number } from '@storybook/addon-knobs';
import FancyIcon, { Icons } from './FancyIcon.vue';

export default {
  title: 'FancyIcon',
  component: FancyIcon,
  parameters: {
    componentSubtitle: 'Inlined svg icons',
  },
};

export const Gallery = () => ({
  components: { FancyIcon },
  props: {
    size: {
      default: number('Size', 72),
    },
  },
  data() {
    return {
      icons: Object.values(Icons),
    };
  },
  template: `
    <div class="flex flex-wrap">
      <div v-for="icon in icons" :key="icon" class="text-center m-3">
        <div :style="{ fontSize: size + 'px' }"><FancyIcon :icon="icon" /></div>
        <div class="font-body-small mt-2">{{ icon }}</div>
      </div>
    </div>
  `,
});
