import { reqCategoryList } from '@/api'
// vuex模块
const state = {
  categoryList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
}
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data.slice(0,16))
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