<script>
import BaseIcon, { isValidIcon } from '../BaseIcon/BaseIcon.vue';
import getAttributes from '../../util/getAttributes';
import { SMALL, MEDIUM, LARGE } from '../../constants/Sizes';

export const Sizes = Object.freeze({ SMALL, MEDIUM, LARGE });

export default {
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
      validator: isValidIcon,
    },
    /** One of `small`, `medium`, or `large`. */
    size: {
      type: String,
      default: Sizes.MEDIUM,
      validator: (val) => Object.values(Sizes).includes(val),
    },
  },
  render(h, { data, parent, props }) {
    const icon = <BaseIcon icon={props.icon} class="icon-button__icon" />;
    const attrs = { ...getAttributes({ data, parent }) };
    return h(
      'div',
      {
        ...data,
        attrs,
        class: [
          data.class,
          'highlighted-icon',
          `highlighted-icon--${props.size}`,
        ],
      },
      [icon]
    );
  },
};
</script>

<style scoped>
.highlighted-icon {
  @apply bg-primary-tint-5 inline-flex items-center justify-center rounded-md;
  height: 1em;
  width: 1em;
}

.highlighted-icon--small {
  font-size: 2rem;
}

.highlighted-icon--medium {
  font-size: 2.5rem;
}

.highlighted-icon--large {
  font-size: 3rem;
}

.highlighted-icon .base-icon {
  @apply text-primary;
  font-size: 0.5em;
}
</style>
