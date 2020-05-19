<template>
  <h3>V-Model improvements 📊</h3>

  <p>
    A neat improvement is the ability to setup more than one <code>v-model</code> per component.
  </p>

  <p>
    This could be useful for features like reusable forms, or inputs/components that track multiple
    pieces of state
  </p>

  <p>
    The example component below has more than one <code>v-model</code> attached to it, yet works
    perfectly fine. This can lead to much more succinct code for components that have multiple
    inputs/outputs
  </p>

  <MultiModelVue v-model:name="name" v-model:age="age"></MultiModelVue>

  <ul>
    <li>Name model: {{ name }}</li>
    <li>Age model: {{ age }}</li>
  </ul>
</template>

<script>
import MultiModelVue from '../components/MultiModel.vue';
import { ref } from 'vue';

export default {
  components: {
    MultiModelVue
  },
  setup() {
    const name = ref('');
    const age = ref('');

    return { name, age };
  }
};
</script>

<style lang="scss" scoped></style>
