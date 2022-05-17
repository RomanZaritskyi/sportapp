<template>
  <ExercisesList :exercises="exercises" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';

export default {
  name: 'shoulders-temp',
  components: { ExercisesList },
  data: () => ({
    exercises: [
      {
        name: 'Віджиманя ∠90°',
      },
      {
        name: 'Махи в сторони',
      },
      {
        name: 'Махи вперед',
      },
      {
        name: 'Махи в наклоні',
      },
    ],
  }),
};
</script>
<style></style>
