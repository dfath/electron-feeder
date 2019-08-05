import Vue from 'vue'
import { getPesertaKelasKuliah } from '@/api/getPesertaKelasKuliah'
// import { updateKelasKuliah } from '@/api/updateKelasKuliah'
import { deletePesertaKelasKuliah } from '@/api/deletePesertaKelasKuliah'
// import { getListKelasKuliah } from '@/api/getListKelasKuliah'
// import { Message } from 'element-ui'
// import router from '@/router'
import store from '@/store'

const user = {
  state: {
    pesertakelaskuliah: null
  },

  mutations: {
    GET_PESERTA_KELAS_KULIAH: (state, pesertakelaskuliah) => {
      Vue.set(state, 'pesertakelaskuliah', pesertakelaskuliah)
    }
  },

  actions: {
    GetPesertaKelasKuliah({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getPesertaKelasKuliah(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          console.log('ini data peserta', data)
          commit('GET_PESERTA_KELAS_KULIAH', data)
          console.log('pesertakelaskuliah di store', store.getters.pesertaKelasKuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeletePesertaKelasKuliah({ commit }, data) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        deletePesertaKelasKuliah(token, data.id_kelas_kuliah, data.id_registrasi_mahasiswa).then(response => {
          console.log(response)
          resolve()
        })
      })
    }
    // UpdateKelasKuliah({ commit }) {
    //   const token = store.getters.token
    //   const kelaskuliah = store.getters.pesertakelaskuliah[0]
    //   return new Promise((resolve, reject) => {
    //     updateKelasKuliah(token, kelaskuliah).then(response => {
    //       console.log(response.data)
    //       console.log('kelaskuliah pesertaan di store', store.getters.pesertakelaskuliah)
    //     }).then(() => {
    //       const listQuery = store.getters.listQueryKelasKuliah
    //       // console.log(listQuery)
    //       const limit = listQuery.limit
    //       const offset = listQuery.offset
    //       getListKelasKuliah(token, limit, offset).then(response => {
    //         console.log(response.data)
    //         const data = response.data
    //         commit('SET_LIST_KELAS_KULIAH', data)
    //         Message({
    //           message: 'Berhasil Update Kelas Kuliah',
    //           type: 'success',
    //           duration: 5 * 1000
    //         })
    //         router.push('/kelaskuliah/listkelaskuliah')
    //         resolve()
    //       }).catch(error => {
    //         console.log('error')
    //         reject(error)
    //       })
    //     }).catch(error => {
    //       console.log('error')
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default user
