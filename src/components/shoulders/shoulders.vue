<template>
  <ExercisesList :exercises="exercises" @addEx="addEx" />
  <SelectedExercisesList :addedExs="addedExs" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';
import SelectedExercisesList from '../shared/selected-exercises-list.vue';
import shouldersExercise from '../lookups/shouldersExercise.lookup';

export default {
  name: 'shoulders-temp',
  components: { ExercisesList, SelectedExercisesList },
  data: () => ({
    exercises: shouldersExercise,
    addedExs: [],
  }),
  methods: {
    addEx(exs) {
      this.addedExs.push(exs);
    },
  },
};
</script>
<style></style>
