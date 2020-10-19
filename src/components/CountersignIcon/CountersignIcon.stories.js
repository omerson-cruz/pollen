import { boolean, number } from '@storybook/addon-knobs';
import CountersignIcon from './CountersignIcon.vue';

export default {
  title: 'CountersignIcon',
  components: CountersignIcon,
};

export const Gallery = () => ({
  components: { CountersignIcon },
  template: `
  <div>
    <div class="flex m-4">
      <CountersignIcon />
      <span class="ml-4">unsigned</span>
    </div>
    <div class="flex m-4">
      <CountersignIcon signed />
      <span class="ml-4">signed</span>
    </div>
    <div class="flex m-4">
      <CountersignIcon countersigned />
      <span class="ml-4">countersigned</span>
    </div>
    <div class="flex m-4">
      <CountersignIcon signed countersigned />
      <span class="ml-4">signed & countersigned</span>
    </div>
  </div>
  `,
});

export const WithKnobs = () => ({
  components: { CountersignIcon },
  props: {
    signed: {
      default: boolean('signed', false),
    },
    countersigned: {
      default: boolean('countersigned', false),
    },
    size: {
      default: number('size', 24),
    },
  },
  template: `
    <CountersignIcon 
      :signed="signed"
      :countersigned="countersigned"
      :size="size"
    />`,
});
