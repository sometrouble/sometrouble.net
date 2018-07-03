<template lang='pug'>
h1.hello {{url}}
</template>

<script lang='coffee'>
export default 
  data: () ->
    url: 'https://www.hellowork.go.jp/'
</script>

<style lang='scss' scoped>
.hello {
  margin-top: 50vh;
}
</style>
