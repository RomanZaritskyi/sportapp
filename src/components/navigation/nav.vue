<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar__logo navbar-brand" to="/">Єбаш</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(part, idx) in bodyParts" :key="idx">
            <router-link class="nav-link" :to="part.path">{{
              part.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'nav-bar',
  data: () => ({
    bodyParts: [
      {
        name: 'Ноги',
        path: '/legs',
      },
      {
        name: 'Спина',
        path: '/back',
      },
      {
        name: 'Груди',
        path: '/chest',
      },
      {
        name: 'Плечі',
        path: '/shoulders',
      },
      {
        name: "М'язи кору",
        path: '/abb',
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
// .navbar {
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   width: 100%;
// }
.navbar__logo {
  font-weight: 800;
}
</style>
