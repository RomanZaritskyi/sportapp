<template>
  <ExercisesList :exercises="exercises" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';

export default {
  name: 'back-temp',
  components: { ExercisesList },
  data: () => ({
    exercises: [
      {
        name: 'Широкі підтягування',
      },
      {
        name: 'Середні підтягування',
      },
      {
        name: 'Вузькі підтягування',
      },
      {
        name: 'Зворотні підтягування',
      },
      {
        name: 'Підтягування з вагою',
      },
    ],
  }),
};
</script>
<style></style>
