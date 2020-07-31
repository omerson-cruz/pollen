<template>
  <div
    class="alert-bar"
    :class="[`alert-bar--${variant}`, `alert-bar--${size}`]"
    :role="showActions ? 'alertdialog' : 'alert'"
  >
    <div class="alert-bar__content">
      <BaseIcon v-if="icon" :icon="icon" class="alert-bar__icon" />
      <div class="alert-bar__message">
        <slot>{{ message }}</slot>
      </div>
      <div v-if="showActions" class="alert-bar__actions">
        <slot name="actions">
          <IconButton
            v-bind="actionProps"
            class="alert-bar__close"
            title="Close"
            @click="$emit('close')"
          />
        </slot>
      </div>
    </div>
    <slot name="description">
      <div v-if="description" class="alert-bar__description">
        {{ description }}
      </div>
    </slot>
  </div>
</template>

<script>
import Alert from '../../constants/Alert';
import BaseIcon, { Icons, isValidIcon } from '../BaseIcon/BaseIcon.vue';
import Button from '../../constants/Button';
import IconButton from '../IconButton/IconButton.vue';

/**
 * A component for displaying alert messages as a block level element inline
 * with the layout.
 */
export default {
  components: { BaseIcon, IconButton },
  props: {
    /**
     * A longer form message that displays below the main alert message. This
     * can be passed in as a prop or in the `#description` named slot.
     */
    description: {
      type: String,
      default: null,
    },
    /** An icon to prepend to the alert message. */
    icon: {
      type: String,
      default: null,
      validator: (value) => !value || isValidIcon(value),
    },
    /**
     * The primary alert message. This can be passed in as a prop, or as the
     * default slot.
     */
    message: {
      type: String,
      default: null,
    },
    /**
     * If true, displays by default an `x` button that emits a `close` event.
     * This button can be overridden by using the `#actions` named slot.
     */
    showActions: {
      type: Boolean,
      default: true,
    },
    /** One of `dense`, `normal`, and `large`. */
    size: {
      type: String,
      default: Alert.Sizes.NORMAL,
      validator: (value) => Object.values(Alert.Sizes).includes(value),
    },
    /**
     * One of `primary`, `secondary`, `error`, `warning`, `error-inverted`, or
     * `warning-inverted`.
     */
    variant: {
      type: String,
      default: Alert.Variants.PRIMARY,
      validator: (value) => Object.values(Alert.Variants).includes(value),
    },
  },
  computed: {
    actionProps() {
      return {
        size:
          this.size === Alert.Sizes.DENSE
            ? Button.Sizes.SMALL
            : Button.Sizes.MEDIUM,
        icon: Icons.CLOSE,
        variant: Button.Variants.INVERTED,
        title: 'Close',
        flat: true,
      };
    },
  },
};
</script>

<style scoped>
.alert-bar--dense {
  @apply font-body-text font-medium px-4 py-3 rounded;
}

.alert-bar--normal {
  @apply font-body-medium font-medium p-4 rounded-md;
}

.alert-bar--large {
  @apply font-body-medium font-bold p-6 rounded-md;
}

.alert-bar--primary {
  @apply bg-primary text-white;
}

.alert-bar--secondary {
  @apply bg-secondary text-white;
}

.alert-bar--error {
  @apply bg-error text-white;
}

.alert-bar--warning {
  @apply bg-warning text-white;
}

.alert-bar--error-inverted {
  @apply bg-error-light text-error;
}

.alert-bar--warning-inverted {
  @apply bg-warning-light text-warning;
}

.alert-bar__content {
  @apply flex items-center;
}

.alert-bar__icon {
  @apply flex-shrink-0 mr-3;
}

.alert-bar--dense .alert-bar__icon {
  @apply mr-2;
}

.alert-bar__message {
  @apply flex-grow;
}

.alert-bar__actions {
  @apply flex-shrink-0 flex items-center -my-1 self-stretch;
}

.alert-bar__actions .icon-button {
  @apply opacity-50;
}

.alert-bar--error-inverted .icon-button {
  @apply text-error;
}

.alert-bar--warning-inverted .icon-button {
  @apply text-warning;
}

.alert-bar__description {
  @apply font-body-text font-normal mt-2;
}
</style>
