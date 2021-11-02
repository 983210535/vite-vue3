import { createStore } from 'vuex'

const store = createStore({
  state: {
    num: 555,
  },
  getters: {
    double(state) {
      return state.num * 2
    },
    third(state) {
      return state.num * 3
    }
  },
  mutations: {
    add (state) {
      state.num++
    },
    add2333(state, payload) {
      state.num += payload
    }
  },
  actions: {
    aFunc(context, payload) {
      setTimeout(() => {
        context.commit('add2333', payload)
      }, 1000);
    }
  }

  // state() {
  //   return {
  //     num: 666
  //   }
  // }
})

export default store;