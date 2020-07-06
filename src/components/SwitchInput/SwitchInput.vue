<template>
  <ToggleInput
    :id="id"
    class="switch-input"
    type="checkbox"
    :checked="value === trueValue"
    :disabled="disabled"
    :invalid="invalid"
    :label="label"
    :label-position="labelPosition"
    :name="name || id"
    :size="size"
    variant="switch"
    @click="$emit('input', $event.target.checked ? trueValue : falseValue)"
  >
    <slot />
  </ToggleInput>
</template>

<script>
import Form from '../../constants/Form';
import ToggleInput from '../internal/forms/toggles/ToggleInput.vue';

/**
 * `import { SwitchInput } from '@bambeehr/pollen';`
 *
 * A single checkbox input that presents as an on/off switch. This is compatible
 * with v-model, including using the `true-value` and `false-value` props.
 * https://vuejs.org/v2/guide/forms.html#Checkbox-1
 */
export default {
  components: { ToggleInput },
  props: {
    /** If the input is disabled. */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Either a string or boolean. The value to be emitted on an input event
     * when the input is unchecked. Compatible with `v-model` and how normal
     * checkbox inputs work within Vue.
     */
    falseValue: {
      type: [String, Boolean],
      default: false,
    },
    /** A unique element ID. By default, one is randomly generated. */
    id: {
      type: String,
      default: null,
    },
    /** If true, this field will display in an error state. */
    invalid: {
      type: Boolean,
      default: false,
    },
    /**
     * A label to display next to the field. Alternately, the default `slot`
     * can be used to display more complex labels.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * Where the label should be positioned relative to the toggle, one of
     * `left` or `right`.
     */
    labelPosition: {
      type: String,
      default: Form.LabelPositions.RIGHT,
      validator: (value) => Object.values(Form.LabelPositions).includes(value),
    },
    /**
     * A name attribute. Falls back to `id` if none is supplied. If neither is
     * supplied, one is randomly generated.
     */
    name: {
      type: String,
      default: null,
    },
    /** One of `dense`, or `regular`. */
    size: {
      type: String,
      default: Form.Sizes.NORMAL,
      validator: (value) =>
        [Form.Sizes.DENSE, Form.Sizes.NORMAL].includes(value),
    },
    /**
     * Either a string or boolean. The value to be emitted on an input event
     * when the input is checked. Compatible with `v-model` and how normal
     * checkbox inputs work within Vue.
     */
    trueValue: {
      type: [String, Boolean],
      default: true,
    },
    /**
     * Either a string or boolean. Compatible with v-model. Checkboxes are
     * considered checked when `value === trueValue`.
     */
    value: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>
