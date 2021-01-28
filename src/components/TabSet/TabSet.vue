<template>
  <div :id="id" class="tab-set">
    <TabControls
      v-model="activeTab"
      :full-width="fullWidth"
      :tabset-id="id"
      :options="mappedOptions"
    />
    <TabPanel
      v-for="{ value, content } in mappedOptions"
      :key="value"
      :active="value === activeTab"
      :tabset-id="id"
      :value="value"
    >
      <slot :name="value" :activeTab="activeTab">
        <div class="tab-set__simple-content">{{ content }}</div>
      </slot>
    </TabPanel>
  </div>
</template>

<script>
import shortid from 'shortid';
import TabControls from '../TabControls/TabControls.vue';
import TabPanel from '../internal/TabPanel/TabPanel.vue';
import mapOptions from '../../util/mapOptions';

export default {
  components: { TabControls, TabPanel },
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: shortid.generate,
    },
    initialValue: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeTab: this.initialValue,
    };
  },
  computed: {
    mappedOptions() {
      return mapOptions(this.options);
    },
  },
  watch: {
    activeTab(newValue) {
      this.$emit('tab-change', newValue);
    },
  },
  created() {
    if (this.activeTab || !this.mappedOptions.length) return;
    this.activeTab = this.mappedOptions[0].value;
  },
};
</script>

<style scoped>
.tab-set__simple-content {
  @apply p-4;
}
</style>
