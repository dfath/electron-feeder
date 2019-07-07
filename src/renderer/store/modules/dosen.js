import { getListDosen } from '@/api/getListDosen'
import store from '@/store'

const user = {
  state: {
    dosen: {}
  },

  mutations: {
    SET_DOSEN: (state, dosen) => {
      state.dosen = dosen
    }
  },

  actions: {
    GetListDosen({ commit, state }) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        getListDosen(token).then(response => {
          console.log(response.data)
          const data = response.data
          console.log(data)
          commit('SET_DOSEN', data)
          console.log(store.getters.dosen)
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
