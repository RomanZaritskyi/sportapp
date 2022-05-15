<template>
  <div class="exercise-list list-group">
    <a
      href="#"
      class="list-group-item list-group-item-action"
      v-for="(exercise, idx) in exercises"
      :key="idx"
      >{{ exercise.name }}</a
    >
  </div>
</template>

<script>
export default {
  name: 'exercises-list',
  props: {
    exercises: {
      type: Array,
      require: true,
    },
  },
};
</script>
<style></style>
