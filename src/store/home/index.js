import { reqCategoryList, reqBannerList } from '@/api'
// vuex模块
const state = {
  categoryList: [],
  getBannerList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, getBannerList) {
    state.getBannerList = getBannerList
  }
}
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data.slice(0, 16))
    }
  },
  // 获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqBannerList()
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}