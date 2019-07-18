import Vue from 'vue'
import { getListMataKuliah } from '@/api/getListMataKuliah'
import store from '@/store'

const user = {
  state: {
    editmatakuliah: null
  },

  mutations: {
    GET_LIST_MATA_KULIAH: (state, editmatakuliah) => {
      Vue.set(state, 'editmatakuliah', editmatakuliah)
    }
  },

  actions: {
    GetListMataKuliah({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getListMataKuliah(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_LIST_MATA_KULIAH', data)
          console.log('matakuliah di store', store.getters.editmatakuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteMataKuliah({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteMataKuliah(token, id).then(response => {
          console.log('matakuliah di store', store.getters.editmatakuliah)
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
