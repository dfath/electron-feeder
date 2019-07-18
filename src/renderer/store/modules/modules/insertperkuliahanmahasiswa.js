import { insertPerkuliahanMahasiswa } from '@/api/insertPerkuliahanMahasiswa'
import store from '@/store'
import { Message } from 'element-ui'

const insertperkuliahanmahasiswa = {
  state: {
    perkuliahanmahasiswa: null
  },

  mutations: {
    SET_PERKULIAHAN_MAHASISWA: (state, perkuliahanmahasiswa) => {
      state.perkuliahanmahasiswa = perkuliahanmahasiswa
    },
    INSERT_PERKULIAHAN_MAHASISWA: (state) => {
      state.perkuliahanmahasiswa = null
    }
  },

  actions: {
    SetPerkuliahanMahasiswa({ commit, state }, data) {
      commit('SET_PERKULIAHAN_MAHASISWA', data)
      console.log('ini perkuliahan mahasiswa', state.perkuliahanmahasiswa)
    },
    InsertPerkuliahanMahasiswa({ commit, state }) {
      const token = store.getters.token
      const perkuliahanmahasiswa = state.perkuliahanmahasiswa
      console.log('insertperkuliahanmahasiswa', perkuliahanmahasiswa)
      perkuliahanmahasiswa.forEach(function(data) {
        return new Promise((resolve, reject) => {
          insertPerkuliahanMahasiswa(token, data).then(response => {
            Message({
              message: 'Berhasil Input Perkuliahan Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response.data)
            commit('INSERT_PERKULIAHAN_MAHASISWA')
            console.log('setelahinsert', state.perkuliahanmahasiswa)
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

export default insertperkuliahanmahasiswa
