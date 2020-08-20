import Grid from '../../constants/Grid';
import LooseGrid from './LooseGrid.vue';

export default {
  title: 'LooseGrid',
  components: LooseGrid,
  parameters: {
    componentSubtitle: '',
  },
};

export const Gallery = () => ({
  components: { LooseGrid },
  data() {
    return {
      widths: Object.values(Grid.Widths),
    };
  },
  template: `
  <div class="bg-gray-4">
    <LooseGrid v-for="width in widths" :key="width" :width="width" class=" bg-white mb-8 shadow-6">
      <div v-for="n in 12" :key="n" class="bg-primary opacity-50 h-64" />
    </LooseGrid>
  </div>
  `,
});

export const UsingTailwindClasses = () => ({
  components: { LooseGrid },
  data() {
    return {
      widths: Object.values(Grid.Widths),
    };
  },
  template: `
  <div class="bg-gray-4">
    <LooseGrid v-for="width in widths" :key="width" :width="width" class=" bg-white mb-8 shadow-6">
      <div class="bg-primary opacity-50 h-64 col-span-4" />
      <div class="bg-primary opacity-50 h-64 col-span-3" />
      <div class="bg-primary opacity-50 h-64 col-span-2" />
      <div class="bg-primary opacity-50 h-64 col-span-1" />
      <div class="bg-primary opacity-50 h-64 col-span-1" />
      <div class="bg-primary opacity-50 h-64 col-span-1" />
    </LooseGrid>
  </div>
  `,
});
