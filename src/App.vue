<template>
  <div id="app">
    <TheHeader/>
    <TheBody/>
  </div>
</template>

<script>
import TheHeader from './views/TheHeader'
import TheBody from './views/TheBody'
export default {
  name: 'App',
  components:{
    TheHeader,TheBody
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
