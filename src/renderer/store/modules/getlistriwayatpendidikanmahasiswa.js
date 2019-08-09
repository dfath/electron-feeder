import Vue from 'vue'
import { getListRiwayatPendidikanMahasiswa } from '@/api/getListRiwayatPendidikanMahasiswa'
import { getRiwayatPendidikanMahasiswa } from '@/api/getRiwayatPendidikanMahasiswa'
import { deleteRiwayatPendidikanMahasiswa } from '@/api/deleteRiwayatPendidikanMahasiswa'
import { getListPrestasiMahasiswa } from '@/api/getListPrestasiMahasiswa'
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
    GetListRiwayatPendidikanMahasiswaPrestasi({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      async function getIDs() {
        try {
          const response_riwayat = await getListRiwayatPendidikanMahasiswa(token, id)
          commit('GET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA', response_riwayat.data)
          console.log('getlistriwayatpendidikan done')
          const response_prestasi = await getListPrestasiMahasiswa(token, id)
          commit('GET_LIST_PRESTASI_MAHASISWA', response_prestasi.data)
        } catch (err) {
          console.log(err) // TypeError: failed to get IDs
        }
      }
      getIDs()
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
