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
      },
      {
        name: 'Бруси',
      },
      {
        name: 'Віджимання ∠30°',
      },
      {
        name: 'Віджимання ∠120°',
      },
    ],
  }),
};
</script>
<style></style>
