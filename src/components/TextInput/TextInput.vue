<template>
  <label
    :for="id"
    class="text-input"
    :class="[
      `text-input__${variant}`,
      `text-input__${size}`,
      {
        'text-input__invalid': invalid || error,
        'text-input__disabled': disabled,
      },
    ]"
  >
    <TypeBody
      v-if="label"
      :variant="
        size === $options.Sizes.LARGE
          ? $options.Typography.Body.MEDIUM
          : $options.Typography.Body.TEXT
      "
      class="text-input--label"
      >{{ label }}</TypeBody
    >
    <div class="text-input--field-container">
      <BaseIcon
        v-if="preIcon"
        :icon="preIcon"
        class="text-input--icon text-input--icon__pre"
      />
      <span v-if="prefix" class="text-input--prefix">{{ prefix }}</span>
      <input
        :id="id"
        ref="input"
        :value="value"
        v-bind="$attrs"
        class="text-input--field"
        :aria-invalid="invalid"
        :aria-describedby="error ? '${id}-error' : false"
        :disabled="disabled"
        @input="handleInput"
      />
      <BaseIcon
        v-if="postIcon"
        :icon="postIcon"
        class="text-input--icon text-input--icon__post"
      />
      <IconButton
        v-if="showReset"
        :variant="$options.Button.Variants.SECONDARY"
        :size="$options.Button.Sizes.SMALL"
        class="text-input--reset text-input--icon"
        type="button"
        :icon="$options.Icons.CLOSE"
        title="Clear"
        flat
        @click.prevent="handleReset"
      />
    </div>
    <div
      v-if="error"
      :id="`${id}-error`"
      class="text-input--error"
      role="alert"
    >
      {{ error }}
    </div>
  </label>
</template>

<script>
import shortid from 'shortid';
import BaseIcon, { Icons, isValidIcon } from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';
import Form from '../../constants/Form';
import IconButton from '../IconButton/IconButton.vue';
import TypeBody from '../TypeBody/TypeBody.vue';
import Typography from '../../constants/Typography';

const { Sizes, Variants } = Form;

export default {
  Button,
  Icons,
  Sizes,
  Typography,
  Variants,
  components: { BaseIcon, IconButton, TypeBody },
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: Variants.STANDARD,
      validator: (value) => Object.values(Variants).includes(value),
    },
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value) => Object.values(Sizes).includes(value),
    },
    label: {
      type: String,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    preIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    postIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    prefix: {
      type: String,
      default: null,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showReset: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: shortid.generate,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    handleReset() {
      this.$refs.input.value = '';
      this.$emit('input', '');
    },
  },
};
</script>

<style scoped>
/* stylelint-disable no-descending-specificity */
.text-input {
  @apply block relative;
}

.text-input--field-container {
  @apply box-border flex items-center relative;
}

.text-input--prefix {
  @apply select-none;
}

.text-input--field {
  @apply appearance-none bg-transparent border-0 flex-grow;
  font-size: 1em;
}

.text-input--field::placeholder {
  @apply text-gray-4;
}

.text-input--field:focus {
  @apply outline-none;
}

.text-input__standard .text-input--field-container {
  @apply bg-white
    border
    border-gray-4
    /* For legacy */
    border-solid;
}

.text-input__standard.text-input__disabled .text-input--field-container,
.text-input__raised.text-input__disabled .text-input--field-container {
  @apply bg-gray-7;
}

.text-input__standard.text-input__invalid .text-input--field-container {
  @apply border-error;
}

.text-input__raised .text-input--field-container {
  @apply bg-white
    shadow-2;
}

.text-input__raised.text-input__invalid .text-input--field,
.text-input__raised.text-input__invalid .text-input--field::placeholder,
.text-input__ghost.text-input__invalid .text-input--field,
.text-input__ghost.text-input__invalid .text-input--field::placeholder {
  @apply text-error;
}

.text-input__ghost-inverted.text-input__invalid .text-input--field,
.text-input__ghost-inverted.text-input__invalid
  .text-input--field::placeholder {
  color: #ff6c89; /* This is a one-off color.*/
}

.text-input__dense .text-input--label {
  @apply mb-1;
}

.text-input__dense .text-input--field-container {
  @apply font-body-text rounded h-8 px-3;
}

.text-input__normal .text-input--label,
.text-input__large .text-input--label {
  @apply mb-2;
}

.text-input__normal .text-input--field-container {
  @apply font-body-text rounded-md h-10 px-4;
}

.text-input__large .text-input--field-container {
  @apply font-body-medium rounded-md h-14 px-4;
}

.text-input__ghost .text-input--field-container {
  background: rgba(0, 0, 0, 0.04);
}

.text-input__ghost.text-input__disabled .text-input--field-container {
  background: rgba(0, 0, 0, 0.02);
}

.text-input__ghost-inverted .text-input--field-container {
  background: rgba(255, 255, 255, 0.2);
}

.text-input__ghost-inverted .text-input--label,
.text-input__ghost-inverted .text-input--field,
.text-input__ghost-inverted .text-input--icon,
.text-input__ghost-inverted .text-input--prefix {
  @apply text-white;
}

.text-input__ghost-inverted.text-input__disabled .text-input--field-container {
  background: rgba(255, 255, 255, 0.1);
}

.text-input__dense .text-input--icon {
  @apply text-14;
}

.text-input__normal .text-input--icon {
  @apply text-16;
}

.text-input__large .text-input--icon {
  @apply text-19;
}

.text-input__dense .text-input--icon__pre {
  @apply mr-3;
}

.text-input__normal .text-input--icon__pre {
  @apply mr-4;
}

.text-input__large .text-input--icon__pre {
  @apply mr-4;
}

.text-input__dense .text-input--prefix {
  @apply text-14;
  margin-right: 0.375rem;
}

.text-input__normal .text-input--prefix {
  @apply text-16;
  margin-right: 0.375rem;
}

.text-input__large .text-input--prefix {
  @apply text-18;
  @apply mr-2;
}

.text-input__dense .text-input--reset {
  @apply ml-2;
}

.text-input__normal .text-input--reset,
.text-input__large .text-input--reset {
  @apply ml-3;
}
</style>
