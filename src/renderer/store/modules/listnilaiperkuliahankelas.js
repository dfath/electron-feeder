import { getListNilaiPerkuliahanKelas } from '@/api/getListNilaiPerkuliahanKelas'
import store from '@/store'

const user = {
  state: {
    listNilaiPerkuliahanKelas: null
  },

  mutations: {
    SET_LIST_NILAI_PERKULIAHAN_KELAS: (state, listNilaiPerkuliahanKelas) => {
      state.listNilaiPerkuliahanKelas = listNilaiPerkuliahanKelas
    }
  },

  actions: {
    GetListNilaiPerkuliahanKelas({ commit, state }, listQuery) {
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
        getListNilaiPerkuliahanKelas(token, limit, offset).then(response => {
          console.log(response.data)
          const data = response.data
          commit('SET_LIST_NILAI_PERKULIAHAN_KELAS', data)
          console.log(store.getters.listNilaiPerkuliahanKelas)
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
