import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'

// 引入全局组件
import TypeNav from '@/components/TypeNav'
import {reqCategoryList} from '@/api'

reqCategoryList()
// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
// 注册路由
  router,
// 注册vuex
  store
}).$mount('#app')
