import Vue from 'vue'
import { getBiodataMahasiswa } from '@/api/getBiodataMahasiswa'
import { deleteBiodataMahasiswa } from '@/api/deleteBiodataMahasiswa'
import { editBiodataMahasiswa } from '@/api/editBiodataMahasiswa'
import { getListMahasiswa } from '@/api/getListMahasiswa'
import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

const user = {
  state: {
    editbiodatamahasiswa: null
  },

  mutations: {
    GET_BIODATA_MAHASISWA: (state, editbiodatamahasiswa) => {
      Vue.set(state, 'editbiodatamahasiswa', editbiodatamahasiswa)
    }
  },

  actions: {
    GetBiodataMahasiswa({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        getBiodataMahasiswa(token, id).then(response => {
          console.log(response.data)
          const data = response.data
          commit('GET_BIODATA_MAHASISWA', data)
          console.log('biodata di store', store.getters.editbiodatamahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    DeleteBiodataMahasiswa({ commit }, id) {
      const token = store.getters.token
      console.log(id)
      return new Promise((resolve, reject) => {
        deleteBiodataMahasiswa(token, id).then(response => {
          console.log('biodata di store', store.getters.editbiodatamahasiswa)
          console.log('sekarang mau didelete')
          resolve()
        })
      })
    },
    EditBiodataMahasiswa({ commit }) {
      const token = store.getters.token
      const biodata = store.getters.editbiodatamahasiswa[0]
      return new Promise((resolve, reject) => {
        editBiodataMahasiswa(token, biodata).then(response => {
          console.log(response.data)
          console.log('biodata editan di store', store.getters.editbiodatamahasiswa)
        }).then(() => {
          const listQuery = store.getters.listQueryMahasiswa
          const limit = listQuery.limit
          const offset = listQuery.offset
          getListMahasiswa(token, limit, offset).then(response => {
            console.log(response.data)
            const data = response.data
            commit('SET_LIST_MAHASISWA', data)
            Message({
              message: 'Berhasil Update Biodata Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            })
            router.push('/mahasiswa/data')
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
    }
  }
}

export default user
