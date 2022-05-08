import axios from 'axios'
import qs from 'qs'
import { LoadingBar, Notify } from 'quasar'
import { getItem, getLoginData, localStorageKey } from './localStorage'

const BASE_URL = process.env.VUE_APP_BASE_API
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: BASE_URL,
  // 超时
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(function(config) {
  // if (!getToken()) {
  //   // config.headers[localStorageKey.token] = getQueryString(localStorageKey.token)
  //   config.headers[localStorageKey.member] = encodeURIComponent(localStorageKey.token)
  //   // const auth = post('/auth/current_user')
  //   // console.log(auth)
  //   // return systemError(error)
  // } else {
  //   config.headers[localStorageKey.token] = getToken()
  //   config.headers[localStorageKey.member] = getQueryString(localStorageKey.member)
  // }
  config.headers.memberId = getLoginData([localStorageKey.memberId])
  config.headers.token = getLoginData('token')
  config.headers.memberId = getLoginData('memberId')
  console.log('memberId:' + config.headers.memberId)
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, function(error) {
  return Promise.reject(error)
})
// 响应拦截器
// service.interceptors.response.use(function (response) {
//   return response
// }, function (error) {
//   return Promise.reject(error)
// })
// response 拦截器
service.interceptors.response.use(
  response => {
    // return response.data
    console.log('interceptors.response-------------------' + JSON.stringify(response.headers))
    if (response.headers[localStorageKey.token]) {
      setToken(response.headers[localStorageKey.token])
    }
    const res = response.data
    // return res
    if (res.code === 0) {
      return res
    } else if (res.code === 401 || res.code === 400) {
      router.push('404')
      Notify.create({
        message: res.msg
      })
      return res
    } else if (res.code === 500) {
      // router.push('500')
      Notify.create({
        type: 'warning',
        position: 'top',
        message: res.msg,
        progress: true
      })
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    } else if (res.code === 502) {
      router.push('502')
      Notify.create({
        type: 'warning',
        position: 'top',
        message: res.msg
      })
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    } else {
      Notify.create({
        type: 'warning',
        position: 'top',
        message: res.msg
      })
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }
  },
  error => {
    // 出现网络超时
    // router.push('500')
    console.log(error)
    return Promise.reject(error)
  }
)

LoadingBar.setDefaults({
  color: 'light-blue-4',
  size: '4px',
  position: 'top'
})

export function getQueryString(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export function showNotifyTrue() {
  return { showNotify: true }
}

// post请求
export function post(url, param, config) {
  const cfg = Object.assign(showNotifyTrue(), config)
  console.log(cfg + '----------')
  console.log('11111111111111111111111' + getItem('member'))
  return service({
    url: url,
    method: 'post',
    headers: {
      member: getItem('member')
    },
    ...cfg,
    data: param
  })
}

export const createAPI = (url, method, data) => {
  const config = {}
  if (method === 'get') {
    config.params = data
  } else {
    config.data = data
  }
  return service({
    url,
    method,
    ...config
  })
}

export default service
