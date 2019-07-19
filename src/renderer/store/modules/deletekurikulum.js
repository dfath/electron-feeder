import Vue from 'vue'
import { getListKurikulum } from '@/api/getListKurikulum'
import store from '@/store'

const user = {
  state: {
    editkurikulum: null
  },

  mutations: {
    GET_LIST_KURIKULUM: (state, editkurikulum) => {
      Vue.set(state, 'editkurikulum', editkurikulum)
    }
  },

  actions: {
    GetListKurikulum({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getListKurikulum(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_LIST_KURIKULUM', data)
          console.log('kurikulum di store', store.getters.editkurikulum)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteKurikulum({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteKurikulum(token, id).then(response => {
          console.log('kurikulum di store', store.getters.editkurikulum)
          console.log('sekarang mau didelete')
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
  }
}

export default user
