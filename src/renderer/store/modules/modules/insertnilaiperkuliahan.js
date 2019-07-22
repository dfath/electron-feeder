import { insertNilaiPerkuliahan } from '@/api/insertNilaiPerkuliahan'
import { getListRiwayatPendidikanMahasiswa } from '@/api/getListRiwayatPendidikanMahasiswa'
import { getListKelasKuliah } from '@/api/getListKelasKuliah'
import store from '@/store'
import { Message } from 'element-ui'

const insertnilaiperkuliahan = {
  state: {
    nilaiperkuliahan: null
  },

  mutations: {
    SET_NILAI_PERKULIAHAN: (state, nilaiperkuliahan) => {
      state.nilaiperkuliahan = nilaiperkuliahan
    },
    INSERT_NILAI_PERKULIAHAN: (state) => {
      state.nilaiperkuliahan = null
    }
  },

  actions: {
    SetNilaiPerkuliahan({ commit, state }, data) {
      commit('SET_NILAI_PERKULIAHAN', data)
      console.log('ini perkuliahan mahasiswa', state.nilaiperkuliahan)
    },
    InsertNilaiPerkuliahan({ commit, state }) {
      const token = store.getters.token
      const nilaiperkuliahan = state.nilaiperkuliahan
      console.log('insertnilaiperkuliahan', nilaiperkuliahan)
      nilaiperkuliahan.forEach(function(data) {
        async function getIDs() {
          try {
            let filter = `nama_mahasiswa LIKE '%${data.nama_mahasiswa}%' AND nim LIKE '%${data.nim}%'`
            const key = {}
            const response_riwayat = await getListRiwayatPendidikanMahasiswa(token, '', 0, filter)
            key.id_registrasi_mahasiswa = response_riwayat.data[0].id_registrasi_mahasiswa
            console.log(data)
            delete (data.nama_mahasiswa)
            delete (data.nim)
            delete (data.tanggal_daftar)

            filter = `kode_mata_kuliah LIKE '%${data.kode_mata_kuliah}%' AND nama_mata_kuliah LIKE '%${data.nama_mata_kuliah}%' AND nama_kelas_kuliah LIKE '%${data.nama_kelas_kuliah}%' AND id_semester='${data.id_semester}'`

            const response_kelas = await getListKelasKuliah(token, '', 0, filter)
            key.id_kelas_kuliah = response_kelas.data[0].id_kelas_kuliah
            console.log(data)
            delete (data.kode_mata_kuliah)
            delete (data.nama_mata_kuliah)
            delete (data.nama_kelas_kuliah)
            delete (data.id_semester)

            const response_insert = await insertNilaiPerkuliahan(token, key, data)
            Message({
              message: 'Berhasil Input Nilai Perkuliahan Mahasiswa',
              type: 'success',
              duration: 5 * 1000
            })
            console.log(response_insert.data)
            commit('INSERT_NILAI_PERKULIAHAN')
            console.log('setelahinsert', state.nilaiperkuliahan)
          } catch (err) {
            alert(err) // TypeError: failed to get IDs
          }
        }
        getIDs()
      })
    }
  }
}

export default insertnilaiperkuliahan
