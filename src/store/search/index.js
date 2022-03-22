import { reqSearchInfo } from "@/api"
// vuex模块
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList){
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    let result = await reqSearchInfo(params)
    if(result.code == 200) {
      commit('GETSEARCHLIST', result.data)
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