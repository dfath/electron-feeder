import { insertMahasiswaLulusDO } from '@/api/insertMahasiswaLulusDO'
import store from '@/store'
import { Message } from 'element-ui'

const insertmahasiswalulusdo = {
  state: {
    mahasiswalulusdo: null
  },

  mutations: {
    SET_MAHASISWA_LULUS_DO: (state, mahasiswalulusdo) => {
      state.mahasiswalulusdo = mahasiswalulusdo
    },
    INSERT_MAHASISWA_LULUS_DO: (state) => {
      state.mahasiswalulusdo = null
    }
  },

  actions: {
    SetMahasiswaLulusDO({ commit, state }, data) {
      commit('SET_MAHASISWA_LULUS_DO', data)
      console.log('ini lulusdo', state.mahasiswalulusdo)
    },
    InsertMahasiswaLulusDO({ commit, state }) {
      const token = store.getters.token
      const lulusdo = state.mahasiswalulusdo
      console.log('insertlulusdo', lulusdo)
      lulusdo.forEach(function(data) {
        return new Promise((resolve, reject) => {
          insertMahasiswaLulusDO(token, data).then(response => {
            Message({
              message: 'Berhasil Input Mahasiswa Lulus DO',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response.data)
            commit('INSERT_MAHASISWA_LULUS_DO')
            console.log('setelahinsert', state.mahasiswalulusdo)
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

export default insertmahasiswalulusdo
