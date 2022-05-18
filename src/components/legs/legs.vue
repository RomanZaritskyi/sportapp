<template>
  <ExercisesList :exercises="exercises" @addEx="addEx" />
  <SelectedExerciseList :addedExs="addedExs" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';
import SelectedExerciseList from '../shared/selected-exercises-list.vue';
import legsExercise from '../lookups/legsExercises.lookup.js';

export default {
  name: 'legs-temp',
  components: { ExercisesList, SelectedExerciseList },
  data: () => ({
    exercises: legsExercise,
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
