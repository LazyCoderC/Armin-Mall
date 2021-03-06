import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: {
      show: true
    },
    name: 'search'
  },
  {
    path: '/detail/:skuId',
    component: Detail,
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      show: false
    }
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true
    },
    name: 'addcartsuccess'
  },
  {
    path: '/',
    redirect: '/home'
  }
]