<template>
  <h3>Performance 🏎</h3>

  <p>
    One of the major benefits you'll get just for using Vue 3 is greatly improved performance out of
    the box
  </p>

  <p>Here are a couple improvements we will be able to take advantage of</p>

  <ul>
    <li>Improved Virtual DOM</li>
    <li>Efficient component initialization</li>
    <li>Up to 2x improved component update performance</li>
  </ul>

  <p>
    Another major benefit is that much of the core library for Vue is now tree shakeable. If you
    aren't aware of what this is, it means you will generate smaller bundles because the features
    you don't use will no longer be included. Examples of this are v-model and the transition
    component/api. If you don't use these, they won't be included
  </p>

  <p>Even with the tree-shaking changes, the full bundle for Vue 3 is still smaller than Vue 2</p>
</template>

<script>
export default {
  name: 'Performance'
};
</script>
