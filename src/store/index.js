import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import { createAlert } from '../helpers/createAlert'
import { createToast } from '../helpers/createToast'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    isReply: '',
    replyName: ''
  },
  mutations: {
    insertComment (state, payload) {
      state.comments = payload
    },
    changeIsReply (state, payload) {
      state.isReply = payload
    },
    changeReplyName (state, payload) {
      state.replyName = payload
    }
  },
  actions: {
    async fetchComment ({ commit }) {
      try {
        const { data } = await axios({
          url: '/comments'
        })
        commit('insertComment', data)
      } catch (err) {
        console.log(err.response.data)
      }
    },
    async addComment (_, payload) {
      const { name, message } = payload
      try {
        await axios({
          method: 'POST',
          url: '/comments',
          data: {
            name,
            message
          }
        })
        this.dispatch('fetchComment')
        createToast('comment successfully')
      } catch (err) {
        const { errors } = err.response.data
        const msg = Object.values(errors)
        createAlert(msg, 'error')
      }
    },
    async addReply (_, payload) {
      const { id, name, message } = payload
      try {
        await axios({
          method: 'PUT',
          url: `/comments/${id}`,
          data: {
            name,
            message
          }
        })
        this.dispatch('fetchComment')
        createToast('reply successfully')
      } catch (err) {
        const { errors } = err.response.data
        const msg = Object.values(errors)
        createAlert(msg, 'error')
      }
    }
  }
})
