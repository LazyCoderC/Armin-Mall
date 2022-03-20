// 引入mock插件
import Mock from 'mockjs'

// 引入假数据
import banner from './banner.json'
import floor from './floor.json'

// 使用mock创建假数据
// mock数据：第一个参数请求地址，第二个参数：请求返回的数据
Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })