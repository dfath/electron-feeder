import { getWilayah } from '@/api/getWilayah'
import store from '@/store'

const user = {
  state: {
    wilayah: null,
    listQueryWilayah: null,
    totalWilayah: null
  },

  mutations: {
    SET_LIST_QUERY_WILAYAH: (state, listQueryWilayah) => {
      state.listQueryWilayah = listQueryWilayah
    },
    SET_WILAYAH: (state, wilayah) => {
      state.wilayah = wilayah
    },
    SET_TOTAL_WILAYAH: (state, totalWilayah) => {
      state.totalWilayah = totalWilayah
    }
  },

  actions: {
    GetWilayah({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1'
      if (listQuery.filter) {
        filter = `nama_wilayah LIKE '%${listQuery.filter}%'`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_WILAYAH', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getWilayah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_WILAYAH', data)
          console.log(store.getters.wilayah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalWilayah({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1'
      if (listQuery.filter) {
        filter = `nama_wilayah LIKE '%${listQuery.filter}%'`
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
        getWilayah(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_WILAYAH', data)
          console.log(store.getters.totalWilayah)
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
