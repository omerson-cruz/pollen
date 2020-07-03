<template>
  <FormField
    :id="id"
    :variant="variant"
    :size="size"
    :label="label"
    :focused="hasFocus"
    :error="error"
    :invalid="invalid"
    :disabled="disabled"
    class="textarea-input"
    :class="[
      `textarea-input__${variant}`,
      `textarea-input__${size}`,
      {
        'textarea-input__invalid': invalid || error,
        'textarea-input__disabled': disabled,
      },
    ]"
  >
    <textarea
      :id="id"
      ref="input"
      :value="value"
      v-bind="$attrs"
      class="textarea-input--field"
      :aria-invalid="invalid"
      :aria-describedby="error ? `${id}-error` : false"
      :disabled="disabled"
      @input="handleInput"
      @focus="hasFocus = true"
      @blur="hasFocus = false"
    />
  </FormField>
</template>

<script>
import shortid from 'shortid';
import Form from '../../constants/Form';
import FormField from '../internal/forms/FormField.vue';

const { Sizes, Variants } = Form;

/**
 * A styled `textarea` component for entering multiple lines of text. Attributes
 * not explicitly enumerated as prop (like `required`) will be transparently
 * passed through to the `textarea` element.
 */
export default {
  components: {
    FormField,
  },
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
    /**
     * One of `dense`, `regular`, and `large`.
     */
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    /** Value of the input. Compatible with `v-model`. */
    value: {
      type: String,
      default: '',
    },
    /**
     * One of `standard`, `raised`, `ghost`, and `ghost-inverted`.
     * `ghost-inverted` is only to be used on dark backgrounds.
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
    };
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style scoped>
.textarea-input--field {
  @apply appearance-none bg-transparent border-0 flex-grow font-sans;
  font-size: 1em;
}

.textarea-input--field::placeholder {
  @apply text-gray-4;
}

.textarea-input--field:focus {
  @apply outline-none;
}

.textarea-input__ghost-inverted .textarea-input--field {
  @apply text-white;
}

.textarea-input__dense .textarea-input--field {
  @apply p-3;
}

.textarea-input__normal .textarea-input--field {
  @apply p-4;
}

.textarea-input__large .textarea-input--field {
  @apply p-4;
}

.textarea-input__raised.textarea-input__invalid .textarea-input--field,
.textarea-input__raised.textarea-input__invalid
  .textarea-input--field::placeholder,
.textarea-input__ghost.textarea-input__invalid .textarea-input--field,
.textarea-input__ghost.textarea-input__invalid
  .textarea-input--field::placeholder {
  @apply text-error;
}

.textarea-input__ghost-inverted.textarea-input__invalid .textarea-input--field,
.textarea-input__ghost-inverted.textarea-input__invalid
  .textarea-input--field::placeholder {
  @apply text-error-light-ghost;
}
</style>
