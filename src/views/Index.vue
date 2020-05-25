<template>
  <div id="index">
    <div class="nav">
      <router-link to="/live">直播</router-link>
      <router-link to="/cart">购物车</router-link>
      <button v-if="$store.state.isLogin" @click="logout">注销</button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
#index {
  padding: 20px 10px;
  .nav {
    display: flex;
    justify-content: space-around;
  }
}
</style>
