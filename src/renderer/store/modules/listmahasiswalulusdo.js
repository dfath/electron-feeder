import { getListMahasiswaLulusDO } from '@/api/getListMahasiswaLulusDO'
import store from '@/store'

const user = {
  state: {
    listMahasiswaLulusDO: null
  },

  mutations: {
    SET_LIST_MAHASISWA_LULUS_DO: (state, listMahasiswaLulusDO) => {
      state.listMahasiswaLulusDO = listMahasiswaLulusDO
    }
  },

  actions: {
    GetListMahasiswaLulusDO({ commit, state }, listQuery) {
      const token = store.getters.token
      const limit = listQuery.limit
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListMahasiswaLulusDO(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_MAHASISWA_LULUS_DO', data)
          console.log(store.getters.listMahasiswaLulusDO)
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
