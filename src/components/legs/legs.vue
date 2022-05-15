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
      { name: 'Присідання' },
      { name: 'Присідання з вагою' },
      { name: 'Присідання з прижками' },
      { name: 'Випади' },
    ],
  }),
};
</script>
<style></style>
