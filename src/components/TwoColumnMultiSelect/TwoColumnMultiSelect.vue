<template>
  <div class="two-column-multi-select">
    <div class="two-column-multi-select__unselected-items">
      <div class="two-column-multi-select__column-header">
        <slot name="unselected-header">{{ unselectedHeader }}</slot>
      </div>
      <ul class="two-column-multi-select__item-list">
        <li v-if="filterable">
          <SearchField v-model.trim="fitler" />
        </li>
        <li v-for="item in unselectedOptions" :key="item.value">
          <MultiSelectItem v-bind="item" :name="name" @input="handleInput" />
        </li>
      </ul>
    </div>
    <div class="two-column-multi-select__selected-items">
      <div class="two-column-multi-select__column-header">
        <slot name="selected-header">{{ selectedHeader }}</slot>
      </div>
      <ul class="two-column-multi-select__item-list">
        <li v-for="item in selectedOptions" :key="item.value">
          <MultiSelectItem
            v-bind="item"
            :name="name"
            checked
            @input="handleInput"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import shortid from 'shortid';
import MultiSelectItem from './MultiSelectItem.vue';
import SearchField from '../SearchField/SearchField.vue';

export default {
  components: { MultiSelectItem, SearchField },
  props: {
    // Options are an array of objects with a label, value, and icon property.
    // All are strings. Icon is optional.
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: shortid.generate,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    selectedHeader: {
      type: String,
      default: 'Selected',
    },
    unselectedHeader: {
      type: String,
      default: 'Options',
    },
  },
  data() {
    return {
      filter: '',
    };
  },
  computed: {
    selectedOptions() {
      // Using `map` rather than `filter` here preserves the order of `value`.
      return this.value.map((value) =>
        this.options.find((item) => item.value === value)
      );
    },
    unselectedOptions() {
      return this.options.filter(
        (item) =>
          !this.value.includes(item.value) &&
          (!this.filterable ||
            (this.filterable &&
              item.label
                .toLowerCase()
                .includes(this.filter.toLowerCase().trim())))
      );
    },
  },
  methods: {
    handleInput(e) {
      const { checked, value } = e.target;
      const newValue = checked
        ? [...this.value, value]
        : this.value.filter((item) => item !== value);
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>
.two-column-multi-select {
  @apply border
    border-gray-5
    flex
    /* For legacy */
    border-solid;
}

.two-column-multi-select__unselected-items,
.two-column-multi-select__selected-items {
  @apply flex flex-col flex-grow w-1/2;
}

.two-column-multi-select__unselected-items {
  @apply border-r
    border-gray-5
    /* For legacy */
    border-b-0
    border-l-0
    border-t-0
    border-solid;
}

.two-column-multi-select__item-list {
  @apply flex-grow
    /* For legacy */
    list-none
    m-0
    p-0;
}

.two-column-multi-select__column-header {
  @apply border-b
    border-gray-5
    font-body-small
    font-semibold
    px-6
    py-3
    /* For legacy */
    border-l-0
    border-r-0
    border-t-0
    border-solid;
}

.two-column-multi-select .search-field {
  @apply rounded-none;
}
</style>
