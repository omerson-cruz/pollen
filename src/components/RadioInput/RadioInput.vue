<template>
  <ToggleInput
    :id="id"
    class="radio-input"
    type="radio"
    :checked="checked"
    :disabled="disabled"
    :invalid="invalid"
    :label="label"
    :label-position="labelPosition"
    :name="name"
    :size="size"
    :value="value"
    :variant="variant"
    @click="$emit('input', value)"
  >
    <slot />
  </ToggleInput>
</template>

<script>
import Form from '../../constants/Form';
import ToggleInput from '../internal/forms/toggles/ToggleInput.vue';

/**
 * `import { RadioInput } from @bambee/pollen';`
 *
 * A single radio input. Generally, however, radio inputs should appear in sets
 * grouped by matching `name` attributess so that users can select one option
 * from a set. As such you should generally be using the `RadioGroup` component.
 * If only need a single on/off value, then `CheckboxInput` or `SwitchInput`
 * would be the appropriate choice.
 */
export default {
  components: { ToggleInput },
  inheritAttrs: false,
  props: {
    /** If the input is checked. */
    checked: {
      type: Boolean,
      default: false,
    },
    /** If the input is disabled. */
    disabled: {
      type: Boolean,
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
      required: true,
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
    /** Value to be emitted on an `input` event. */
    value: {
      type: String,
      required: true,
    },
    /** One of `standard`, or `raised`. */
    variant: {
      type: String,
      default: Form.Variants.STANDARD,
      validator: (value) =>
        [Form.Variants.STANDARD, Form.Variants.RAISED].includes(value),
    },
  },
};
</script>
