<template lang='pug'>
  v-container.jumbotron(fill-height)
    v-layout(align-center)
      v-flex
        h1.display-1 sometrouble.net
        span.body-1 In solitude, where we are least alone.
        v-divider.my-2
</template>

<script lang='coffee'>
</script>

<style lang='scss' scoped>
.jumbotron {
  min-width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/images/main_003.jpg");
}
</style>
