<template lang='pug'>
  div#app
    router-view
</template>

<script lang='coffee'>
export default
  name: 'App'
</script>

<style lang='scss'>
body {
  background-image: url(https://i.gyazo.com/23e4de1e8ff9efdb69db72448386b622.png); 
  background-position: center center; 
  background-repeat: no-repeat;
  background-attachment: fixed; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
