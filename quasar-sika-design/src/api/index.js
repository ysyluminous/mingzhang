import request from 'utils/request'

/**
 * 获取文章列表
 * @param params
 * @returns {*}
 */
export function getWechatOrCodeTicket(params) {
  return request({
    url: process.env.WEB_API + '/wechat/getWechatOrCodeTicket',
    method: 'get',
    data: params
  })
}
