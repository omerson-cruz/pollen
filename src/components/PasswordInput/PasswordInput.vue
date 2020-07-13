<template>
  <TextInput
    :id="id"
    class="password-input"
    :type="isShowingPassword ? 'type' : 'password'"
    :disabled="disabled"
    :value="value"
    :size="size"
    :maxlength="maxlength"
    :minlength="minlength"
    :error="localError"
    name="password"
    v-bind="$attrs"
    @input="$emit('input', $event)"
  >
    <template #post-field>
      <IconButton
        :icon="passwordIcon"
        :title="isShowingPassword ? 'Hide password' : 'Show password'"
        class="password-input__toggle"
        :size="toggleSize"
        :disabled="disabled"
        variant="secondary"
        flat
        @click="handleToggle"
      />
      <div
        v-if="showScore"
        class="password-input__meter"
        :class="`password-input__meter--${passwordScore.label}`"
        :title="passwordScore.label"
        :aria-label="passwordScore.label"
      >
        <div
          v-for="n in passwordScore.value"
          :key="n"
          class="password-input__meter-indicator"
        />
      </div>
    </template>
  </TextInput>
</template>

<script>
import shortid from 'shortid';
import IconButton from '../IconButton/IconButton.vue';
import TextInput from '../TextInput/TextInput.vue';
import scorePassword from '../../util/scorePassword';
import { Icons } from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';
import Form from '../../constants/Form';

/**
 * `import { PasswordInput } from '@bambeehr/pollen';`
 *
 * A password input that extends the `TextInput` component. In addition to the
 * props explicitly defined here, any `TextInput` props will also work (like
 * `variant`), and any other attributes will be passed through transparently to
 * the `input` element.
 *
 * Users can toggle password visibility. Optionally, a password strength
 * indicator can be displayed, and certain validation rules can be enforced.
 */
export default {
  components: { IconButton, TextInput },
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
    /** The maximum number of characters allowed. */
    maxlength: {
      type: Number,
      default: 128,
    },
    /** The minimum number of characters allowed. */
    minlength: {
      type: Number,
      default: 8,
    },
    /** If true, shows the password strength indicator. */
    showScore: {
      type: Boolean,
      default: false,
    },
    /** One of `dense`, `regular`, and `large` . */
    size: {
      type: String,
      default: Form.Sizes.NORMAL,
      validator: (value) => Object.values(Form.Sizes).includes(value),
    },
    /**
     * If true, the following validation rules will be enforced:
     *
     * * Password must be at least as long as `props.minlength`.
     * * Password must be no longer than `props.maxlength`.
     * * Password may not have three of the same character in a row.
     *
     * Any violations of these rules will concatenat an appropriate error
     * message with `props.error` to be displayed.
     */
    validatePassword: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the input. Compatible with `v-model`.
     */
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isShowingPassword: false,
    };
  },
  computed: {
    inputType() {
      return this.isShowingPassword ? 'text' : 'password';
    },
    localError() {
      return [this.error, ...this.validationErrors]
        .filter((item) => item)
        .join(' ');
    },
    passwordIcon() {
      return this.isShowingPassword ? Icons.EYE_OPEN : Icons.EYE_CLOSED;
    },
    passwordScore() {
      const rawScore = scorePassword(this.value);
      if (rawScore >= 80 && !this.validationErrors.length) {
        return {
          label: 'strong',
          value: 4,
        };
      }
      if (rawScore >= 60 && !this.validationErrors.length) {
        return {
          label: 'ok',
          value: 3,
        };
      }
      if (rawScore >= 30 && !this.validationErrors.length) {
        return {
          label: 'weak',
          value: 2,
        };
      }
      return {
        label: 'bad',
        value: 1,
      };
    },
    toggleSize() {
      return this.size === Form.Sizes.LARGE
        ? Button.Sizes.MEDIUM
        : Button.Sizes.SMALL;
    },
    validationErrors() {
      if (!this.validatePassword || !this.value) return [];
      const errors = [];

      if (this.value.length < this.minlength) {
        errors.push(
          `The password must be at least ${this.minlength} characters long.`
        );
      }
      if (this.value.length > this.maxlength) {
        errors.push(
          `The password must be fewer than ${this.maxlength} characters.`
        );
      }
      if (/(.)\1{2,}/.test(this.value)) {
        errors.push(
          'The password may not contain sequences of three or more repeated characters.'
        );
      }

      return errors;
    },
  },
  methods: {
    handleToggle(e) {
      this.isShowingPassword = !this.isShowingPassword;
      e.target.blur();
      setTimeout(() => {
        document.getElementById(this.id).focus();
      }, 0);
    },
  },
};
</script>

<style scoped>
.password-input .password-input__toggle.icon-button,
.password-input .password-input__toggle.icon-button:hover,
.password-input .password-input__toggle.icon-button:active {
  @apply flex-shrink-0 -mr-1 text-gray-4;
}

.password-input__meter {
  @apply flex flex-col h-5 justify-end ml-2;
}

.password-input__meter-indicator {
  @apply flex-shrink-0 rounded-full;
  height: 3px;
  margin: 1px 0;
  width: 3px;
}

.password-input__meter--bad .password-input__meter-indicator {
  @apply bg-error;
}

.password-input__meter--weak .password-input__meter-indicator {
  @apply bg-warning;
}

.password-input__meter--ok .password-input__meter-indicator {
  @apply bg-success;
}

.password-input__meter--strong .password-input__meter-indicator {
  @apply bg-secondary-shade-1;
}
</style>
