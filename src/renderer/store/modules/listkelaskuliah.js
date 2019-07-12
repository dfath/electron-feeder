import { getListKelasKuliah } from '@/api/getListKelasKuliah'
import store from '@/store'

const user = {
  state: {
    listKelasKuliah: null
  },

  mutations: {
    SET_LIST_KELAS_KULIAH: (state, listKelasKuliah) => {
      state.listKelasKuliah = listKelasKuliah
    }
  },

  actions: {
    GetListKelasKuliah({ commit, state }, listQuery) {
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
        getListKelasKuliah(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_KELAS_KULIAH', data)
          console.log(store.getters.listKelasKuliah)
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
