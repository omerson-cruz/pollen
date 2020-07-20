import { boolean, text } from '@storybook/addon-knobs';
import UserAvatar from './UserAvatar.vue';

export default {
  title: 'UserAvatar',
  component: UserAvatar,
  parameters: {
    componentSubtitle: 'A user avatar image and name component.',
  },
};

const image = 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc';

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
