<template>
  <div class="tool-tip">
    <button
      ref="trigger"
      class="tool-tip__trigger"
      type="button"
      aria-describedby="id"
      :title="alt"
      @click="toggleTip"
    >
      <slot name="trigger">
        <BaseIcon
          :icon="$options.Icons.QUESTION_CIRCLE"
          class="tool-tip__default-icon"
        />
      </slot>
    </button>
    <div
      v-show="isTipActive"
      :id="id"
      ref="content"
      role="tooltip"
      class="tool-tip__content"
      :class="`tool-tip__content--${variant}`"
    >
      <slot>
        <div v-if="title" class="tool-tip__title">{{ title }}</div>
        <div v-if="message" class="tool-tip__message">{{ message }}</div>
      </slot>
      <div class="tool-tip__arrow" data-popper-arrow />
    </div>
  </div>
</template>

<script>
// PopperJS Documentation here: https://popper.js.org/docs/v2/
import { createPopper } from '@popperjs/core';
import shortid from 'shortid';
import BaseIcon, { Icons } from '../BaseIcon/BaseIcon.vue';

export const Variants = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light',
});

export default {
  Icons,
  components: { BaseIcon },
  props: {
    /** Accessibilty text for the trigger button. */
    alt: {
      type: String,
      default: 'Learn more',
    },
    /** A unique element ID. By default, one is randomly generated. */
    id: {
      type: String,
      default: shortid.generate,
    },
    /** If true, sets the tooltip to be initially visible. */
    initiallyOpen: {
      type: Boolean,
      default: false,
    },
    /** The message to display. This can be overridden using the default slot. */
    message: {
      type: String,
      default: null,
    },
    /** The title of the message to display. This can be overridden using the default slot. */
    title: {
      type: String,
      default: null,
    },
    /** One of `dark` or `light`. */
    variant: {
      type: String,
      default: Variants.DARK,
      validator: (value) => Object.values(Variants).includes(value),
    },
  },
  data() {
    return {
      isTipActive: this.initiallyOpen,
    };
  },
  watch: {
    isTipActive: {
      async handler(newVal) {
        if (newVal) {
          await this.$nextTick();
          this.createPopper();
          document.addEventListener('keyup', this.handleKeyup);
          this.$emit('open');
        } else {
          document.removeEventListener('keyup', this.handleKeyup);
          this.$emit('close');
        }
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup);
    if (this.popper) {
      this.popper.destroy();
    }
  },
  methods: {
    createPopper() {
      if (this.popper) return;
      const { trigger, content } = this.$refs;
      this.poppper = createPopper(trigger, content, {
        modifiers: [
          {
            name: 'arrow',
            options: {
              // https://popper.js.org/docs/v2/modifiers/arrow/#padding
              padding: 4,
            },
          },
          {
            name: 'offset',
            options: {
              // https://popper.js.org/docs/v2/modifiers/offset/
              offset: [0, 16],
            },
          },
        ],
      });
    },
    handleKeyup(e) {
      if (e.keyCode !== 27) {
        return;
      }
      this.isTipActive = false;
    },
    toggleTip() {
      this.isTipActive = !this.isTipActive;
    },
  },
};
</script>

<style scoped>
.tool-tip__trigger {
  @apply appearance-none bg-transparent block border-none cursor-pointer p-0;
}

.tool-tip__default-icon {
  @apply block 
    duration-ludicrous 
    ease-out 
    overflow-hidden 
    rounded-full 
    text-gray-4 
    text-16 
    transition-all;
}

.tool-tip__trigger:hover .tool-tip__default-icon {
  @apply text-gray-3;
}

.tool-tip__trigger:focus {
  @apply outline-none;
}

.tool-tip__trigger:focus .tool-tip__default-icon {
  @apply shadow-outline;
}

.tool-tip__arrow,
.tool-tip__arrow::before {
  @apply absolute h-4 w-4;
}

.tool-tip__arrow::before {
  content: '';
  transform: rotate(45deg);
}

.tool-tip__content {
  @apply font-body-small max-w-xs p-4 rounded shadow-3;
}

.tool-tip__content--dark,
.tool-tip__content--dark .tool-tip__arrow::before {
  @apply bg-gray-1 text-white;
}

.tool-tip__content--light,
.tool-tip__content--light .tool-tip__arrow::before {
  @apply bg-white text-gray-0;
}

[data-popper-placement^='top'] > .tool-tip__arrow {
  bottom: -0.5rem;
}

[data-popper-placement^='bottom'] > .tool-tip__arrow {
  top: -0.5rem;
}

[data-popper-placement^='left'] > .tool-tip__arrow {
  right: -0.5rem;
}

[data-popper-placement^='right'] > .tool-tip__arrow {
  left: -0.5rem;
}

.tool-tip__title {
  @apply font-body-text font-semibold mb-1;
}
</style>
