import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import profil from './modules/profil'
import prodi from './modules/prodi'
import periode from './modules/periode'
import contoh from './modules/contoh'
import listdosen from './modules/listdosen'
import destination from './modules/destination'
import list from './modules/list' // List Mahasiswa
import listpenugasansemuadosen from './modules/listpenugasansemuadosen' // List Penugasan Dosen
import listmatakuliah from './modules/listmatakuliah' // List MataKuliah
import listkurikulum from './modules/listkurikulum' // List Kurikulum
import listkelaskuliah from './modules/listkelaskuliah' // List Kelas Kuliah
import listnilaiperkuliahankelas from './modules/listnilaiperkuliahankelas' // List Nilai Perkuliahan Kelas
import aktivitaskuliahmahasiswa from './modules/aktivitaskuliahmahasiswa' // Aktivitas Kuliah Mahasiswa
import listaktivitasmahasiswa from './modules/listaktivitasmahasiswa' // List Aktivitas Mahasiswa
import listmahasiswalulusdo from './modules/listmahasiswalulusdo' // List Mahasiswa Lulus/DO

import getbiodatamahasiswa from './modules/getbiodatamahasiswa' // List Kurikulum
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
    listpenugasansemuadosen,
    listmatakuliah,
    listkurikulum,
    listkelaskuliah,
    listnilaiperkuliahankelas,
    aktivitaskuliahmahasiswa,
    listaktivitasmahasiswa,
    destination,
    listmahasiswalulusdo,
    insert,
    getbiodatamahasiswa,
    contoh
  },
  getters
})

export default store
