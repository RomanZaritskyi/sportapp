<template>
  <Nav />
  <MusculGroup />
  <router-view></router-view>
</template>

<script>
import Nav from './components/navigation/nav.vue';
import MusculGroup from './components/navigation/muscul-group.vue';

export default {
  name: 'App',
  components: { Nav, MusculGroup },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
