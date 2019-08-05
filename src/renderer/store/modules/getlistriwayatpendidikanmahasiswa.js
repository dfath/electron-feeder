import Vue from 'vue'
import { getListRiwayatPendidikanMahasiswa } from '@/api/getListRiwayatPendidikanMahasiswa'
import { deleteRiwayatPendidikanMahasiswa } from '@/api/deleteRiwayatPendidikanMahasiswa'
import store from '@/store'

const user = {
  state: {
    listriwayatpendidikanmahasiswa: null
  },

  mutations: {
    GET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA: (state, listriwayatpendidikanmahasiswa) => {
      Vue.set(state, 'listriwayatpendidikanmahasiswa', listriwayatpendidikanmahasiswa)
    }
  },

  actions: {
    GetListRiwayatPendidikanMahasiswa({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getListRiwayatPendidikanMahasiswa(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          console.log('ini data riwayat pendidikan mahasiswa', data)
          commit('GET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA', data)
          console.log('listriwayatpendidikanmahasiswa di store', store.getters.listriwayatpendidikanmahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteRiwayatPendidikanMahasiswa({ commit }, data) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        deleteRiwayatPendidikanMahasiswa(token, data.id_registrasi_mahasiswa).then(response => {
          console.log(response)
          resolve()
        })
      })
    }
  }
}

export default user
