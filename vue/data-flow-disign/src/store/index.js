import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // rootState
    login: false, // 是否登录
    userInfo: null, // 用户详情 头像、昵称等
    cartList: [] // 购物车
    // user,
    // cart,
    // products
  },
  mutations: {
  },
  actions: {
  }
})
