<template>
  <ExercisesList :exercises="exercises" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';
export default {
  components: { ExercisesList },
  name: 'chest-temp',
  data: () => ({
    exercises: [
      {
        name: 'Віджимання від підлоги',
        count: '0',
      },
      {
        name: 'Бруси',
        count: '0',
      },
      {
        name: 'Віджимання ∠30°',
        count: '0',
      },
      {
        name: 'Віджимання ∠120°',
        count: '0',
      },
    ],
  }),
  updated() {
    console.log(this.exercises);
  },
};
</script>
<style></style>
