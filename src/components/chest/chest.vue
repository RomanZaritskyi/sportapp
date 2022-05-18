<template>
  <ExercisesList :exercises="exercises" @addEx="addEx" />
  <SelectedExercisesList :addedExs="addedExs" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';
import SelectedExercisesList from '../shared/selected-exercises-list.vue';
import chestExercises from '../lookups/chestExercises.lookup.js';

export default {
  components: { ExercisesList, SelectedExercisesList },
  name: 'chest-temp',
  data: () => ({
    exercises: chestExercises,
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
