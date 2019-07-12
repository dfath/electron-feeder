import { insertAktivitasMahasiswa } from '@/api/insertAktivitasMahasiswa'
import store from '@/store'
import { Message } from 'element-ui'

const insertaktivitasmahasiswa = {
  state: {
    aktivitasmahasiswa: null
  },

  mutations: {
    SET_AKTIVITAS_MAHASISWA: (state, aktivitasmahasiswa) => {
      state.aktivitasmahasiswa = aktivitasmahasiswa
    },
    INSERT_AKTIVITAS_MAHASISWA: (state) => {
      state.aktivitasmahasiswa = null
    }
  },

  actions: {
    SetAktivitasMahasiswa({ commit, state }, data) {
      commit('SET_AKTIVITAS_MAHASISWA', data)
      console.log('ini aktivitas mahasiswa', state.aktivitasmahasiswa)
    },
    InsertAktivitasMahasiswa({ commit, state }) {
      const token = store.getters.token
      const aktivitasmahasiswa = state.aktivitasmahasiswa
      console.log('insertaktivitasmahasiswa', aktivitasmahasiswa)
      aktivitasmahasiswa.forEach(function(data) {
        return new Promise((resolve, reject) => {
          insertAktivitasMahasiswa(token, data).then(response => {
            Message({
              message: 'Berhasil Input Aktivitas Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response.data)
            commit('INSERT_AKTIVITAS_MAHASISWA')
            console.log('setelahinsert', state.aktivitasmahasiswa)
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

export default insertaktivitasmahasiswa
