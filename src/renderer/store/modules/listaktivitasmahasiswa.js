import { getListAktivitasMahasiswa } from '@/api/getListAktivitasMahasiswa'
import store from '@/store'

const user = {
  state: {
    listAktivitasMahasiswa: null
  },

  mutations: {
    SET_LIST_AKTIVITAS_MAHASISWA: (state, listAktivitasMahasiswa) => {
      state.listAktivitasMahasiswa = listAktivitasMahasiswa
    }
  },

  actions: {
    GetListAktivitasMahasiswa({ commit, state }, listQuery) {
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
        getListAktivitasMahasiswa(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_AKTIVITAS_MAHASISWA', data)
          console.log(store.getters.listAktivitasMahasiswa)
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
