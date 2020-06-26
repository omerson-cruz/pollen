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
    <IconButton
      :icon="passwordIcon"
      :title="isShowingPassword ? 'Hide password' : 'Show password'"
      class="password-input--toggle"
      :size="toggleSize"
      :disabled="disabled"
      variant="secondary"
      flat
      @click="handleToggle"
    />
    <div
      v-if="showScore"
      class="password-input--meter"
      :class="`password-input--meter__${passwordScore.label}`"
      :title="passwordScore.label"
      :aria-label="passwordScore.label"
    >
      <div
        v-for="n in passwordScore.value"
        :key="n"
        class="password-input--meter-indicator"
      />
    </div>
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

export default {
  components: { IconButton, TextInput },
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
    minlength: {
      type: Number,
      default: 8,
    },
    maxlength: {
      type: Number,
      default: 128,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: Form.Sizes.NORMAL,
      validator: (value) => Object.values(Form.Sizes).includes(value),
    },
    validatePassword: {
      type: Boolean,
      default: false,
    },
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
.password-input--toggle.icon-button {
  @apply flex-shrink-0 -mr-1 text-gray-4;
}

.password-input--meter {
  @apply flex flex-col h-5 justify-end ml-2;
}

.password-input--meter-indicator {
  @apply flex-shrink-0 rounded-full;
  height: 3px;
  margin: 1px 0;
  width: 3px;
}

.password-input--meter__bad .password-input--meter-indicator {
  @apply bg-error;
}

.password-input--meter__weak .password-input--meter-indicator {
  @apply bg-warning;
}

.password-input--meter__ok .password-input--meter-indicator {
  @apply bg-success;
}
.password-input--meter__strong .password-input--meter-indicator {
  @apply bg-secondary-shade-1;
}
</style>
