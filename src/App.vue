<template>
  <div id="app">
    <router-view/>
    <cube-tab-bar
      v-model="selectedLabel"
      :data='tabs'
      showSlider
      @change="changeHandler"
    ></cube-tab-bar>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      selectedLabel: '',
      tabs: [
        {
          label: 'Home',
          value: '/',
          icon: 'cubeic-home'
        },
        {
          label: 'Cart',
          value: '/cart',
          icon: 'cubeic-mall'
        },
        {
          label: 'Live',
          value: '/live',
          icon: 'cubeic-person'
        }
      ]
    }
  },
  created () {
    // 初始化设置tab选中项
    this.selectedLabel = this.$route.path
  },
  watch: {
    // 监听路由变化，设置tab选中
    $route (route) {
      this.selectedLabel = route.path
    }
  },
  methods: {
    changeHandler (val) {
      this.$router.push(val)
    }
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /deep/ {
    .cube-tab-bar {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
    }
  }
}
</style>
