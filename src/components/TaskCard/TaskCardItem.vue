<template>
  <div class="task-card-item">
    <div v-if="progressIcon" class="task-card-item__status">
      <ProgressIcon v-bind="progressIcon" />
    </div>
    <div class="task-card-item__content">
      <div class="task-card-item__title">
        {{ title }}
      </div>
      <div v-if="description" class="task-card-item__description">
        {{ description }}
        <template v-if="attribution">
          By
          <UserAvatar
            v-bind="attribution"
            :size="$options.Sizes.TINY"
            class="task-card-item__avatar"
          />
        </template>
      </div>
    </div>
    <div v-if="actions" class="task-card-item__actions">
      <BaseButton
        v-for="{ handler, ...rest } in actions"
        :key="rest.label"
        v-bind="rest"
        class="task-card-item__action"
        :size="$options.Button.Sizes.SMALL"
        @click="() => (handler ? handler() : () => {})"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '../BaseButton/BaseButton.vue';
import Button from '../../constants/Button';
import ProgressIcon from '../ProgressIcon/ProgressIcon.vue';
import UserAvatar, { Sizes } from '../UserAvatar/UserAvatar.vue';

export const TaskStatuses = Object.freeze({
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete',
  DISABLED: 'disabled',
});

export default {
  Button,
  Sizes,
  components: { BaseButton, ProgressIcon, UserAvatar },
  props: {
    actions: {
      type: Array,
      default: null,
    },
    attribution: {
      type: Object,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: null,
      validator: (value) =>
        !value || Object.values(TaskStatuses).includes(value),
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    progressIcon() {
      return this.status
        ? {
            complete: this.status === TaskStatuses.COMPLETE,
            disabled: this.status === TaskStatuses.DISABLED,
          }
        : null;
    },
  },
};
</script>

<style scoped>
.task-card-item {
  @apply flex flex-col mx-6 py-3;
}

.task-card-item__status {
  @apply flex-shrink-0 mr-4;
}

.task-card-item__content {
  @apply flex-grow mb-4;
}

.task-card-item__title {
  @apply font-body-text font-medium text-gray-0;
}

.task-card-item__description {
  @apply font-body-small text-gray-3;
}

.task-card-item__avatar {
  @apply ml-2 align-middle;
}

.task-card-item__action {
  @apply ml-2;
}

.task-card-item__action.base-button--flat.base-button--secondary[disabled] {
  @apply opacity-100 px-0 text-secondary;
}

.task-card-item__action.base-button--flat.base-button--tertiary[disabled] {
  @apply opacity-100 px-0 text-warning;
}

.task-card-item__action.base-button--flat[disabled] >>> .base-button__inner {
  @apply px-0;
}

.task-card-item__actions {
  @apply flex flex-shrink-0 items-center justify-end;
}

@media screen and (min-width: 768px) {
  .task-card-item {
    @apply flex-row;
  }

  .task-card-item__content {
    @apply mb-0;
  }
}
</style>
