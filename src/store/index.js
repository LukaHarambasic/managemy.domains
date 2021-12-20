import { createStore } from 'vuex'
import { SET_USER, REMOVE_USER } from './mutation-types'

const store = createStore({
  state () {
    return {
      user: null
    }
  },
  mutations: {
    [SET_USER] (state, payload) {
      state.user = payload.user
    },
    [REMOVE_USER] (state) {
      state.user = null
    }
  },
  actions: {
    async setUser({ commit, state }, payload) {
      commit(SET_USER, payload)
    },
    async removeUser({ commit }) {
      commit(REMOVE_USER)
    }
  }
})

export default store
