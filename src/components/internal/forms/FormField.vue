<template>
  <label :for="id" class="form-field">
    <FieldLabel v-if="label" v-bind="passDownProps">
      {{ label }}
    </FieldLabel>
    <FieldContainer v-bind="passDownProps">
      <slot />
    </FieldContainer>
    <FieldError v-if="error" :field-id="id" :variant="variant">
      {{ error }}
    </FieldError>
  </label>
</template>

<script>
import FieldContainer from './FieldContainer.vue';
import FieldError from './FieldError.vue';
import FieldLabel from './FieldLabel.vue';

export default {
  components: {
    FieldContainer,
    FieldLabel,
    FieldError,
  },
  props: {
    variant: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    error: {
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
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    passDownProps() {
      return {
        variant: this.variant,
        size: this.size,
        invalid: this.invalid || !!this.error,
        disabled: this.disabled,
      };
    },
  },
};
</script>

<style scoped>
.form-field {
  @apply block relative;
}
</style>
