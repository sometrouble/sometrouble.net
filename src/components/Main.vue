<template lang='pug'>
div
  CommonHeader
  router-view
  CommonFooter
</template>

<script lang='coffee'>
import CommonHeader from '@/components/Header'
import CommonFooter from '@/components/Footer'

export default
  components: {
    CommonHeader, 
    CommonFooter
  }
</script>

<style lang='scss' scoped>
</style>
