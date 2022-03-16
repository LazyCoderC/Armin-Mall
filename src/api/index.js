// 当前这个模块统一管理API请求

// 引入请求模块
import requests from './request'


export const reqCategoryList = () => requests({url: 'product/getBaseCategoryList', methods: 'get'})