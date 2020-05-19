<template>
  <h3>Suspense 😮</h3>

  <p>
    Suspense is an exciting feature that was also added with Vue 3. Instead of literring your app
    with v-if's in order to handle loading data or tasks like lazy-loading you can
    <code>Suspend</code> from your components
  </p>

  <p>
    It essentially allows rendering of fallback content while waiting for an asynchronous task to
    complete. You can use this feature from anywhere in your component tree. When Vue determines
    that a setup function has suspended it will search for the nearest
    <code>Suspense</code> component and render it's fallback content if there is any.
  </p>

  <Suspense>
    <template #default>
      <SuspenderVue :key="key" />

      <button @click="suspend">Suspend component</button>
    </template>

    <template #fallback>
      <p>Component is currently: Suspended</p>

      <button @click="unsuspend">Unsuspend component</button>

      <SpinnerVue />
    </template>
  </Suspense>
</template>

<script>
import SuspenderVue, { SuspenderSubject } from '../components/Suspender.vue';
import SpinnerVue from '../components/Spinner.vue';
import { ref } from 'vue';

export default {
  components: {
    SuspenderVue,
    SpinnerVue
  },

  setup() {
    const key = ref(0);

    const suspend = () => {
      key.value += 1;
    };

    const unsuspend = () => {
      SuspenderSubject.next();
    };

    return { key, suspend, unsuspend };
  }
};
</script>

<style lang="scss" scoped></style>
