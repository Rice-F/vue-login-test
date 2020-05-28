<template>
  <div id="index">
    <!-- <div class="nav">
      <router-link to="/live">直播</router-link>
      <router-link to="/cart">购物车</router-link>
    </div> -->
    <!-- <button
      v-if="$store.state.user.isLogin"
      @click="logout"
    >注销</button> -->

    <!-- 轮播图 -->
    <cube-slide :data="slider" :inerval="5000">
      <cube-slide-item v-for="(item,idx) in slider" :key="idx">
        <router-link :to="`/detail/${item.id}`">
          <img class="slide" :src="item.img" alt="">
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <!-- 商品列表 -->
    <good-list :data="goods"></good-list>
    <!--  -->
    <!-- <add-operation></add-operation> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import GoodList from '../components/GoodList'
// import AddOperation from '../components/AddOperation'
export default {
  name: '',
  components: {
    GoodList
    // AddOperation
  },
  data () {
    return {

    }
  },
  created () {
    this.getGoodsInfo()
  },
  computed: {
    ...mapState({ slider: state => state.goods.slider }),
    ...mapGetters(['goods'])
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    ...mapActions(['getGoodsInfo'])
  }
}
</script>

<style lang="scss" scoped>
#index {
  width: 100%;
  height: 200px;
  padding: 20px 10px;
  background: #eee;
  .nav {
    display: flex;
    justify-content: space-around;
  }
}
</style>
