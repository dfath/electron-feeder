import { getListMahasiswa } from '@/api/getListMahasiswa'
import store from '@/store'

const user = {
  state: {
    listMahasiswa: null,
    totalMahasiswa: null
  },

  mutations: {
    SET_LIST_MAHASISWA: (state, listMahasiswa) => {
      state.listMahasiswa = listMahasiswa
    },
    SET_TOTAL_MAHASISWA: (state, totalMahasiswa) => {
      state.totalMahasiswa = totalMahasiswa
    }
  },

  actions: {
    GetListMahasiswa({ commit, state }, listQuery) {
      console.log(store.getters.username)
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
        getListMahasiswa(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_MAHASISWA', data)
          console.log(store.getters.listMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalMahasiswa({ commit }, listQuery) {
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
        getListMahasiswa(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_MAHASISWA', data)
          console.log(store.getters.totalMahasiswa)
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
