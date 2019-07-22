import { getListAnggotaAktivitasMahasiswa } from '@/api/getListAnggotaAktivitasMahasiswa'
import store from '@/store'

const user = {
  state: {
    listAnggotaAktivitasMahasiswa: null
  },

  mutations: {
    SET_LIST_ANGGOTA_AKTIVITAS_MAHASISWA: (state, listAnggotaAktivitasMahasiswa) => {
      state.listAnggotaAktivitasMahasiswa = listAnggotaAktivitasMahasiswa
    }
  },

  actions: {
    GetListAnggotaAktivitasMahasiswa({ commit, state }, listQuery) {
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
        getListAnggotaAktivitasMahasiswa(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_ANGGOTA_AKTIVITAS_MAHASISWA', data)
          console.log(store.getters.listAnggotaAktivitasMahasiswa)
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
