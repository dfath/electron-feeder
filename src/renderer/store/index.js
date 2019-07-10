import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import profil from './modules/profil'
import prodi from './modules/prodi'
import periode from './modules/periode'
import contoh from './modules/contoh'
import dosen from './modules/dosen'
import destination from './modules/destination'
import list from './modules/list' // List Mahasiswa
import listmatakuliah from './modules/listmatakuliah' // List MataKuliah
import listkurikulum from './modules/listkurikulum' // List Kurikulum
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
    dosen,
    list,
    listmatakuliah,
    listkurikulum,
    destination,
    insert,
    contoh
  },
  getters
})

export default store
