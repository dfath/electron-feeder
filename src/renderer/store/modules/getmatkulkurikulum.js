import Vue from 'vue'
import { getMatkulKurikulum } from '@/api/getMatkulKurikulum'
import { deleteMatkulKurikulum } from '@/api/deleteMatkulKurikulum'
import store from '@/store'

const user = {
  state: {
    matkulkurikulum: null
  },

  mutations: {
    GET_MATKUL_KURIKULUM: (state, matkulkurikulum) => {
      Vue.set(state, 'matkulkurikulum', matkulkurikulum)
    }
  },

  actions: {
    GetMatkulKurikulum({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getMatkulKurikulum(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          console.log('ini data matkul kurikulum', data)
          commit('GET_MATKUL_KURIKULUM', data)
          console.log('matkulkurikulum di store', store.getters.matkulkurikulum)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteMatkulKurikulum({ commit }, data) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        deleteMatkulKurikulum(token, data.id_kurikulum, data.id_matkul).then(response => {
          console.log(response)
          resolve()
        })
      })
    }
  }
}

export default user
