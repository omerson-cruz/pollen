import { boolean, number, text } from '@storybook/addon-knobs';
import AvatarImage from './AvatarImage.vue';

export default {
  title: 'AvatarImage',
  component: AvatarImage,
  parameters: {
    componentSubtitle: 'Avatar iamge',
  },
};

const image = 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc';

export const Default = () => ({
  components: { AvatarImage },
  data() {
    return { image };
  },
  template: '<AvatarImage :image="image" />',
});

export const NoImage = () => ({
  components: { AvatarImage },
  template: '<AvatarImage />',
});

export const WithInitials = () => ({
  components: { AvatarImage },
  template: '<AvatarImage initials="XO" />',
});

export const WithKnobs = () => {
  return {
    components: { AvatarImage },
    props: {
      border: {
        default: boolean('Border', false),
      },
      image: {
        default: text('Image', image),
      },
      initials: {
        default: text('Initials', 'XO'),
      },
      name: {
        default: text('Name', ''),
      },
      size: {
        default: number('Size', 40),
      },
      square: {
        default: boolean('Square', false),
      },
    },
    template: `
      <AvatarImage
        :border="border"
        :image="image"
        :initials="initials"
        :name="name"
        :size="size"
        :square="square"
      />
    `,
  };
};

/* eslint-disable no-param-reassign */
[Default, NoImage, WithInitials, WithKnobs].forEach((item) => {
  item.story = {
    parameters: {
      jest: ['BaseButton.test.js'],
    },
  };
});
