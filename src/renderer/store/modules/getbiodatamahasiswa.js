import Vue from 'vue'
import { getBiodataMahasiswa } from '@/api/getBiodataMahasiswa'
import { editBiodataMahasiswa } from '@/api/editBiodataMahasiswa'
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
    EditBiodataMahasiswa({ commit }) {
      const token = store.getters.token
      const biodata = store.getters.editbiodatamahasiswa[0]
      return new Promise((resolve, reject) => {
        editBiodataMahasiswa(token, biodata).then(response => {
          console.log(response.data)
          console.log('biodata editan di store', store.getters.editbiodatamahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    }
  }
}

export default user
