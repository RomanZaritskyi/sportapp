<template>
  <div class="muscul-group">
    <router-link
      class="muscule"
      :to="muscule.path"
      v-for="(muscule, idx) in musculGroup"
      :key="idx"
      @click="musculGroup = []"
    >
      <span>{{ muscule.name }}</span>
    </router-link>
  </div>
</template>

<script>
import musculGroup from '../lookups/musculGroup.lookup';
import cardioExercises from '../lookups/cardioExercises.lookup';

export default {
  name: 'muscul-group',
  data: () => ({
    musculGroup,
    cardioExercises,
  }),
};
</script>

<style lang="scss" scoped>
.muscul-group {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.muscule {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 40%;
  padding: 50px 0 50px 0;
  background-color: blue;
  font-weight: 800;
  color: white;
  cursor: pointer;
}
</style>
