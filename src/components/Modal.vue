<template>
  <teleport to="#modals">
    <div class="backdrop">
      <section class="window">
        <h4>Some important modal-y stuff going on here</h4>

        <p>This is being rendered with a teleport</p>

        <div>
          <button @click="handleClose">Close Modal</button>
        </div>
      </section>
    </div>
  </teleport>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
export default {
  emits: ['close'],

  setup(_, { emit }) {
    onMounted(() => {
      const el = document.getElementById('modals');
      el.style.pointerEvents = 'initial';
    });

    onUnmounted(() => {
      const el = document.getElementById('modals');
      el.style.pointerEvents = 'none';
    });

    const handleClose = () => {
      emit('close');
    };

    return { handleClose };
  }
};
</script>

<style lang="scss">
#modals {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  pointer-events: none;
}

.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.window {
  padding: 2rem;
  background-color: white;
}
</style>
