import { getListMataKuliah } from '@/api/getListMataKuliah'
import { deleteMataKuliah } from '@/api/deleteMataKuliah'

import store from '@/store'

const user = {
  state: {
    listMataKuliah: null,
    listQueryMataKuliah: null,
    totalMataKuliah: null
  },

  mutations: {
    SET_LIST_QUERY_MATAKULIAH: (state, listQueryMataKuliah) => {
      state.listQueryMataKuliah = listQueryMataKuliah
    },
    SET_LIST_MATAKULIAH: (state, listMataKuliah) => {
      state.listMataKuliah = listMataKuliah
    },
    SET_TOTAL_MATAKULIAH: (state, totalMataKuliah) => {
      state.totalMataKuliah = totalMataKuliah
    }

  },

  actions: {
    GetListMataKuliah({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_MATAKULIAH', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListMataKuliah(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_MATAKULIAH', data)
          console.log(store.getters.listMataKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalMataKuliah({ commit }, listQuery) {
      const token = store.getters.token
      const limit = listQuery.limit
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListMataKuliah(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_MATAKULIAH', data)
          console.log(store.getters.totalMataKuliah)
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
          console.log('matakuliah di store', store.getters.editmatakuliahmahasiswa)
          console.log('sekarang mau didelete')
          resolve()
        })
      })
    }
  }
}

export default user
