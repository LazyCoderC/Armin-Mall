import { reqSearchInfo } from "@/api"
// vuex模块
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    let result = await reqSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data)
    }
  }
}
const getters = {
  // 提前提取searchList中的数组
  attrsList(state){
    return state.searchList.attrsList || []
  },
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}