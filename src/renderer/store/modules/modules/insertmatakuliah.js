import { insertMataKuliah } from '@/api/insertMataKuliah'
import store from '@/store'
import { Message } from 'element-ui'

const insertmatakuliah = {
  state: {
    matakuliah: null
  },

  mutations: {
    SET_MATAKULIAH: (state, matakuliah) => {
      state.matakuliah = matakuliah
    },
    INSERT_MATAKULIAH: (state) => {
      state.matakuliah = null
    }
  },

  actions: {
    SetMataKuliah({ commit, state }, data) {
      commit('SET_MATAKULIAH', data)
      console.log('ini matakuliah', state.matakuliah)
    },
    InsertMataKuliah({ commit, state }) {
      const token = store.getters.token
      const matakuliah = state.matakuliah
      console.log('insertmatakuliah', matakuliah)
      matakuliah.forEach(function(data) {
        return new Promise((resolve, reject) => {
          insertMataKuliah(token, data).then(response => {
            Message({
              message: 'Berhasil Input Matakuliah',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response.data)
            commit('INSERT_MATAKULIAH')
            console.log('setelahinsert', state.matakuliah)
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

export default insertmatakuliah
