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
      <div v-for="icon in icons" :key="icon" :style="{ margin: '12px', textAlign: 'center' }">
        <BaseIcon :icon="icon" />
        <div :style="{ fontSize: '12px' }">{{ icon }}</div>
      </div>
    </div>
  `,
});
