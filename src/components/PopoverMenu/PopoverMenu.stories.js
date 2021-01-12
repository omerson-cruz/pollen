import { action } from '@storybook/addon-actions';
import BaseButton from '../BaseButton/BaseButton.vue';
import CounterBadge from '../CounterBadge/CounterBadge.vue';
import PopoverMenu from './PopoverMenu.vue';
import { Icons } from '../BaseIcon/BaseIcon.vue';

export default {
  title: 'PopoverMenu',
  component: PopoverMenu,
  parameters: {
    componentSubtitle: '',
  },
};

export const Default = () => ({
  components: { BaseButton, PopoverMenu },
  data() {
    return {
      items: [
        {
          label: 'Profile',
          handler: action('clicked Profile'),
        },
        {
          icon: Icons.CHECK,
          label: 'Settings',
          handler: action('clicked Settings'),
        },
        {
          icon: Icons.SIGN_OUT_SOLID,
          label: 'Sign Out',
          handler: action('clicked Sign Out'),
        },
      ],
    };
  },
  template: `
    <PopoverMenu 
      :items="items" 
    >
      <BaseButton tag="div">Toggle Popover</BaseButton>
    </PopoverMenu>
  `,
});

export const RightAligned = () => ({
  components: { BaseButton, PopoverMenu },
  data() {
    return {
      items: [
        {
          label: 'Profile',
          handler: action('clicked Profile'),
        },
        {
          icon: Icons.CHECK,
          label: 'Settings',
          handler: action('clicked Settings'),
        },
        {
          icon: Icons.SIGN_OUT_SOLID,
          label: 'Sign Out',
          handler: action('clicked Sign Out'),
        },
      ],
    };
  },
  template: `
    <PopoverMenu 
      alignment="right"
      :items="items" 
    >
      <BaseButton tag="div">Toggle Popover</BaseButton>
    </PopoverMenu>
  `,
});

export const DefinedWidth = () => ({
  components: { BaseButton, PopoverMenu },
  data() {
    return {
      items: [
        {
          label: 'Profile',
          handler: action('clicked Profile'),
        },
        {
          icon: Icons.CHECK,
          label: 'Settings',
          handler: action('clicked Settings'),
        },
        {
          icon: Icons.SIGN_OUT_SOLID,
          label: 'Sign Out',
          handler: action('clicked Sign Out'),
        },
      ],
    };
  },
  template: `
  <div class="relative">
    <PopoverMenu 
      width="300px"
      :items="items" 
    >
      <BaseButton tag="div">Toggle Popover</BaseButton>
    </PopoverMenu>
  </div>
  `,
});

export const InitiallyOpen = () => ({
  components: { BaseButton, PopoverMenu },
  data() {
    return {
      items: [
        {
          label: 'Profile',
          handler: action('clicked Profile'),
        },
        {
          icon: Icons.CHECK,
          label: 'Settings',
          handler: action('clicked Settings'),
        },
        {
          icon: Icons.SIGN_OUT_SOLID,
          label: 'Sign Out',
          handler: action('clicked Sign Out'),
        },
      ],
    };
  },
  template: `
    <PopoverMenu 
      :items="items" 
      initially-open
    >
      <BaseButton tag="div">Toggle Popover</BaseButton>
    </PopoverMenu>
  `,
});

export const WithSlotContent = () => ({
  components: { BaseButton, CounterBadge, PopoverMenu },
  data() {
    return {
      items: [
        {
          label: 'notifications',
        },
        {
          label: 'Profile',
          handler: action('clicked Profile'),
        },
        {
          icon: Icons.CHECK,
          label: 'Settings',
          handler: action('clicked Settings'),
        },
        {
          icon: Icons.SIGN_OUT_SOLID,
          label: 'Sign Out',
          handler: action('clicked Sign Out'),
        },
      ],
    };
  },
  template: `
  <PopoverMenu
    :items="items"
  >
    <BaseButton tag="div">Toggle Popover</BaseButton>
    <template v-slot:notifications>
      <div class="flex items-center px-4 py-2">
        Notifications 
        <CounterBadge :value="47" class="ml-2" />
      </div>
    </template>
  </PopoverMenu>
  `,
});
