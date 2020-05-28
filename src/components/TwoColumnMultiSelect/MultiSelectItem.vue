<template>
  <label
    class="multi-select-item"
    :class="{ focused: isFocused }"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <input
      type="checkbox"
      :value="value"
      :checked="checked"
      class="multi-select-item__input"
      :name="name"
      @blur="isFocused = false"
      @focus="isFocused = true"
      @input="$emit('input', $event)"
    />
    <BaseIcon v-if="icon" :icon="icon" class="multi-select-item__pre-icon" />
    <span class="multi-select-item__label">{{ label }}</span>
    <BaseIcon
      v-if="isHovering || isFocused"
      class="multi-select-item__post-icon"
      :icon="checked ? 'close' : 'plus'"
    />
  </label>
</template>

<script>
import BaseIcon from '../BaseIcon/BaseIcon.vue';

export default {
  components: { BaseIcon },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFocused: false,
      isHovering: false,
    };
  },
};
</script>

<style scoped>
.multi-select-item {
  @apply cursor-pointer 
    flex 
    items-center
    pl-6
    pr-12 
    py-4
    relative
    text-sm;
}

.multi-select-item.focused {
  @apply shadow-outline;
}

.multi-select-item__input {
  @apply sr-only;
}

.multi-select-item .base-icon {
  @apply text-2xl;
}

.multi-select-item .multi-select-item__pre-icon {
  @apply mr-4;
}

.multi-select-item >>> .material-design-icon__svg {
  @apply bottom-0;
}

.multi-select-item .multi-select-item__post-icon {
  @apply absolute mr-6 right-0;
}
</style>
