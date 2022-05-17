<template>
  <div class="exercise-list list-group">
    <a
      href="#"
      class="list-group-item list-group-item-action"
      v-for="(exercise, idx) in exercises"
      :key="idx"
    >
      <span>
        {{ exercise.name }}
      </span>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >К-сть</span
        >
        <input
          v-model="exercise.count"
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Вага</span
        >
        <input
          v-model="exercise.weight"
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'exercises-list',
  props: {
    exercises: {
      type: Array,
      require: true,
    },
  },
};
</script>
<style></style>
