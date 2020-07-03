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
    <component
      :is="inputComponent"
      :id="id"
      ref="input"
      :value="value"
      v-bind="passThroughProps"
      class="text-input--field"
      :aria-invalid="invalid"
      :aria-describedby="error ? `${id}-error` : false"
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
import isBoolean from 'lodash/isBoolean';
import isObject from 'lodash/isObject';
import shortid from 'shortid';
import BaseIcon, { Icons, isValidIcon } from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';
import Form from '../../constants/Form';
import FormField from '../internal/forms/FormField.vue';
import IconButton from '../IconButton/IconButton.vue';

const CleaveInput = () => import('../internal/forms/CleaveInput');

const { Sizes, Variants } = Form;

/**
 * The basic text input, available in four theme variants and three sizes. Any
 * attributes are transparently passed through to the `input` element.
 */
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
    /** If the input is disabled. */
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
    /** A label to display above the field. */
    label: {
      type: String,
      default: null,
    },
    /**
     * A configuration object for masking the input to a specific format.Under
     * the hood this uses `cleave`. See options here:
     * https://github.com/nosir/cleave.js/blob/master/doc/options.md
     *
     * Additionally you can pass a `raw: false` key to emit the masked value
     * rather than the raw value.
     */
    mask: {
      type: Object,
      default: null,
    },
    /** The name of an icon (see BaseIcon) to append to the component. */
    postIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    /** The name of an icon (see BaseIcon) to prepend to the component. */
    preIcon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    /** An inline label string to display within the field. */
    prefix: {
      type: String,
      default: null,
    },
    /**
     * If true, shows a button that when clicked resets the value of the input.
     */
    showReset: {
      type: Boolean,
      default: false,
    },
    /** One of `dense`, `regular`, and `large` . */
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
  computed: {
    inputComponent() {
      return this.mask ? CleaveInput : 'input';
    },
    passThroughProps() {
      if (!isObject(this.mask)) {
        return this.$attrs;
      }
      const { raw, ...options } = this.mask;
      return {
        ...this.$attrs,
        options,
        raw: isBoolean(raw) ? raw : true,
      };
    },
  },
  methods: {
    handleInput(e) {
      const value = this.inputComponent === 'input' ? e.target.value : e;
      this.$emit('input', value);
    },
    handleReset() {
      if (this.inputComponent === 'input') {
        this.$refs.input.value = '';
      } else {
        this.$refs.input.$el.value = '';
      }
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
