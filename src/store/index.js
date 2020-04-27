import Vue from 'vue'
import Vuex from 'vuex'
import us from '../services/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: !!localStorage.getItem('token')
  },
  mutations: {
    setLoginState (state, b) {
      state.isLogin = b
    }
  },
  actions: {
    login ({ commit }, user) {
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
        .catch(err => {
          console.log(err)
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
