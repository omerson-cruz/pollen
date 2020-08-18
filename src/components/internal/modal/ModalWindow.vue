<template functional>
  <div class="modal-window" :class="`modal-window--${props.size}`">
    <slot />
  </div>
</template>

<script>
import Modal from '../../../constants/Modal';

export default {
  props: {
    size: {
      type: String,
      default: Modal.Sizes.REGULAR,
      validator: (value) => Object.values(Modal.Sizes).includes(value),
    },
  },
};
</script>

<style scoped>
.modal-window {
  @apply bg-white 
    box-border 
    overflow-auto 
    p-6 
    top-0 
    w-full;
  max-height: 100vh;
  max-width: 100vw;
}

.modal-window >>> .modal-header {
  @apply mb-6 -mt-6 -mx-6;
}

.modal-window >>> .modal-subfooter {
  @apply -mb-6 mt-6 -mx-6;
}

.modal-window--tiny {
  @apply p-8 rounded-md;
  width: 19.5rem;
}

.modal-window--tiny >>> .modal-header {
  @apply mb-8 -mt-8 -mx-8 px-8;
}

.modal-window--tiny >>> .modal-subfooter {
  @apply -mb-8 mt-8 -mx-8 px-8;
}

.modal-window >>> .modal-header.modal-header--transparent {
  @apply mb-0;
}

@media screen and (min-width: 481px) {
  .modal-window--small {
    @apply rounded-md;
    max-width: 25rem;
  }

  .modal-window--regular {
    @apply rounded-md;
    max-width: 30rem;
  }

  .modal-window--small,
  .modal-window--regular,
  .modal-window--medium,
  .modal-window--large,
  .modal-window--giant {
    @apply p-8;
  }

  .modal-window--small >>> .modal-header,
  .modal-window--regular >>> .modal-header,
  .modal-window--medium >>> .modal-header,
  .modal-window--large >>> .modal-header,
  .modal-window--giant >>> .modal-header {
    @apply mb-8 -mt-8 -mx-8 px-8;
  }

  .modal-window--small >>> .modal-subfooter,
  .modal-window--regular >>> .modal-subfooter,
  .modal-window--medium >>> .modal-subfooter,
  .modal-window--large >>> .modal-subfooter,
  .modal-window--giant >>> .modal-subfooter {
    @apply -mb-8 mt-8 -mx-8 px-8;
  }
}

@media screen and (min-width: 641px) {
  .modal-window--medium {
    @apply rounded-md;
    max-width: 37.5rem;
  }
}

@media screen and (min-width: 769px) {
  .modal-window--large,
  .modal-window--giant {
    @apply p-12;
  }

  .modal-window--large >>> .modal-header,
  .modal-window--giant >>> .modal-header {
    @apply mb-12 -mt-12 -mx-12  px-12;
  }

  .modal-window--large >>> .modal-subfooter,
  .modal-window--giant >>> .modal-subfooter {
    @apply -mb-12 mt-12 -mx-12  px-12;
  }

  .modal-window--large {
    @apply max-w-3xl rounded-md;
  }
}

@media screen and (min-width: 1025px) {
  .modal-window--giant {
    @apply max-w-5xl rounded-md;
  }
}

@media screen and (min-height: 48rem) {
  .modal-window {
    max-height: calc(100vh - 13rem);
    top: 6.5rem;
  }
}
</style>
