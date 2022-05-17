<template>
  <ExercisesList :exercises="exercises" />
</template>

<script>
import ExercisesList from '../shared/exercises-list.vue';

export default {
  name: 'legs-temp',
  components: { ExercisesList },
  data: () => ({
    exercises: [
      {
        name: 'Присідання',
        count: '0',
      },
      {
        name: 'Присідання з вагою',
        count: '',
        weight: '0',
      },
      {
        name: 'Присідання з прижками',
        count: '0',
      },
      {
        name: 'Випади',
        count: '0',
      },
    ],
  }),
};
</script>
<style></style>
