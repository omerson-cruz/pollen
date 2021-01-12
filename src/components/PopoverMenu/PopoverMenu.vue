<template>
  <div class="popover-menu">
    <button
      class="popover-menu__trigger"
      type="button"
      @click.stop="isActive = !isActive"
    >
      <slot />
    </button>
    <div
      v-if="isActive"
      class="popover-menu__items"
      :class="`popover-menu__items--${alignment}`"
      :style="{ width }"
    >
      <template v-for="{ handler = () => {}, icon, label } in items">
        <slot :name="label">
          <button :key="label" class="popover-menu__item" @click="handler">
            <BaseIcon v-if="icon" class="popover-menu__icon" :icon="icon" />
            <span>{{ label }}</span>
          </button>
        </slot>
      </template>
    </div>
  </div>
</template>

<script>
import BaseIcon from '../BaseIcon/BaseIcon.vue';

const Alignments = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right',
});
export default {
  components: { BaseIcon },
  props: {
    /**
     * Whether the menu should align with the `left` or `right` of the trigger element.
     */
    alignment: {
      type: String,
      default: Alignments.LEFT,
    },
    /**
     * If true, the PopoverMenu will appear open when first rendered.
     */
    initiallyOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * An array of items to display. These should be objects with a `label`,
     * `handler`, and `icon` (optional) keys. For custom content, slots can be
     * used, in which case only a `label` is required that will serve as the
     * slot name.
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * The width of the menu itself.
     */
    width: {
      type: String,
      default: 'auto',
    },
  },
  data() {
    return { isActive: this.initiallyOpen };
  },
  watch: {
    initiallyOpen(newValue) {
      this.isActive = newValue;
    },
    isActive(newValue) {
      if (newValue) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    },
  },
  mounted() {
    if (this.initiallyOpen) {
      this.addListeners();
    }
  },
  beforeDestroy() {
    this.removeListeners();
  },
  methods: {
    addListeners() {
      document.addEventListener('keyup', this.handleKeyup);
      document.body.addEventListener('click', this.close);
    },
    close() {
      this.isActive = false;
    },
    handleKeyup(e) {
      if (e.keyCode !== 27) {
        return;
      }
      this.close();
    },
    removeListeners() {
      document.removeEventListener('keyup', this.handleKeyup);
      document.body.removeEventListener('click', this.close);
    },
  },
};
</script>

<style scoped>
.popover-menu {
  @apply inline-block relative;
}

.popover-menu__trigger {
  @apply bg-transparent border-none p-0;
}

.popover-menu__items {
  @apply absolute
    bg-white 
    bottom-0
    py-2 
    rounded-md 
    transform
    translate-y-full
    shadow-3;
}

.popover-menu__items--left {
  @apply left-0;
}

.popover-menu__items--right {
  @apply right-0;
}

.popover-menu__item {
  @apply bg-white 
    border-none 
    cursor-pointer 
    flex 
    font-body-text 
    font-medium 
    items-center 
    px-4 
    py-2 
    text-left 
    truncate
    w-full;
}

.popover-menu__item:hover,
.popover-menu__item:focus {
  @apply bg-gray-7;
}

.popover-menu__item:active {
  @apply bg-gray-6;
}

.popover-menu__icon {
  @apply flex-shrink-0 mr-2;
}
</style>
