import axios from 'axios'
// import { baseUrl } from '../../../vue.config'
import { Message } from 'element-ui'
import router from '../router'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
  // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    const res = response.data
    console.log(res)
    if (parseInt(res.error_code) !== 0) {
      console.log('disini')
      if (parseInt(res.error_code) !== 100) {
        Message({
          message: res.error_desc,
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        Message({
          message: 'Token expired, silahkan login ulang untuk mendapatkan token baru',
          type: 'Info',
          duration: 2 * 1000
        })
        store.dispatch('FedLogOut').then(() => {
          router.push('/login')
        })
      }

      return Promise.reject('error')
    } else {
      console.log('here')
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
