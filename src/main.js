import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import Cube from 'cube-ui'
import Interceptor from './interceptor'

Vue.config.productionTip = false

Vue.use(Cube)

const APP = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 初始化拦截器
Interceptor(APP)
