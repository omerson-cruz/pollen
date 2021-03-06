<template>
  <ToggleGroup
    class="checkbox-group"
    :options="options"
    :disabled="disabled"
    :invalid="invalid"
    :label-position="labelPosition"
    :name="name"
    :required="required"
    :size="size"
    :vertical="vertical"
    :value="value"
    :variant="variant"
    type="checkbox"
    @input="$emit('input', $event)"
  />
</template>

<script>
import Form from '../../constants/Form';
import ToggleGroup from '../internal/forms/toggles/ToggleGroup.vue';

/**
 * `import { CheckboxGroup } from '@bambee/pollen';`
 *
 * A component for selecting multiple options from a group of `options`.
 */
export default {
  components: { ToggleGroup },
  props: {
    /** If the input is disabled. */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, this field will display in an error state.
     */
    invalid: {
      type: Boolean,
      default: false,
    },
    /** Whether labels should display to the `left` or `right` of the radio. */
    labelPosition: {
      type: String,
      default: Form.LabelPositions.RIGHT,
      validator: (value) => Object.values(Form.LabelPositions).includes(value),
    },
    /**
     * The shared name between radio inputs. A random name is generated by
     * default.
     */
    name: {
      type: String,
      default: undefined,
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
    /** If the input is disabled. */
    required: {
      type: Boolean,
      default: false,
    },
    /** One of `dense`, or `normal`. */
    size: {
      type: String,
      default: Form.Sizes.NORMAL,
      validator: (value) =>
        [Form.Sizes.DENSE, Form.Sizes.NORMAL].includes(value),
    },
    /** If true, displays radio options vertically. */
    vertical: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the input. Compatible with `v-model`.
     */
    value: {
      type: Array,
      default: () => [],
    },
    /**
     * One of `standard` or `raised`.
     */
    variant: {
      type: String,
      default: Form.Variants.STANDARD,
      validator: (value) =>
        [Form.Variants.STANDARD, Form.Variants.RAISED].includes(value),
    },
  },
};
</script>
