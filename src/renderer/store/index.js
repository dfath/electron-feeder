import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import profil from './modules/profil'
import prodi from './modules/prodi'
import periode from './modules/periode'
import dosen from './modules/dosen'

import list from './modules/list'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    profil,
    prodi,
    periode,
    dosen
    list
  },
  getters
})

export default store
