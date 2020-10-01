import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    changeCounter(state, payLoad) {
      state.counter += payLoad
    }
  },
  getters: {
    computedCounter(state, payLoad) {
      return state.counter * 10
    }
  },
  actions: {
    asyncCount(state, payLoad) {
      setTimeout(() => {
        state.commit('changeCounter', payLoad.currentVal)
      }, payLoad.time);
    }
  }
})
