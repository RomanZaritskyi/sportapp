<template>
  <ExercisesList :exercises="exercises" @addEx="addEx" />
  <SelectedExercisesList :addedExs="addedExs" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';
import backExercises from '../lookups/backExercises.lookup';
import SelectedExercisesList from '../shared/selected-exercises-list.vue';

export default {
  name: 'back-temp',
  components: { ExercisesList, SelectedExercisesList },
  data: () => ({
    exercises: backExercises,
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
