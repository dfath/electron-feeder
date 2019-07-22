import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
// Profil Perguruan Tinggi
import profil from './modules/profil'
import prodi from './modules/prodi'
import periode from './modules/periode'
import contoh from './modules/contoh'
import destination from './modules/destination'
// Mahasiswa
import list from './modules/list' // List Mahasiswa
import getbiodatamahasiswa from './modules/getbiodatamahasiswa' // List Kurikulum
import getlistriwayatpendidikanmahasiswa from './modules/getlistriwayatpendidikanmahasiswa' // List Kurikulum
// Dosen
import listdosen from './modules/listdosen'
import listpenugasandosen from './modules/listpenugasandosen' // List Penugasan Dosen
// Mata Kuliah
import listmatakuliah from './modules/listmatakuliah' // List MataKuliah
// Substansi Kuliah
import listsubstansikuliah from './modules/listsubstansikuliah'
// Kurikulum
import listkurikulum from './modules/listkurikulum' // List Kurikulum
// Kelas Perkuliahan
import listkelaskuliah from './modules/listkelaskuliah' // List Kelas Kuliah
import listnilaiperkuliahankelas from './modules/listnilaiperkuliahankelas' // List Nilai Perkuliahan Kelas
// Aktivitas Kuliah Mahasiswa
import aktivitaskuliahmahasiswa from './modules/aktivitaskuliahmahasiswa' // Aktivitas Kuliah Mahasiswa
// Aktivitas Mahasiswa
import listaktivitasmahasiswa from './modules/listaktivitasmahasiswa' // List Aktivitas Mahasiswa
// Mahasiswa Lulus/DO
import listmahasiswalulusdo from './modules/listmahasiswalulusdo' // List Mahasiswa Lulus/DO

import insert from './modules/insert'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    profil,
    prodi,
    periode,
    listdosen,
    list,
    listpenugasandosen,
    listmatakuliah,
    listsubstansikuliah,
    listkurikulum,
    listkelaskuliah,
    listnilaiperkuliahankelas,
    aktivitaskuliahmahasiswa,
    listaktivitasmahasiswa,
    destination,
    listmahasiswalulusdo,
    insert,
    getbiodatamahasiswa,
    getlistriwayatpendidikanmahasiswa,
    contoh
  },
  getters
})

export default store
