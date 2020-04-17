<template>
  <div id="index">
    <div class="nav">
      <router-link to="/live">直播</router-link>
      <router-link to="/cart">购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#index {
  padding: 20px 10px;
  .nav {
    display: flex;
    justify-content: center;
  }
}
</style>
