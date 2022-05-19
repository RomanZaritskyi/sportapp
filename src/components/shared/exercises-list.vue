<template>
  <div class="exercise-list">
    <div class="list-group">
      <div
        class="exercise-list-group list-group-item"
        v-for="(exercise, idx) in exercises"
        :key="idx"
      >
        <span>
          {{ exercise.name }}
        </span>

        <button
          type="button"
          class="btn btn-light"
          @click="$emit('addEx', exercise)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exercises-list',
  emits: ['addEx'],
  props: {
    exercises: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.exercise-list-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
