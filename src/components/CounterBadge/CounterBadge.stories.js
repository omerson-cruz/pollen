import { number } from '@storybook/addon-knobs';
import CounterBadge, { Sizes, Variants } from './CounterBadge.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

export default {
  title: 'CounterBadge',
  components: CounterBadge,
};

const sizes = Object.values(Sizes);
const variants = Object.values(Variants);

export const Gallery = () => ({
  components: { CounterBadge, TypeOverline },
  props: {
    value: {
      default: number('Value', 8),
    },
  },
  data() {
    return { sizes, variants };
  },
  template: `
  <div>
    <div v-for="variant in variants" :key="variant" class="mb-8">
      <TypeOverline tag="h1" variant="large" class="mb-2">{{ variant }}</TypeOverline>
      <div class="flex">
        <div v-for="size in sizes" class="mr-4">
          <TypeOverline tag="h2" class="mb-2">{{ size }}</TypeOverline>
          <CounterBadge :value="value" :size="size" :variant="variant" />
        </div>
      </div>
    </div>
  </div>
  `,
});
