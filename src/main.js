import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Cube from 'cube-ui'
import Interceptor from './interceptor'
import '../src/assets/style/common.scss'
// import AddOperation from './components/AddOperation.vue'

// 引入 Style 加载基础样式
// import {
//   Style,
//   Dialog,
//   createAPI
// } from 'cube-ui'

// 创建 this.$createAddOperation API
// createAPI(Vue, AddOperation, ['click'], true)

Vue.config.productionTip = false

Vue.use(Cube)

const APP = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 初始化拦截器
Interceptor(APP)
