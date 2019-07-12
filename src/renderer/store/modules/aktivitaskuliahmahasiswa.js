import { getAktivitasKuliahMahasiswa } from '@/api/getAktivitasKuliahMahasiswa'
import store from '@/store'

const user = {
  state: {
    aktivitasKuliahMahasiswa: null
  },

  mutations: {
    SET_AKTIVITAS_MAHASISWA: (state, aktivitasKuliahMahasiswa) => {
      state.aktivitasKuliahMahasiswa = aktivitasKuliahMahasiswa
    }
  },

  actions: {
    GetAktivitasKuliahMahasiswa({ commit, state }, listQuery) {
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
        getAktivitasKuliahMahasiswa(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_AKTIVITAS_MAHASISWA', data)
          console.log(store.getters.aktivitasKuliahMahasiswa)
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
