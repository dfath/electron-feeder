import { insertBiodataMahasiswa } from '@/api/insertBiodataMahasiswa'
import store from '@/store'

const user = {
  state: {
    destination: null
  },

  mutations: {
    SET_DESTINATION: (state, destination) => {
      state.destination = destination
    }
  },

  actions: {
    SetDestination({ commit }, destination_name){
      commit('SET_DESTINATION', destination_name)
    }
  }
}

export default user
