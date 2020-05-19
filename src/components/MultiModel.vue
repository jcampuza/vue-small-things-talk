<template>
  <card>
    <h4>Survey</h4>

    <label>Name</label>
    <input
      :value="name"
      @input="$emit('update:name', $event.target.value)"
      placeholder="Enter Name"
    />

    <label>Age</label>
    <input
      type="number"
      placeholder="Enter Age"
      min="0"
      max="100"
      :value="age"
      @input="$emit('update:age', $event.target.value)"
    />
  </card>
</template>

<script>
export default {
  props: {
    name: String,
    age: String
  }
};
</script>
