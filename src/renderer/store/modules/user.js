import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    username: '',
    password: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USER: (state, userInfo) => {
      state.username = userInfo.username
      state.password = userInfo.password
    }
  },

  actions: {
    // 登录
    Login({ commit, state }, userInfo) {
      const username = userInfo.username.trim()
      commit('SET_USER', userInfo)
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          console.log(response.data)
          const data = response.data
          setToken(data.token)
          console.log(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },
    Renew({ commit, state }) {
      const username = state.username
      const password = state.password
      return new Promise((resolve, reject) => {
        login(username, password).then(response => {
          console.log(response.data)
          const data = response.data
          setToken(data.token)
          console.log(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          console.log('error')
          reject(error)
        })
      })
    },

    // 获取用户信息

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        removeToken()
        commit('SET_TOKEN', '')
        resolve()
      })
    }
  }
}

export default user
