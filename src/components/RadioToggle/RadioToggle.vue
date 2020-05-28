<template>
  <div
    class="radio-toggle"
    :class="{ focused: isFocused }"
    @click="isFocused = false"
  >
    <label
      v-for="(item, i) in mappedOptions"
      :key="item.value"
      :ref="item.value"
      :for="`${name}-${i}`"
      :class="{ active: value === item.value }"
      class="radio-toggle-option"
    >
      <input
        :id="`${name}-${i}`"
        :value="item.value"
        :name="name"
        type="radio"
        class="radio-toggle-input"
        @blur="isFocused = false"
        @focus="isFocused = true"
        @input="handleInput"
      />
      <span class="radio-toggle-label">{{ item.label }}</span>
    </label>
    <div
      v-if="refsMounted && value"
      class="radio-toggle-indicator"
      :style="bgStyle"
    />
  </div>
</template>

<script>
import shortid from 'shortid';

export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: shortid.generate,
    },
  },

  data() {
    return {
      isFocused: false,
      refsMounted: false,
    };
  },

  computed: {
    mappedOptions() {
      return this.options.map((item) => {
        if (typeof item === 'string') {
          return {
            label: item,
            value: item,
          };
        }
        const { label, value } = item;

        return {
          label,
          value,
        };
      });
    },

    bgStyle() {
      const activeLabel = this.$refs[this.value]
        ? this.$refs[this.value][0]
        : null;
      if (!activeLabel) {
        return {};
      }

      return {
        left: `${activeLabel.offsetLeft}px`,
        height: `${activeLabel.offsetHeight}px`,
        width: `${activeLabel.offsetWidth}px`,
      };
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.refsMounted = true;
    });
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style scoped>
.radio-toggle {
  @apply bg-gray-100
    border 
    border-grey-200
    border-solid
    inline-flex
    p-1 
    relative
    rounded-full;
}

.radio-toggle-option {
  @apply cursor-pointer
    duration-100
    ease-linear
    font-bold 
    px-5 
    py-1
    relative 
    rounded-full
    select-none
    text-center 
    text-2xs 
    tracking-wide 
    transition-all
    uppercase 
    z-10;
}

.radio-toggle-option.active {
  @apply text-white;
}

.radio-toggle.focused {
  @apply shadow-outline;
}

.radio-toggle-input {
  @apply sr-only;
}

.radio-toggle-indicator {
  @apply absolute 
    bg-purple 
    duration-100
    ease-in
    rounded-full 
    transition-all
    z-0;
}
</style>
