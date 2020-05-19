<template>
  <teleport to="#notifications" :disabled="inline">
    <div class="notification">
      <slot></slot>
    </div>
  </teleport>
</template>

<script>
import { onUnmounted } from 'vue';

export default {
  name: 'NotificationVue',

  props: {
    inline: Boolean
  },

  emits: ['close'],

  setup(_, { emit }) {
    const id = setTimeout(() => {
      emit('close');
    }, 5000);

    onUnmounted(() => {
      clearTimeout(id);
    });
  }
};
</script>

<style lang="scss">
.notification {
  padding: 1rem;
  background-color: #ffcd16;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.22);
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 400ms ease-out;
}
</style>
