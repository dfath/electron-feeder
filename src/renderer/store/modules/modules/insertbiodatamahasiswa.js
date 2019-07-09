import { insertBiodataMahasiswa } from '@/api/insertBiodataMahasiswa'
import store from '@/store'
import { Message } from 'element-ui'

const insertbiodatamahasiswa = {
  state: {
    biodatamahasiswa: null
  },

  mutations: {
    SET_BIODATA_MAHASISWA: (state, biodatamahasiswa) => {
      state.biodatamahasiswa = biodatamahasiswa
    },
    INSERT_BIODATA_MAHASISWA: (state) => {
      state.biodatamahasiswa = null
    }
  },

  actions: {
    SetBiodataMahasiswa({ commit, state }, data) {
      commit('SET_BIODATA_MAHASISWA', data)
      console.log('ini biodata', state.biodatamahasiswa)
    },
    InsertBiodataMahasiswa({ commit, state }) {
      const token = store.getters.token
      const biodata = state.biodatamahasiswa
      console.log('insertbiodata', biodata)
      biodata.forEach(function(data) {
        return new Promise((resolve, reject) => {
          insertBiodataMahasiswa(token, data).then(response => {
            Message({
              message: 'Berhasil Input Biodata Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response.data)
            commit('INSERT_BIODATA_MAHASISWA')
            console.log('setelahinsert', state.biodatamahasiswa)
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

export default insertbiodatamahasiswa
