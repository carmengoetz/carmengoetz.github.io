<template>
  <navigation></navigation>
  <router-view/>

</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#navbarResponsive {
  padding: 30px;
}

#navbarResponsive a {
  font-weight: bold;
  color: #2c3e50;
}

#navbarResponsive a.router-link-exact-active {
  color: #42b983;
} */
</style>
