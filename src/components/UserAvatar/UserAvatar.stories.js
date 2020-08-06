import { boolean, select, text } from '@storybook/addon-knobs';
import TypeOverline from '../TypeOverline/TypeOverline.vue';
import UserAvatar, { Sizes } from './UserAvatar.vue';

export default {
  title: 'UserAvatar',
  component: UserAvatar,
  parameters: {
    componentSubtitle: 'A user avatar image and name component.',
  },
};

const image = 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc';
const sizes = Object.values(Sizes);

export const Gallery = () => ({
  components: { TypeOverline, UserAvatar },
  data() {
    return { image, sizes };
  },
  template: `
  <div class="flex">
    <div v-for="vertical in [false, true]" :key="vertical ? 'vertical': 'horizontal'" class="mr-12">
      <TypeOverline tag="h1" variant="large">
        {{ vertical ? 'vertical': 'horizontal' }}
      </TypeOverline>
      <div v-for="size in sizes" :key="size" class="my-4">
        <TypeOverline tag="h2">{{ size }}</TypeOverline>
        <UserAvatar :image="image" name="Xavier Oaxaca" title="HR Manager" :size="size" :vertical="vertical" />
      </div>
    </div>
  </div>
  `,
});

export const Default = () => ({
  components: { UserAvatar },
  data() {
    return { image };
  },
  template:
    '<UserAvatar :image="image" name="Xavier Oaxaca" title="HR Manager" />',
});

export const Vertical = () => ({
  components: { UserAvatar },
  data() {
    return { image };
  },
  template:
    '<UserAvatar :image="image" name="Xavier Oaxaca" title="HR Manager" vertical />',
});

export const NoImage = () => ({
  components: { UserAvatar },
  template: '<UserAvatar name="Xavier Oaxaca" title="HR Manager" />',
});

export const NoNameOrImage = () => ({
  components: { UserAvatar },
  template: '<UserAvatar title="HR Manager" />',
});

export const WithKnobs = () => {
  return {
    components: { UserAvatar },
    props: {
      image: {
        default: text('Image', image),
      },
      name: {
        default: text('Name', 'Xavier Oaxaca'),
      },
      size: {
        default: select('Size', sizes, Sizes.MEDIUM),
      },
      title: {
        default: text('Title', 'HR Manager'),
      },
      vertical: {
        default: boolean('Vertical', false),
      },
    },
    template: `
      <UserAvatar
        :image="image"
        :name="name"
        :size="size"
        :title="title"
        :vertical="vertical"
      />
    `,
  };
};

/* eslint-disable no-param-reassign */
[Default, Vertical, NoImage, NoNameOrImage, WithKnobs].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['BaseButton.test.js'],
    },
  };
});
