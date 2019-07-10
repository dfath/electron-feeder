import { getListMataKuliah } from '@/api/getListMataKuliah'
import store from '@/store'

const user = {
  state: {
    listMataKuliah: null
  },

  mutations: {
    SET_LIST_MATAKULIAH: (state, listMataKuliah) => {
      state.listMataKuliah = listMataKuliah
    }
  },

  actions: {
    GetListMataKuliah({ commit, state }, listQuery) {
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
          const data = response.data
          commit('SET_LIST_MATAKULIAH', data)
          console.log(store.getters.listMataKuliah)
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
