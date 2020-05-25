<template>
  <div id="index">
    <div class="nav">
      <router-link to="/live">直播</router-link>
      <router-link to="/cart">购物车</router-link>
    </div>
    <button
      v-if="$store.state.user.isLogin"
      @click="logout"
    >注销</button>
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
