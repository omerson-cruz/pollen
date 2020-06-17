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
      :variant="$options.Typography.Body.MEDIUM"
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
      <component
        :is="type === 'textarea' ? 'textarea' : 'input'"
        :id="id"
        :type="type !== 'textarea' ? type : false"
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
        class="text-input--reset"
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
  Typography,
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
    type: {
      type: String,
      default: 'text',
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
      this.$emit('reset');
    },
  },
};
</script>

<style scoped>
.text-input {
  @apply block relative;
}

.text-input--field-container {
  @apply flex items-center relative;
}

.text-input--prefix {
  @apply select-none;
}

.text-input--field {
  @apply appearance-none border-0 flex-grow;
}

.text-input--field:focus {
  @apply outline-none;
}

.text-input__standard .text-input--field-container {
  @apply border
    border-gray-4
    /* For legacy */
    border-solid;
}
</style>
