// 引入请求商品详情的api请求
import { reqGoodInfo } from "@/api"

const state = {
  goodInfo: {}
}
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  }
}
const actions = {
  // 发起获取商品详情的请求
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodInfo(skuId)
    if (result.code == 200) {
      commit("GETGOODINFO", result.data)
    }
  }
}
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}