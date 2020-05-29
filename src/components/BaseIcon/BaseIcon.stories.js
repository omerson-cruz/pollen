import BaseIcon, { Icons } from './BaseIcon.vue';
import '../../assets/tailwind.css';

export default {
  title: 'BaseIcon',
  component: BaseIcon,
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
      <div v-for="icon in icons" :key="icon" class="text-center m-3">
        <BaseIcon :icon="icon" />
        <div class="text-xs">{{ icon }}</div>
      </div>
    </div>
  `,
});
