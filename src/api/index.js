// 当前这个模块统一管理API请求

// 引入请求模块
import requests from './request'
import mockRequests from './mockRequest'


export const reqCategoryList = () => requests({ url: 'product/getBaseCategoryList', method: 'get' })
// 获取BannerList数据
export const reqBannerList = () => mockRequests({ url: '/banner', method: 'get' })
// 获取FloorList数据
export const reqFloorList = () => mockRequests({ url: '/floor', method: 'get' })

// 获取searchList数据
export const reqSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })