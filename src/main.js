import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'

// 引入全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'

// 引入mock假数据插件执行代码
import '@/mock/mockServe'

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
// 注册路由
  router,
// 注册vuex
  store
}).$mount('#app')
