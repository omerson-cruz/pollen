import BaseIcon, { Icons } from './BaseIcon.vue';

export default {
  title: 'BaseIcon',
  component: BaseIcon,
  parameters: {
    componentSubtitle: 'Inlined svg icons',
  },
};

export const Gallery = () => ({
  components: { BaseIcon },
  data() {
    return {
      icons: Object.values(Icons),
    };
  },
  template: `
    <div class="flex flex-wrap">
      <div v-for="icon in icons" :key="icon" :style="{ display: 'flex', margin: '12px', textAlign: 'center' }">
        <BaseIcon :icon="icon" />
        <div :style="{ fontSize: '12px', marginLeft: '8px' }">{{ icon }}</div>
      </div>
    </div>
  `,
});
