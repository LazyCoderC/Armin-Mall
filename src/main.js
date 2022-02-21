import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局组件
import TypeNav from '@/pages/Home/TypeNav'

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
