<script>
import BaseIcon, { Icons } from '../BaseIcon/BaseIcon.vue';

export default {
  functional: true,
  props: {
    /** If true, display a checkmark. If false, displays a circle. */
    complete: {
      type: Boolean,
      default: false,
    },
    /** If true, icon is greyed out. If false, icon is in primary color.*/
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  render(h, { data, props }) {
    return (
      <BaseIcon
        icon={props.complete ? Icons.CHECK_CIRCLE : Icons.CIRCLE}
        class={`progress-icon progress-icon--${
          props.complete ? 'complete' : 'incomplete'
        }${props.disabled ? ' progress-icon--disabled' : ''}`}
        {...data}
      />
    );
  },
};
</script>

<style scoped>
.progress-icon {
  @apply text-primary;
}

.progress-icon.progress-icon--disabled {
  @apply text-gray-5;
}
</style>
