import { getListDosen } from '@/api/getListDosen'
import store from '@/store'

const user = {
  state: {
    listDosen: null
  },

  mutations: {
    SET_LIST_DOSEN: (state, listDosen) => {
      state.listDosen = listDosen
    }
  },

  actions: {
    GetListDosen({ commit, state }, listQuery) {
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
        getListDosen(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_DOSEN', data)
          console.log(store.getters.listDosen)
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
