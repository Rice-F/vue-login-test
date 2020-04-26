// 请求 响应 拦截器
import axios from 'axios'
export default function () {
  // 请求拦截
  axios.interceptors.request.use(config => {
    // 获取token
    const token = localStorage.getItem('token')
    if (token) {
      // 添加token请求头
      config.headers.token = token
    }
    return config
  })

  // 响应拦截
  axios.interceptors.response.use(response => {
    // console.log(response)
  })
}
