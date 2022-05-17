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
        count: '',
      },
      {
        name: 'Середні підтягування',
        count: '',
      },
      {
        name: 'Вузькі підтягування',
        count: '',
      },
      {
        name: 'Зворотні підтягування',
        count: '',
      },
      {
        name: 'Підтягування з вагою',
        count: '',
        weight: '0',
      },
    ],
  }),
};
</script>
<style></style>
