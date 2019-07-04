import { getProfilPT } from '@/api/getProfilPT'
import store from '@/store'

const user = {
  state: {
    profilPT: {
      nama_PT: 'STFB'
    }
  },

  mutations: {
    SET_PROFILPT: (state, profilPT) => {
      state.profilPT = profilPT
    }
  },

  actions: {
    GetProfilPT({ commit, state }) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        getProfilPT(token).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_PROFILPT', data)
          console.log(store.getters.profilPT)
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
