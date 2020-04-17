import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('../views/Index.vue')
// 登录
const Login = () => import('../views/Login.vue')
// 直播
const Live = () => import('../views/Live.vue')
// 购物车
const Cart = () => import('../views/Cart.vue')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // 直播
  {
    path: '/live',
    name: 'Live',
    component: Live
  },
  // 购物车
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      auth: true
    },
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要登录的页面
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      // 未获取到token 跳转登录页 并拼接路由参数，使登录成功后重定向至登录前访问的页面
      next({
        path: '/login',
        query: { redirect: to.path }
      })
    }
  } else {
    // 不需要登录
    next()
  }
})

export default router
