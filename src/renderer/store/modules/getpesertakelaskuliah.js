import Vue from 'vue'
import { getPesertaKelasKuliah } from '@/api/getPesertaKelasKuliah'
// import { updateKelasKuliah } from '@/api/updateKelasKuliah'
import { deleteKelasKuliah } from '@/api/deleteKelasKuliah'
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
          commit('GET_PESERTA_KELAS_KULIAH', data)
          console.log('pesertakelaskuliah di store', store.getters.pesertakelaskuliah)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteKelasKuliah({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteKelasKuliah(token, id).then(response => {
          console.log('kelaskuliah di store', store.getters.pesertakelaskuliah)
          console.log('sekarang mau didelete')
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
