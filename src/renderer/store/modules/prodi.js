import { getProdi } from '@/api/getProdi'
import store from '@/store'

const user = {
  state: {
    prodi: {}
  },

  mutations: {
    SET_PRODI: (state, prodi) => {
      state.prodi = prodi
    }
  },

  actions: {
    GetProdi({ commit, state }) {
      const token = store.getters.token
      const filter = ''
      return new Promise((resolve, reject) => {
        getProdi(token, filter).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_PRODI', data)
          console.log(store.getters.prodi)
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
