import { select } from '@storybook/addon-knobs';
import BaseButton from '../BaseButton/BaseButton.vue';
import Notification from '../../constants/Notification';
import MeerkatNotifications from './MeerkatNotifications.vue';

const { Positions, Variants } = Notification;

export default {
  title: 'MeerkatNotifications',
  component: MeerkatNotifications,
};

export const Default = () => ({
  components: { BaseButton, MeerkatNotifications },
  props: {
    position: {
      default: select(
        'Position',
        Object.values(Positions),
        Positions.BOTTOM_CENTER
      ),
    },
  },
  data() {
    return {
      notifications: [
        {
          message: 'Lorem ipsum dolor sit amet',
          id: 1,
        },
        {
          message: 'Lorem ipsum dolor sit amet',
          variant: Variants.SECONDARY,
          id: 2,
          image: 'https://cdn.filestackcontent.com/enCa5BTVeIsLHcgkdpAc',
          showActions: false,
        },
        {
          message: 'Lorem ipsum dolor sit amet',
          variant: Variants.ERROR,
          id: 3,
        },
        {
          message: 'Lorem ipsum dolor sit amet',
          actions: [
            {
              label: 'Alert',
              handler: () => {
                alert('foo');
              },
            },
            {
              label: 'Close',
              handler: () => {
                this.remove(4);
              },
            },
          ],
          id: 4,
        },
      ],
    };
  },
  methods: {
    add() {
      const id = Math.max(...this.notifications.map((i) => i.id)) + 1;
      this.notifications.push({
        message: `I'm a new message. ID ${id}.`,
        id,
      });
    },
    remove(id) {
      this.notifications = this.notifications.filter((item) => item.id !== id);
    },
  },
  template: `
    <div>
      <BaseButton type="button" pre-icon="plus" @click="add">Add a notification</BaseButton>
      <MeerkatNotifications :notifications="notifications" :position="position" @close="remove" />
    </div>`,
});
