import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
<<<<<<< Updated upstream
=======
import profil from './modules/profil'
import prodi from './modules/prodi'
import periode from './modules/periode'
import dosen from './modules/dosen'

>>>>>>> Stashed changes
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
<<<<<<< Updated upstream
    user
=======
    user,
    profil,
    prodi,
    periode,
    dosen
>>>>>>> Stashed changes
  },
  getters
})

export default store
