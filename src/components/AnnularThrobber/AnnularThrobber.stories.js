import AnnularThrobber, { Sizes } from './AnnularThrobber.vue';

export default {
  title: 'AnnularThrobber',
  component: AnnularThrobber,
};

export const Default = () => ({
  components: { AnnularThrobber },
  template: `<AnnularThrobber />`,
});

export const Gallery = () => ({
  components: { AnnularThrobber },
  data() {
    return {
      sizes: Object.values(Sizes),
    };
  },
  template: `
    <div class="flex">
      <div v-for="size in sizes" :key="size" class="flex flex-col justify-between mr-4">
        <div class="mb-2">{{ size }}</div>
        <AnnularThrobber :size="size" />
      </div>
    </div>
  `,
});
