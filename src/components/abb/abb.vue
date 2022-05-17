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
        count: '',
      },
      {
        name: 'Підйом колін на турніку',
        count: '',
      },
      {
        name: 'Підйом нін на брусах',
        count: '',
      },
      {
        name: 'Підйом колін на брусах',
        count: '',
      },
    ],
  }),
};
</script>
<style></style>
