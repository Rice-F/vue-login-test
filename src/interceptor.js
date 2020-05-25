// 请求 响应 拦截器
import axios from 'axios'
export default function (vm) {
  // 请求拦截
  axios.interceptors.request.use(config => {
    // 获取token
    const token = localStorage.getItem('token')
    if (token) {
      // 添加token请求头
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  // 响应拦截
//   axios.interceptors.response.use(response => {
//     return response
//   }, err => {
//     if (err.response.status === 401) {
//       console.log(vm)
//       // token过期  登录失败
//       vm.$store.dispatch('logout')
//       vm.$router.push('/login')
//     }
//     return Promise.reject(err)
//   })
}
