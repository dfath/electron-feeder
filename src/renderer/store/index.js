import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import profil from './modules/profil'
<<<<<<< HEAD
import prodi from './modules/prodi'
import periode from './modules/periode'
import dosen from './modules/dosen'

=======
import list from './modules/list'
>>>>>>> viewmahasiswa
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    profil,
<<<<<<< HEAD
    prodi,
    periode,
    dosen
=======
    list
>>>>>>> viewmahasiswa
  },
  getters
})

export default store
