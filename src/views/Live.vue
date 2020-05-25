<template>
  <div>
    live page
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.get('/api/userinfo')
  }

}
</script>

<style lang="scss" scoped>

</style>
