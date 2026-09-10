<template>
  <v-app>
    <div class="app">
      <AppHeader />

      <ProductList />

      <AppFooter />
    </div>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import ProductList from './components/ProductList.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    ProductList,
    AppFooter
  },

  mounted() {
    console.log('Vue Product Showcase cargado correctamente')
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  min-height: 100%;
}

body {
  font-family:
    Inter,
    Avenir,
    Helvetica,
    Arial,
    sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
}


</style>