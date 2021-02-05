import { Icons } from '../BaseIcon/BaseIcon.vue';
import HighlightedIcon, { Sizes } from './HighlightedIcon.vue';
import TightGrid from '../TightGrid/TightGrid.vue';

export default {
  title: 'HighlightedIcon',
  component: HighlightedIcon,
  parameters: {
    componentSubtitle: 'Inlined svg icons',
  },
};

export const Gallery = () => ({
  components: { HighlightedIcon, TightGrid },
  data() {
    return {
      icons: Object.values(Icons),
      sizes: Object.values(Sizes),
    };
  },
  template: `
    <TightGrid>
      <div v-for="icon in icons" :key="icon" class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
        <div class="flex items-end mb-1">
          <HighlightedIcon v-for="size in sizes" :icon="icon" :size="size" :key="icon + '-' + size" class="mr-1 flex-shrink-0"/>
        </div>
        <div class="text-12">{{ icon }}</div>
      </div>
    </TightGrid>
  `,
});
