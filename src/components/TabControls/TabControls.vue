<template>
  <div class="tab-controls">
    <ul
      class="tab-controls__tabs"
      :class="{ 'tab-controls--full-width': fullWidth }"
      role="tablist"
    >
      <li
        v-for="item in mappedOptions"
        :key="item.value"
        :ref="item.value"
        class="tab-controls__tab"
        :class="{ 'tab-controls__tab--active': item.selected }"
      >
        <a
          :id="item.id"
          role="tab"
          :href="`#${item.target}`"
          :aria-selected="item.selected"
          :aria-controls="item.target"
          class="tab-controls__link"
          @click.prevent="$emit('input', item.value)"
        >
          <component :is="item.label" v-if="typeof item.label === 'object'" />
          <template v-else>{{ item.label }}</template>
        </a>
      </li>
    </ul>
    <div
      class="tab-controls__indicator"
      role="presentation"
      :style="indicatorStyle"
    />
  </div>
</template>

<script>
import kebabCase from 'lodash/kebabCase';
import shortid from 'shortid';
import mapOptions from '../../util/mapOptions';

export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    tabsetId: {
      type: String,
      default: shortid.generate,
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      indicatorStyle: {},
    };
  },
  computed: {
    mappedOptions() {
      return mapOptions(this.options).map((item) => ({
        ...item,
        target: `${this.tabsetId}-${kebabCase(item.value).toLowerCase()}-panel`,
        id: `${this.tabsetId}-${kebabCase(item.value).toLowerCase()}-tab`,
        selected: item.value === this.value,
      }));
    },
  },
  watch: {
    value() {
      this.positionIndicator();
    },
  },
  mounted() {
    this.positionIndicator();
  },
  methods: {
    positionIndicator() {
      const activeLabel = this.$refs[this.value]
        ? this.$refs[this.value][0]
        : null;
      let indicatorStyle = {};
      if (activeLabel) {
        indicatorStyle = {
          left: `${activeLabel.offsetLeft}px`,
          top: `${activeLabel.offsetTop + activeLabel.offsetHeight}px`,
          width: `${activeLabel.offsetWidth}px`,
        };
      }
      this.indicatorStyle = indicatorStyle;
    },
  },
};
</script>

<style scoped>
.tab-controls {
  @apply relative;
}

.tab-controls__tabs {
  @apply border-b 
    border-l-0 
    border-r-0 
    border-t-0 
    border-gray-5 
    border-solid 
    flex 
    flex-wrap 
    list-none 
    m-0
    p-0;
}

.tab-controls--full-width .tab-controls__tab {
  @apply flex-grow text-center;
}

.tab-controls__link {
  @apply block
    border-b 
    border-l-0 
    border-r-0 
    border-t-0
    border-transparent
    border-solid 
    font-body-medium 
    font-medium 
    no-underline 
    px-4 
    py-2 
    text-gray-0;
}

.tab-controls__indicator {
  @apply absolute 
  bg-primary 
    duration-light
    ease-out
    h-px;
  transition-property: left, width;
}
</style>
