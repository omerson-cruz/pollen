<template>
  <FormField
    :id="id"
    :variant="variant"
    :size="size"
    :label="label"
    :error="error"
    :invalid="invalid"
    :disabled="disabled"
    :focused="hasFocus"
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
      @focus="hasFocus = true"
      @blur="hasFocus = false"
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
      :disabled="disabled"
      @click.prevent="handleReset"
    />
    <slot />
  </FormField>
</template>

<script>
import shortid from 'shortid';
import BaseIcon, { Icons, isValidIcon } from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';
import Form from '../../constants/Form';
import FormField from '../internal/forms/FormField.vue';
import IconButton from '../IconButton/IconButton.vue';

const { Sizes, Variants } = Form;

export default {
  Button,
  Icons,
  components: {
    BaseIcon,
    FormField,
    IconButton,
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
    postIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    preIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    prefix: {
      type: String,
      default: null,
    },
    showReset: {
      type: Boolean,
      default: false,
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
    handleReset() {
      this.$refs.input.value = '';
      this.$emit('input', '');
    },
  },
};
</script>

<style scoped>
.text-input--prefix {
  @apply select-none text-gray-3;
}

.text-input--field {
  @apply appearance-none bg-transparent border-0 flex-grow w-full;
  font-size: 1em;
}

.text-input--field::placeholder {
  @apply text-gray-4;
}

.text-input--field:focus {
  @apply outline-none;
}

.text-input--icon,
.text-input--reset.icon-button {
  @apply text-gray-4;
}

.text-input--reset {
  @apply -mr-2;
}

.text-input__ghost-inverted .text-input--field,
.text-input__ghost-inverted .text-input--icon,
.text-input__ghost-inverted .text-input--prefix {
  @apply text-white;
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

.text-input__dense >>> .field-container {
  @apply h-8 px-3;
}

.text-input__normal >>> .field-container {
  @apply h-10 px-4;
}

.text-input__large >>> .field-container {
  @apply h-14 px-4;
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
  @apply text-error-light-ghost;
}
</style>
