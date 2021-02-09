import BaseIcon, { Icons } from './BaseIcon.vue';
import TightGrid from '../TightGrid/TightGrid.vue';

export default {
  title: 'BaseIcon',
  component: BaseIcon,
  parameters: {
    componentSubtitle: 'Inlined svg icons',
  },
};

export const Gallery = () => ({
  components: { BaseIcon, TightGrid },
  data() {
    return {
      icons: Object.values(Icons),
    };
  },
  template: `
    <TightGrid>
      <div v-for="icon in icons" :key="icon" class="flex items-center col-span-6 sm:col-span-4 md:col-span-2">
        <BaseIcon :icon="icon" />
        <div class="text-12 ml-2">{{ icon }}</div>
      </div>
    </TightGrid>
  `,
});
