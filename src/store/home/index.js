import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'
// vuex模块
const state = {
  categoryList: [],
  getBannerList: [],
  getFloorList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, getBannerList) {
    state.getBannerList = getBannerList
  },
  GETFLOORLIST(state, getFloorList) {
    state.getFloorList = getFloorList
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
  },
  async getFloorList({ commit }) {
    let result = await reqFloorList()
    if (result.code == 200) {
      commit('GETFLOORLIST', result.data)
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