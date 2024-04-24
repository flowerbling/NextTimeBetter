<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <IndexPage />
</template>

<script>
import IndexPage from './pages/IndexPage.vue'
import 'vant/lib/index.css';

export default {
  name: 'App',
  components: {
    IndexPage
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
  margin-top: 60px;
}
</style>
