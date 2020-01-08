import
request
from './axios'

// 请求详情数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 请求推荐数据
export function getRecommend(iid) {
  return request({
    url: '/recommend',
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.lowNowPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
    this.columns = columns
    this.services = services
  }
}
