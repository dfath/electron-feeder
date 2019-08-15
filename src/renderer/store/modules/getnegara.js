import { getNegara } from '@/api/getNegara'
import store from '@/store'

const user = {
  state: {
    negara: null,
    listQueryNegara: null,
    totalNegara: null
  },

  mutations: {
    SET_LIST_QUERY_NEGARA: (state, listQueryNegara) => {
      state.listQueryNegara = listQueryNegara
    },
    SET_NEGARA: (state, negara) => {
      state.negara = negara
    },
    SET_TOTAL_NEGARA: (state, totalNegara) => {
      state.totalNegara = totalNegara
    }
  },

  actions: {
    GetNegara({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1'
      if (listQuery.filter) {
        filter = `nama_negara LIKE '%${listQuery.filter}%'`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_NEGARA', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getNegara(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_NEGARA', data)
          console.log(store.getters.negara)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalNegara({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1'
      if (listQuery.filter) {
        filter = `nama_negara LIKE '%${listQuery.filter}%'`
      }
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
        getNegara(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_NEGARA', data)
          console.log(store.getters.totalNegara)
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
