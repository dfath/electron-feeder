import { getListKurikulum } from '@/api/getListKurikulum'
import store from '@/store'

const user = {
  state: {
    listKurikulum: null
  },

  mutations: {
    SET_LIST_KURIKULUM: (state, listKurikulum) => {
      state.listKurikulum = listKurikulum
    }
  },

  actions: {
    GetListKurikulum({ commit, state }, listQuery) {
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
        getListKurikulum(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_KURIKULUM', data)
          console.log(store.getters.listKurikulum)
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
