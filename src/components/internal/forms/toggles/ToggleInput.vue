<template>
  <label
    class="toggle-input"
    :class="[
      `toggle-input--${size}`,
      `toggle-input--${variant}`,
      `toggle-input--label-${labelPosition}`,
      {
        'toggle-input--disabled': disabled,
      },
    ]"
    :for="id"
  >
    <input
      :id="id"
      :type="type"
      class="toggle-input__input"
      :name="name || id"
      :checked="checked"
      :disabled="disabled"
      v-bind="$attrs"
      v-on="$listeners"
      @focus="hasFocus = true"
      @blur="hasFocus = false"
    />
    <component
      :is="toggleComponent"
      :checked="checked"
      :disabled="disabled"
      :focused="hasFocus"
      :invalid="invalid"
      :size="size"
      :variant="variant"
    />
    <div class="toggle-input__label">
      <slot>
        <span v-html="label" />
      </slot>
    </div>
  </label>
</template>

<script>
import shortid from 'shortid';
import CheckboxIndicator from './CheckboxIndicator.vue';
import Form from '../../../../constants/Form';
import RadioIndicator from './RadioIndicator.vue';
import SwitchIndicator from './SwitchIndicator.vue';

const ToggleTypes = Object.freeze({
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
});

const SWITCH = 'switch';

export default {
  components: { CheckboxIndicator },
  inheritAttrs: false,
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
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
    labelPosition: {
      type: String,
      default: Form.LabelPositions.RIGHT,
      validator: (value) => Object.values(Form.LabelPositions).includes(value),
    },
    name: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: Form.Sizes.NORMAL,
      validator: (value) => Object.values(Form.Sizes).includes(value),
    },
    type: {
      type: String,
      default: ToggleTypes.CHECKBOX,
      validator: (value) => Object.values(ToggleTypes).includes(value),
    },
    variant: {
      type: String,
      default: Form.Variants.STANDARD,
      validator: (value) =>
        [Form.Variants.STANDARD, Form.Variants.RAISED, SWITCH].includes(value),
    },
  },
  data() {
    return {
      hasFocus: false,
    };
  },
  computed: {
    toggleComponent() {
      if (this.type === ToggleTypes.RADIO) {
        return RadioIndicator;
      }
      return this.variant === SWITCH ? SwitchIndicator : CheckboxIndicator;
    },
  },
};
</script>

<style scoped>
.toggle-input {
  @apply cursor-pointer
    font-medium
    items-start
    inline-flex;
}

.toggle-input__input {
  @apply sr-only;
}

.toggle-input__label {
  @apply flex flex-col justify-center self-stretch;
}

.toggle-input--disabled {
  @apply cursor-not-allowed opacity-50;
}

.toggle-input--label-left {
  @apply flex-row-reverse;
}

.toggle-input--dense {
  @apply font-body-caption;
}

.toggle-input--normal {
  @apply font-body-text;
}

/* .toggle-input--large {
  @apply font-body-medium;
} */

.toggle-input--label-left.toggle-input--dense .toggle-input__label {
  @apply mr-2;
}

.toggle-input--label-left.toggle-input--normal .toggle-input__label {
  @apply mr-3;
}

/* .toggle-input--label-left.toggle-input--large .toggle-input__label {
  @apply mr-4;
} */

.toggle-input--label-right.toggle-input--dense .toggle-input__label {
  @apply ml-2;
}

.toggle-input--label-right.toggle-input--normal .toggle-input__label {
  @apply ml-3;
}

/* .toggle-input--label-right.toggle-input--large .toggle-input__label {
  @apply ml-4;
} */
</style>
