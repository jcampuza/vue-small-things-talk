<template>
  <h3>Reactivity 💨</h3>

  <p>
    Vue 3 brings with it updated reactivity! There may have been a few cases before where you may
    have expected something to update and reflect correctly in the DOM or trigger a watcher but it
    didn't.
  </p>

  <p>
    This occurred because Vue 2 could not detect the addition or removal of properties from an
    object/array. Now using ES6 Proxies, Vue 3 is both faster overall, and supports these operations
  </p>

  <p>
    Here's an example where I'm directly setting id's on an object every time you click this button.
    Notice it updates correctly in the dom. This would not work in Vue 2 without using
    <code>Vue.set()</code> or <code>Vue.delete()</code>
  </p>

  <p>
    We can also use some of the nifty built-in data structures that ES6 introduced like
    <code>Map()</code> and <code>Set()</code> and they will work like a charm as well. These data
    types are extremely useful but most frontend frameworks cannot handle detecting when they have
    changed.
  </p>

  <button @click="addProperty">Add a prop</button>
  <button @click="removeProperty">Delete a prop</button>

  <grid>
    <pre col="1/4"><code>{{ obj }}</code></pre>
    <pre col="1/4"><code>{{ arr }}</code></pre>

    <pre col="1/4"><code>{{ map }}</code></pre>
    <pre col="1/4"><code>{{ set }}</code></pre>
  </grid>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Reactivity',
  setup() {
    const id = ref(32);
    const obj = ref({});
    const arr = ref([]);
    const map = ref(new Map());
    const set = ref(new Set());

    const addProperty = () => {
      obj.value[String.fromCharCode(id.value)] = id.value;

      arr.value[id.value - 32] = String.fromCharCode(id.value);

      map.value.set(id.value, String.fromCharCode(id.value));

      set.value.add(String.fromCharCode(id.value));

      id.value += 1;
    };

    const removeProperty = () => {
      if (id.value === 32) {
        return;
      }

      id.value -= 1;

      delete obj.value[String.fromCharCode(id.value)];
      delete arr.value[id.value - 32];
      map.value.delete(id.value);
      set.value.delete(String.fromCharCode(id.value));
    };

    return { addProperty, removeProperty, obj, arr, map, set };
  }
};
</script>

<style lang="scss">
.strike {
  text-decoration: line-through;
}
</style>
