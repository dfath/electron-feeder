import { insertKurikulum } from '@/api/insertKurikulum'
import store from '@/store'
import { Message } from 'element-ui'

const insertkurikulum = {
  state: {
    kurikulum: null
  },

  mutations: {
    SET_KURIKULUM: (state, kurikulum) => {
      state.kurikulum = kurikulum
    },
    INSERT_KURIKULUM: (state) => {
      state.kurikulum = null
    }
  },

  actions: {
    SetKurikulum({ commit, state }, data) {
      commit('SET_KURIKULUM', data)
      console.log('ini kurikulum', state.kurikulum)
    },
    InsertKurikulum({ commit, state }) {
      const token = store.getters.token
      const kurikulum = state.kurikulum
      console.log('insertkurikulum', kurikulum)
      kurikulum.forEach(function(data) {
        return new Promise((resolve, reject) => {
          insertKurikulum(token, data).then(response => {
            Message({
              message: 'Berhasil Input Kurikulum',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response.data)
            commit('INSERT_KURIKULUM')
            console.log('setelahinsert', state.kurikulum)
            resolve()
          }).catch(error => {
            console.log('error')
            reject(error)
          })
        })
      })
    }
  }
}

export default insertkurikulum
