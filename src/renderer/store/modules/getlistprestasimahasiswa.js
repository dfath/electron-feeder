import Vue from 'vue'
import { getListPrestasiMahasiswa } from '@/api/getListPrestasiMahasiswa'
import { deletePrestasiMahasiswa } from '@/api/deletePrestasiMahasiswa'
import { updatePrestasiMahasiswa } from '@/api/updatePrestasiMahasiswa'
import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    listprestasimahasiswa: null
  },

  mutations: {
    GET_LIST_PRESTASI_MAHASISWA: (state, listprestasimahasiswa) => {
      Vue.set(state, 'listprestasimahasiswa', listprestasimahasiswa)
    }
  },

  actions: {
    GetListPrestasiMahasiswa({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getListPrestasiMahasiswa(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          console.log('ini data list prestasi mahasiswa', data)
          commit('GET_LIST_PRESTASI_MAHASISWA', data)
          console.log('listprestasimahasiswa di store', store.getters.listprestasimahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    UpdatePrestasiMahasiswa({ commit }) {
      const token = store.getters.token
      const prestasimahasiswa = store.getters.updateprestasimahasiswa[0]
      return new Promise((resolve, reject) => {
        updatePrestasiMahasiswa(token, prestasimahasiswa).then(response => {
          console.log(response.data)
          console.log('prestasimahasiswa updatean di store', store.getters.updateprestasimahasiswa)
        }).then(() => {
          const listQuery = store.getters.listQueryPrestasiMahasiswa
          // console.log(listQuery)
          const limit = listQuery.limit
          const offset = listQuery.offset
          getListPrestasiMahasiswa(token, limit, offset).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_PRESTASI_MAHASISWA', data)
            Message({
              message: 'Berhasil Update Prestasi Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            })
            router.push('/mahasiswa/prestasimahasiswa')
            resolve()
          }).catch(error => {
            console.log('error')
            reject(error)
          })
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeletePrestasiMahasiswa({ commit }, data) {
      const token = store.getters.token
      return new Promise((resolve, reject) => {
        deletePrestasiMahasiswa(token, data.id_prestasi).then(response => {
          console.log(response)
          resolve()
        })
      })
    }
  }
}

export default user
