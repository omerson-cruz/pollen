import BaseButton from '../BaseButton/BaseButton.vue';
import ToolTip from './ToolTip.vue';

export default {
  title: 'ToolTip',
  components: ToolTip,
  parameters: {
    componentSubtitle: '',
  },
};

export const Default = () => ({
  components: { ToolTip },
  template: `
  <div class="flex items-center">
    <span>Hello world ?</span>
    <ToolTip class="ml-2">
      Hello world!
    </ToolTip>
  </div>
  `,
});

export const LightVariant = () => ({
  components: { ToolTip },
  template: `
  <div class="bg-tuberose min-w-screen min-h-screen p-8">
    <div class="flex items-center">
      <span>Hello world ?</span>
      <ToolTip class="ml-2" variant="light">
        Hello world!
      </ToolTip>
    </div>
  </div>
  `,
});

export const MultilineContent = () => ({
  components: { ToolTip },
  template: `
  <div class="flex items-center">
    <span>Hello world ?</span>
    <ToolTip class="ml-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </ToolTip>
  </div>
  `,
});

export const PassingContentByProps = () => ({
  components: { ToolTip },
  template: `
  <div class="flex items-center">
    <span>Hello world ?</span>
    <ToolTip
      class="ml-2"
      title="Hello world!"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    />
  </div>
  `,
});

export const InitiallyOpen = () => ({
  components: { ToolTip },
  template: `
  <div class="flex items-center">
    <span>Hello world ?</span>
    <ToolTip class="ml-2" initially-open>
      Hello world!
    </ToolTip>
  </div>
  `,
});

export const CustomTrigger = () => ({
  components: { BaseButton, ToolTip },
  template: `
  <ToolTip class="ml-2">
    <template #trigger>
      <BaseButton tag="div">Learn more</BaseButton>
    </template>
    Since the trigger is itself a button, for the BaseButton component we are
    setting its tag prop to "div".
  </ToolTip>
  `,
});
