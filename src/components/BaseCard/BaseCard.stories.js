import { boolean } from '@storybook/addon-knobs';
import BaseCard from './BaseCard.vue';

export default {
  title: 'BaseCard',
  component: BaseCard,
  parameters: {
    componentSubtitle: 'Basic card component.',
  },
};

export const WithKnobs = () => {
  return {
    components: { BaseCard },
    props: {
      fullBleed: {
        default: boolean('Full-bleed', false),
      },
    },
    template: `
      <BaseCard
        :full-bleed="fullBleed"
      >
        <template #header>
          <div class="text-center font-body-large font-bold pt-3">
            This is a header!
          </div>
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.
        <template #footer>
          This is a footer.
        </template>
      </BaseCard>
    `,
  };
};

/* eslint-disable no-param-reassign */
[WithKnobs].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['BaseCard.test.js'],
    },
  };
});
