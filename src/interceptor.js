// 请求 响应 拦截器
import axios from 'axios'
export default function () {
  // 设置请求拦截器
  axios.interceptors.rquest.use(config => {
    // 获取token
    const token = localStorage.getItem('token')
    if (token) {
      // 添加token请求头
      config.headers.token = token
    }
    return config
  })
}
