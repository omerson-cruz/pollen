<template>
  <label class="search-field" :class="{ rounded }">
    <BaseIcon class="search-field__icon" icon="search" />
    <span class="search-field__label">{{ placeholder }}</span>
    <input
      :value="value"
      :placeholder="placeholder"
      class="search-field__input"
      type="search"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
import BaseIcon from '../BaseIcon/BaseIcon.vue';

export default {
  components: { BaseIcon },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.search-field {
  @apply block
    rounded-md
    relative
    overflow-hidden
    w-full;
}

.search-field__icon {
  @apply absolute 
    left-0 
    ml-4
    text-gray-400
    text-2xl
    top-1/2
    transform
    -translate-y-1/2;
}

.search-field__label {
  @apply sr-only;
}

.search-field__input {
  @apply bg-gray-200
    block
    pl-12
    pr-4
    py-3
    w-full;
}

.search-field__input::placeholder {
  @apply text-gray-300;
}
</style>
