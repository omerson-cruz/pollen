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
      :aria-describedby="error ? '${id}-error' : false"
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

export default {
  components: {
    FormField,
  },
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: shortid.generate,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    value: {
      type: String,
      default: '',
    },
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
