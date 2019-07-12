import { getListPenugasanSemuaDosen } from '@/api/getListPenugasanSemuaDosen'
import store from '@/store'

const user = {
  state: {
    listPenugasanSemuaDosen: null
  },

  mutations: {
    SET_LIST_PENUGASAN_SEMUA_DOSEN: (state, listPenugasanSemuaDosen) => {
      state.listPenugasanSemuaDosen = listPenugasanSemuaDosen
    }
  },

  actions: {
    GetListPenugasanSemuaDosen({ commit, state }, listQuery) {
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
        getListPenugasanSemuaDosen(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_PENUGASAN_SEMUA_DOSEN', data)
          console.log(store.getters.listPenugasanSemuaDosen)
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
