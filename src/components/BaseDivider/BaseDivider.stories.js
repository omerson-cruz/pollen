import BaseDivider from './BaseDivider.vue';
import TypeOverline from '../TypeOverline/TypeOverline.vue';

export default {
  title: 'BaseDivider',
  component: BaseDivider,
  parameters: {
    componentSubtitle: 'Basic divider component.',
  },
};

export const Gallery = () => ({
  components: { BaseDivider, TypeOverline },
  template: `
  <div class="flex">
    <div class="mr-16 w-64">
      <TypeOverline tag="h1" variant="large">Horizontal</TypeOverline>
      <TypeOverline tag="h2" class="mb-4">Solid</TypeOverline>
      <BaseDivider />
      <TypeOverline tag="h2" class="mt-8 mb-4">Dashed</TypeOverline>
      <BaseDivider dashed />
      <TypeOverline tag="h2" class="mt-8 mb-4">Solid + Label</TypeOverline>
      <BaseDivider label="or" />
      <TypeOverline tag="h2" class="mt-8 mb-4">Dashed + Label</TypeOverline>
      <BaseDivider dashed label="or" />
    </div>
    <div class="w-64">
      <TypeOverline tag="h1" variant="large">Vertical</TypeOverline>
      <div class="flex items-end">
        <div class="flex-grow w-1/4">
          <TypeOverline tag="h2" class="mb-4">Solid</TypeOverline>
          <BaseDivider vertical class="h-56" />
        </div>
        <div class="flex-grow w-1/4">
          <TypeOverline tag="h2" class="mb-4">Dashed</TypeOverline>
          <BaseDivider dashed vertical class="h-56" />
        </div>
        <div class="flex-grow w-1/4">
          <TypeOverline tag="h2" class="mb-4">Solid + Label</TypeOverline>
          <BaseDivider vertical label="or" class="h-56" />
        </div>
        <div class="flex-grow w-1/4">
          <TypeOverline tag="h2" class="mb-4">Dashed + Label</TypeOverline>
          <BaseDivider dashed vertical label="or" class="h-56" />
        </div>
      </div>
    </div>
  </div>
  `,
});

/* eslint-disable no-param-reassign */
[Gallery].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['BaseDivider.test.js'],
    },
  };
});
