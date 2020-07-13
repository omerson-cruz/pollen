<template>
  <TextInput
    :id="id"
    v-model="filter"
    class="select-input"
    v-bind="passDownProps"
    @input="handleInput"
    @focus="isDropdownActive = true"
  >
    <template v-if="multiple" #pre-field>selected options go here</template>
    <template #post-field>
      <transition>
        <ul>
          <li v-for="item in mappedOptions" :key="item.value">
            <button type="button" @click="handleSelect(value)">
              {{ label }}
            </button>
          </li>
        </ul>
      </transition>
    </template>
  </TextInput>
</template>

<script>
import TextInput from '../TextInput/TextInput.vue';
import mapOptions from '../../util/mapOptions';
import { Icons } from '../BaseIcon/BaseIcon.vue';

export default {
  components: { TextInput },
  inheritAttrs: false,
  props: {
    /** An intial filter value to set. */
    initialFilter: {
      type: String,
      default: '',
    },
    /** If true, allows for selecting multiple options. */
    multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * The available options for this component. This is an array of values.
     * Each individual value can be either a string, or an object with a `label`
     * and `value` key. The `label` is what the user sees. The `value` is what
     * will be emitted as an `input` event.
     */
    options: {
      type: Array,
      default: () => [],
    },
    /**
     * The selected value. Compatible with v-model. If `multiple` is true, this
     * must be an array of string values.
     */
    value: {
      type: [String, Array],
      default: '',
    },
  },
  data() {
    return {
      filter: this.initialFilter,
      isDropdownActive: false,
    };
  },
  computed: {
    mappedOptions() {
      const filterString = this.filter.toLowerCase().trim();
      const isFilterStringInLabel = (item) =>
        item.label.toLowerCase().includes(filterString);
      return mapOptions(this.options).filter(isFilterStringInLabel);
    },
    passDownProps() {
      return {
        ...this.$attrs,
        postIcon: this.isDropdownActive ? Icons.CARET_UP : Icons.CARET_DOWN,
      };
    },
  },
};
</script>
