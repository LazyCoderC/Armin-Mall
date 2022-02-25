// 引入axios进行二次封装
import axios from 'axios'

// 1.利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会自动带有该配置
  baseURL:"/api",
  // 超时配置
  timeout: 5000
})

// 请求拦截器：在发出请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
  return config;
})

// 响应拦截器，可以在请求被响应的时候做一些事情
requests.interceptors.response.use((res)=>{
  return res.data
},(error)=>{
  // 响应失败的回调函数
  return Promise.reject(new Error('faile'))
})

// 对外暴露
export default requests;