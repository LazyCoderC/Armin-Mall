// 引入请求商品详情的api请求
import { reqAddOrUpdateInShoppingCart, reqGoodInfo } from "@/api"

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
  },
  async addOrUpdateInShoppingCart({ commit }, { skuId, skuName }) {
    let result = await reqAddOrUpdateInShoppingCart(skuId, skuName)
    if (result.code == 200) {
      return "OK"
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}