// 当前这个模块统一管理API请求

// 引入请求模块
import requests from './request'
import mockRequests from './mockRequest'


export const reqCategoryList = () => requests({url: 'product/getBaseCategoryList', methods: 'get'})
export const reqBannerList = () => mockRequests({url: '/banner', methods: 'get'})