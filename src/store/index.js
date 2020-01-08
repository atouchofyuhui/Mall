import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    cartPush(state, product) {
      let oldProduct = state.cartList.find(item => item.iid === product.iid)
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        product.count = 1
        product.check = true
        state.cartList.push(product)
      }
    }
  }
})

export default store
