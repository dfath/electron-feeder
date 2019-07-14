import { getListMahasiswa } from '@/api/getListMahasiswa'
import store from '@/store'

const user = {
  state: {
    listMahasiswa: null
  },

  mutations: {
    SET_LIST_MAHASISWA: (state, listMahasiswa) => {
      state.listMahasiswa = listMahasiswa
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
    }
  }
}

export default user
