import { insertKelasKuliah } from '@/api/insertKelasKuliah'
import store from '@/store'
import { Message } from 'element-ui'

const insertkelaskuliah = {
  state: {
    kelaskuliah: null
  },

  mutations: {
    SET_KELAS_KULIAH: (state, kelaskuliah) => {
      state.kelaskuliah = kelaskuliah
    },
    INSERT_KELAS_KULIAH: (state) => {
      state.kelaskuliah = null
    }
  },

  actions: {
    SetKelasKuliah({ commit, state }, data) {
      commit('SET_KELAS_KULIAH', data)
      console.log('ini kelas kuliah', state.kelaskuliah)
    },
    InsertKelasKuliah({ commit, state }) {
      const token = store.getters.token
      const kelaskuliah = state.kelaskuliah
      console.log('insertkelaskuliah', kelaskuliah)
      kelaskuliah.forEach(function(data) {
        return new Promise((resolve, reject) => {
          insertKelasKuliah(token, data).then(response => {
            Message({
              message: 'Berhasil Input Kelas Kuliah',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response.data)
            commit('INSERT_KELAS_KULIAH')
            console.log('setelahinsert', state.kelaskuliah)
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

export default insertkelaskuliah
