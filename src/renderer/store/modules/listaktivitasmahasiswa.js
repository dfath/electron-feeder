import { getListAktivitasMahasiswa } from '@/api/getListAktivitasMahasiswa'
import store from '@/store'

const user = {
  state: {
    listAktivitasMahasiswa: null,
    listQueryAktivitasMahasiswa: null,
    totalAktivitasMahasiswa: null
  },

  mutations: {
    SET_LIST_QUERY_AKTIVITAS_MAHASISWA: (state, listQueryKurikulum) => {
      state.listQueryKurikulum = listQueryKurikulum
    },
    SET_LIST_AKTIVITAS_MAHASISWA: (state, listKurikulum) => {
      state.listKurikulum = listKurikulum
    },
    SET_TOTAL_AKTIVITAS_MAHASISWA: (state, totalKurikulum) => {
      state.totalKurikulum = totalKurikulum
    }
  },

  actions: {
    GetListAktivitasMahasiswa({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_semester DESC'
      if (listQuery.filter) {
        filter = `judul LIKE '%${listQuery.filter}%' ORDER BY semester_mulai_berlaku DESC`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_AKTIVITAS_MAHASISWA', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getListAktivitasMahasiswa(token, limit, offset, filter).then(response => {
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
