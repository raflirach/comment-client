import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    isReply: ''
  },
  mutations: {
    insertComment (state, payload) {
      state.comments = payload
    },
    changeIsReply (state, payload) {
      state.isReply = payload
    }
  },
  actions: {
    async fetchComment ({ commit }, payload) {
      try {
        const { data } = await axios({
          url: '/comments'
        })
        commit('insertComment', data)
      } catch (err) {
        console.log(err.response.data)
      }
    }
  }
})
