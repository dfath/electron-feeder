import { getFilteredRiwayatPendidikanMahasiswa } from '@/api/getListRiwayatPendidikanMahasiswa'
import store from '@/store'

const user = {
  state: {
    listQueryRiwayatPendidikanMahasiswa: null,
    listRiwayatPendidikanMahasiswa: null,
    totalRiwayatPendidikanMahasiswa: null
  },

  mutations: {
    SET_LIST_QUERY_RIWAYAT_PENDIDIKAN_MAHASISWA: (state, listQueryRiwayatPendidikanMahasiswa) => {
      state.listQueryRiwayatPendidikanMahasiswa = listQueryRiwayatPendidikanMahasiswa
    },
    SET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA: (state, listRiwayatPendidikanMahasiswa) => {
      state.listRiwayatPendidikanMahasiswa = listRiwayatPendidikanMahasiswa
    },
    SET_TOTAL_RIWAYAT_PENDIDIKAN_MAHASISWA: (state, totalRiwayatPendidikanMahasiswa) => {
      state.totalRiwayatPendidikanMahasiswa = totalRiwayatPendidikanMahasiswa
    }
  },

  actions: {
    GetListRiwayatPendidikanMahasiswa({ commit, state }, listQuery) {
      console.log(store.getters.username)
      const token = store.getters.token
      const limit = listQuery.limit
      let filter = '1=1 ORDER BY id_periode DESC, nim'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY id_periode DESC, nim`
      }
      let offset = null
      if (listQuery.page === 1) {
        offset = ''
      } else {
        offset = listQuery.limit * (listQuery.page - 1)
      }
      listQuery.offset = offset
      commit('SET_LIST_QUERY_RIWAYAT_PENDIDIKAN_MAHASISWA', listQuery)
      console.log(listQuery.page)
      console.log(listQuery.limit)
      console.log(offset)
      return new Promise((resolve, reject) => {
        getFilteredRiwayatPendidikanMahasiswa(token, limit, offset, filter).then(response => {
          const data = response.data
          // data.forEach(function(e) {
          //   e.nama_mahasiswa = e.nama_mahasiswa.toUpperCase()
          // })
          console.log('ini respons dari getListRiwayatPendidikanMahasiswa ', data)
          commit('SET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA', data)
          console.log(store.getters.listRiwayatPendidikanMahasiswa)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    GetTotalRiwayatPendidikanMahasiswa({ commit }, listQuery) {
      const token = store.getters.token
      const limit = 0
      let filter = '1=1 ORDER BY id_periode DESC, nim'
      if (listQuery.filter) {
        filter = `nama_mahasiswa LIKE '%${listQuery.filter}%' ORDER BY id_periode DESC, nim`
      }
      console.log(filter)
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
        getFilteredRiwayatPendidikanMahasiswa(token, limit, offset, filter).then(response => {
          console.log(response.data)
          const data = response.data.length
          commit('SET_TOTAL_RIWAYAT_PENDIDIKAN_MAHASISWA', data)
          console.log(store.getters.totalRiwayatPendidikanMahasiswa)
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
