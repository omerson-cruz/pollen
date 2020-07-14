<template>
  <FormField
    :id="id"
    class="select-input"
    :class="[
      `select-input--${variant}`,
      `select-input--${size}`,
      {
        'select-input--invalid': invalid || error,
        'select-input--disabled': disabled,
      },
    ]"
    v-bind="passDownProps"
    :variant="variant"
    :size="size"
    :label="label"
    :focused="hasFocus"
    :error="error"
    :invalid="invalid"
    :disabled="disabled"
  >
    <VSelect
      :options="mappedOptions"
      :value="mappedValue"
      :disabled="disabled"
      :clearable="showReset"
      :multiple="multiple"
      v-bind="$attrs"
      @input="handleInput"
      @search:blue="handleBlur"
      @search:focus="handleFocus"
    />
  </FormField>
</template>

<script>
import VSelect from 'vue-select';
import shortid from 'shortid';
import Form from '../../constants/Form';
import FormField from '../internal/forms/FormField.vue';
import mapOptions from '../../util/mapOptions';
import { Icons } from '../BaseIcon/BaseIcon.vue';
import 'vue-select/dist/vue-select.css';

const { Sizes, Variants } = Form;

export default {
  components: { FormField, VSelect },
  inheritAttrs: false,
  props: {
    /** If the field is disabled. */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Any messages to display as errors on the field. */
    error: {
      type: String,
      default: null,
    },
    /** A unique element ID. By default, one is randomly generated. */
    id: {
      type: String,
      default: shortid.generate,
    },
    /**
     * If true, this field will display in an error state. NOTE: a field is in
     * an error state if `invalid` is `true` and/or `error` is truthy.
     */
    invalid: {
      type: Boolean,
      default: false,
    },
    /**
     * A label to display above the field.
     */
    label: {
      type: String,
      default: null,
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
     * If true, shows a button that when clicked resets the value of the input.
     */
    showReset: {
      type: Boolean,
      default: true,
    },
    /**
     * One of `dense`, `regular`, and `large`.
     */
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    /**
     * The selected value. Compatible with v-model. If `multiple` is true, this
     * must be an array of string values.
     */
    value: {
      type: [String, Array],
      default: '',
    },
    /**
     * One of `standard`, or `raised`.
     */
    variant: {
      type: String,
      default: Variants.STANDARD,
      validator: (value) => Object.values(Variants).includes(value),
    },
  },
  data() {
    return {
      hasFocus: false,
      isDropdownActive: false,
    };
  },
  computed: {
    mappedOptions() {
      return mapOptions(this.options);
    },
    mappedValue() {
      return this.multiple
        ? this.mappedOptions.filter(({ value }) =>
            (this.value || []).includes(value)
          )
        : this.mappedOptions.find(({ value }) => value === this.value);
    },
    passDownProps() {
      return {
        ...this.$attrs,
        postIcon: this.isDropdownActive ? Icons.CARET_UP : Icons.CARET_DOWN,
      };
    },
  },
  methods: {
    handleBlur() {
      this.handleFocus = false;
    },
    handleFocus() {
      this.hasFocus = true;
    },
    handleInput(e) {
      let val = '';
      if (this.multiple) {
        val = e.map(({ value }) => value);
      } else if (e && e.val) {
        val = e.val;
      }
      this.$emit('input', val);
    },
  },
};
</script>

<style scoped>
.select-input >>> .v-select {
  width: 100%;
}

.select-input >>> .vs__dropdown-toggle {
  @apply border-none;
}
</style>
