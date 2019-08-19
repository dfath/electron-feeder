import { insertMahasiswaLulusDO } from '@/api/insertMahasiswaLulusDO'
import { getDetailListRiwayatPendidikanMahasiswa } from '@/api/getDetailListRiwayatPendidikanMahasiswa'
import store from '@/store'
import { Message } from 'element-ui'

const insertmahasiswalulusdo = {
  state: {
    mahasiswalulusdo: null
  },

  mutations: {
    SET_MAHASISWA_LULUS_DO: (state, mahasiswalulusdo) => {
      state.mahasiswalulusdo = mahasiswalulusdo
    },
    INSERT_MAHASISWA_LULUS_DO: (state) => {
      state.mahasiswalulusdo = null
    }
  },

  actions: {
    SetMahasiswaLulusDO({ commit, state }, data) {
      commit('SET_MAHASISWA_LULUS_DO', data)
      console.log('ini mahasiswa lulus do', state.mahasiswalulusdo)
    },
    InsertMahasiswaLulusDO({ commit, state }) {
      commit('SET_LOADING', true)
      const token = store.getters.token
      const mahasiswalulusdo = state.mahasiswalulusdo
      console.log('insertlulusdo', mahasiswalulusdo)
      // lulusdo.forEach(function(data) {
      async function insertmahasiswalulusdo(token, data) {
        try {
          const filter = `nama_mahasiswa LIKE '%${data.nama_mahasiswa}%' AND nim LIKE '%${data.nim}%'`

          const response_riwayat = await getDetailListRiwayatPendidikanMahasiswa(token, '', 0, filter)
          data.id_registrasi_mahasiswa = response_riwayat.data[0].id_registrasi_mahasiswa
          console.log(data)
          delete (data.nama_mahasiswa)
          delete (data.nim)
          // delete (data.tanggal_daftar)

          const response_insert = await insertMahasiswaLulusDO(token, data)
          Message({
            message: 'Berhasil Input Mahasiswa Lulus/Drop Out',
            type: 'success',
            duration: 5 * 1000
          })
          console.log(response_insert.data)
          commit('INSERT_MAHASISWA_LULUS_DO')
          commit('SET_LOADING', false)
          console.log('setelahinsert', state.mahasiswalulusdo)
        } catch (err) {
          commit('SET_LOADING', false)
          alert(err) // TypeError: failed to get IDs
        }
      }
      // https://lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795/
      async function insertmahasiswalulusdodata(token, data) {
        for (const record of data) {
          await insertmahasiswalulusdo(token, record)
        }
      }
      insertmahasiswalulusdodata(token, mahasiswalulusdo)
    }
  }
}

export default insertmahasiswalulusdo
