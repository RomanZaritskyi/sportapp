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
        count: '',
      },
      {
        name: 'Махи в сторони',
        count: '',
      },
      {
        name: 'Махи вперед',
        count: '',
      },
      {
        name: 'Махи в наклоні',
        count: '',
      },
    ],
  }),
};
</script>
<style></style>
