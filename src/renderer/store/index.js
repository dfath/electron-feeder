import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
// Other
import getstatusmahasiswa from './modules/getstatusmahasiswa'
import gettahunajaran from './modules/gettahunajaran'
import getsemester from './modules/getsemester'
import getjenisaktivitasmahasiswa from './modules/getjenisaktivitasmahasiswa'
import getjeniskeluar from './modules/getjeniskeluar'
// Profil Perguruan Tinggi
import profil from './modules/profil'
import prodi from './modules/prodi'
import periode from './modules/periode'
import contoh from './modules/contoh'
import destination from './modules/destination'
// Mahasiswa
import list from './modules/list' // List Mahasiswa
import getbiodatamahasiswa from './modules/getbiodatamahasiswa'
import getlistriwayatpendidikanmahasiswa from './modules/getlistriwayatpendidikanmahasiswa' // List Kurikulum
// Dosen
import listdosen from './modules/listdosen'
import listpenugasandosen from './modules/listpenugasandosen' // List Penugasan Dosen
import listpenugasansemuadosen from './modules/listpenugasansemuadosen' // List Penugasan Semua Dosen
// Mata Kuliah
import listmatakuliah from './modules/listmatakuliah' // List MataKuliah
import getdetailmatakuliah from './modules/getdetailmatakuliah'
// Substansi Kuliah
import listsubstansikuliah from './modules/listsubstansikuliah'
// Kurikulum
import listkurikulum from './modules/listkurikulum' // List Kurikulum
import getdetailkurikulum from './modules/getdetailkurikulum'
// Kelas Perkuliahan
import listkelaskuliah from './modules/listkelaskuliah' // List Kelas Kuliah
import getdetailkelaskuliah from './modules/getdetailkelaskuliah'
import listnilaiperkuliahankelas from './modules/listnilaiperkuliahankelas' // List Nilai Perkuliahan Kelas

import getpesertakelaskuliah from './modules/getpesertakelaskuliah'
// Aktivitas Kuliah Mahasiswa
import aktivitaskuliahmahasiswa from './modules/aktivitaskuliahmahasiswa' // Aktivitas Kuliah Mahasiswa
// Aktivitas Mahasiswa
import listaktivitasmahasiswa from './modules/listaktivitasmahasiswa' // List Aktivitas Mahasiswa
import getlistanggotaaktivitasmahasiswa from './modules/getlistanggotaaktivitasmahasiswa' // List Aktivitas Mahasiswa
import getdetailaktivitasmahasiswa from './modules/getdetailaktivitasmahasiswa'
// Mahasiswa Lulus/Drop Out
import listmahasiswalulusdo from './modules/listmahasiswalulusdo' // List Mahasiswa Lulus/Drop Out
import getdetailmahasiswalulusdo from './modules/getdetailmahasiswalulusdo'

import insert from './modules/insert'
import getters from './getters'
import loading from './modules/loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    // Other
    getstatusmahasiswa,
    gettahunajaran,
    getsemester,
    getjenisaktivitasmahasiswa,
    getjeniskeluar,
    // Profil PT
    profil,
    prodi,
    periode,
    // Mahasiswa
    list,
    getbiodatamahasiswa,
    getlistriwayatpendidikanmahasiswa,
    // Dosen
    listdosen,
    listpenugasandosen,
    listpenugasansemuadosen,
    // Mata Kuliah
    listmatakuliah,
    getdetailmatakuliah,
    listsubstansikuliah,
    // Kurikulum
    listkurikulum,
    getdetailkurikulum,
    // Kelas Kuliah
    listkelaskuliah,
    getdetailkelaskuliah,

    getpesertakelaskuliah,
    // Perkuliahan
    listnilaiperkuliahankelas,
    aktivitaskuliahmahasiswa,
    // Aktivitas Mahasiswa
    listaktivitasmahasiswa,
    getdetailaktivitasmahasiswa,

    getlistanggotaaktivitasmahasiswa,
    // Mahasiswa Lulus DO
    listmahasiswalulusdo,
    getdetailmahasiswalulusdo,
    // Lainnya
    insert,
    contoh,
    destination,
    loading
  },
  getters
})

export default store
