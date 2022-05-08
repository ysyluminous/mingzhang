import { createAPI, post } from 'utils/request'

// 登录方法
// export function articlesSearch (params) {
//   console.log(params)
//   return request({
//     url: process.env.VUE_APP_BASE_API + 'api/article/list',
//     method: 'post',
//     data: params
//   })
// }
// 资源列表
export function resourceSearch(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/resource/list', 'post', params)
}

// 资源详情
export function resourceDetail(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/resource/detail', 'post', params)
}

// 资源浏览
export function resourceHit(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/resource/hit', 'post', params)
}
// 资源链接下载
export function resourceLinkDown(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/resource/linkDown', 'post', params)
}

// 资源订阅
export function resourceSubscribe(param) {
  const data = {
    resourceId: param
  }
  return post('/api/resource/subscribe', data)
}

// 软件列表
export function softSearch(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/soft/list', 'post', params)
}

// 软件详情
export function softDetail(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/soft/detail', 'post', params)
}
// 文章列表
export function articlesSearch(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/article/list', 'post', params)
}

// 文章详情
export function articleDetail(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/article/detail', 'post', params)
}

// 图书列表
export function bookSearch(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/book/list', 'post', params)
}
// 图书详情
export function bookDetail(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/book/detail', 'post', params)
}

// 根据图书编码查询章节列表
export function getChaptersByBookId(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/book/getChaptersByBookId', 'post', params)
}
// 根据图书章节编码查询章节内容
export function getChapterContentById(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/book/getChapterContentById', 'post', params)
}
// 文章浏览
export function articleHit(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/article/hit', 'post', params)
}
// 网站首页汇总信息
export function getSiteInfo(params) {
  return createAPI(process.env.VUE_APP_BASE_API + 'api/getSiteInfo', 'post', params)
}
