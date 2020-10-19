<template>
  <div
    :id="id"
    class="tab-panel"
    :class="{ 'tab-panel--active': active }"
    role="tabpanel"
    :aria-hidden="!active"
    :hidden="!active"
  >
    <slot />
  </div>
</template>

<script>
import kebabCase from 'lodash/kebabCase';
import shortid from 'shortid';

export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    tabsetId: {
      type: String,
      default: shortid.generate,
    },
    value: {
      type: String,
      default: shortid.generate,
    },
  },
  computed: {
    id() {
      return `${this.tabsetId}-${kebabCase(this.value).toLowerCase()}-panel`;
    },
  },
};
</script>

<style scoped>
.tab-panel {
  @apply hidden;
}

.tab-panel.tab-panel--active {
  @apply block;
}
</style>
