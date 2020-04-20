import Vue from 'vue'
import Vuex from 'vuex'
import us from '../services/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
  },
  actions: {
    login ({ commit }, user) {
      console.log(user)
      return us.login(user)
        .then(res => {
          const { code, token } = res.data
          if (code) {
            // 登录成功 保存登录状态 保存token
            commit('setLoginState', true)
            localStorage.setItem('token', token)
          }
          return code
        })
    },
    logout ({ commit }) {
      // 清除token 重置登录状态
      localStorage.removeItem('token')
      commit('setLoginState', false)
    }
  },
  modules: {
  }
})
