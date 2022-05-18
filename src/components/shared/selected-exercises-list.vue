<template>
  <div
    href="#"
    class="list-group-item"
    v-for="(addedEx, idx) in addedExs"
    :key="idx"
  >
    <span>
      {{ addedEx.name }}
    </span>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">{{
        titles.amount
      }}</span>
      <input
        v-model="addedEx.count"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>

    <div class="input-group mb-3" v-if="addedEx.weight">
      <span class="input-group-text" id="inputGroup-sizing-default">{{
        titles.weight
      }}</span>
      <input
        v-model="addedEx.weight"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'selected-exercises-list',
  data: () => ({
    titles: {
      amount: 'К-сть',
      weight: 'Вага',
    },
  }),
  props: {
    addedExs: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped></style>
