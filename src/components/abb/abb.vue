<template>
  <ExercisesList :exercises="exercises" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';

export default {
  components: { ExercisesList },
  name: 'abb-temp',
  data: () => ({
    exercises: [
      {
        name: 'Підйом нін на турніку',
      },
      {
        name: 'Підйом колін на турніку',
      },
      {
        name: 'Підйом нін на брусах',
      },
      {
        name: 'Підйом колін на брусах',
      },
    ],
  }),
};
</script>
<style></style>
