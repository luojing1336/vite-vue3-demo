import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时20000ms
})

// 前置拦截器(发起请求之前的拦截)
axios.interceptors.request.use(
  /**
   * 根据你的项目实际情况来对 config 做处理
   * 这里对 config 不做任何处理，直接返回
   */
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器(获取响应之后的拦截)
axios.interceptors.response.use(
  /**
   * 根据你的项目实际情况来对 response 和 error 做处理
   * 这里对 response 和 error 不做任何处理，直接返回
   */
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.message)
    } else {
      ElMessage.error(`${error}`)
    }
  }
)

export default axios
