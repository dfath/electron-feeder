import { insertPesertaKelasKuliah } from '@/api/insertPesertaKelasKuliah'
import { getListRiwayatPendidikanMahasiswa } from '@/api/getListRiwayatPendidikanMahasiswa'
import { getListKelasKuliah } from '@/api/getListKelasKuliah'
import store from '@/store'
import { Message } from 'element-ui'

const insertpesertakelaskuliah = {
  state: {
    pesertakelaskuliah: null
  },

  mutations: {
    SET_PESERTA_KELAS_KULIAH: (state, pesertakelaskuliah) => {
      state.pesertakelaskuliah = pesertakelaskuliah
    },
    INSERT_PESERTA_KELAS_KULIAH: (state) => {
      state.pesertakelaskuliah = null
    }
  },

  actions: {
    SetPesertaKelasKuliah({ commit, state }, data) {
      commit('SET_PESERTA_KELAS_KULIAH', data)
      console.log('ini pesertakelaskuliah', state.pesertakelaskuliah)
    },
    InsertPesertaKelasKuliah({ commit, state }) {
      const token = store.getters.token
      const pesertakelaskuliah = state.pesertakelaskuliah
      console.log('insertpesertakelaskuliah', pesertakelaskuliah)
      async function insertpesertakelaskuliah(token, data) {
        try {
          let filter = `nama_mahasiswa LIKE '%${data.nama_mahasiswa}%' AND nim LIKE '%${data.nim}%' AND nama_program_studi LIKE '%${data.nama_program_studi}%'`
          let res = await getListRiwayatPendidikanMahasiswa(token, '', '', filter)
          data.id_registrasi_mahasiswa = res.data[0].id_registrasi_mahasiswa

          delete data.nama_mahasiswa
          delete data.nim
          delete data.nama_program_studi

          filter = `id_semester LIKE '%${data.id_semester}%' AND nama_mata_kuliah LIKE '%${data.nama_mata_kuliah}%' AND nama_kelas_kuliah LIKE '%${data.nama_kelas_kuliah}%'`
          res = await getListKelasKuliah(token, '', '', filter)
          data.id_kelas_kuliah = res.data[0].id_kelas_kuliah

          delete (data.id_semester)
          delete (data.nama_mata_kuliah)
          delete (data.nama_kelas_kuliah)

          res = await insertPesertaKelasKuliah(token, data)
          Message({
            message: 'Berhasil Input Peserta Kelas Kuliah',
            type: 'success',
            duration: 5 * 1000
          })
          console.log(res.data)
          commit('INSERT_PESERTA_KELAS_KULIAH')
        } catch (err) {
          console.log(err)
        }
      }
      pesertakelaskuliah.forEach(function(data) {
        insertpesertakelaskuliah(token, data).then()
      })
    }
  }
}

export default insertpesertakelaskuliah
