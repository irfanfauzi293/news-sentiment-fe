import axios from 'axios'
import jwtDecode from 'vue-jwt-decode'
import { errorMessage, successMessage } from '@/components/Message'

export default {
  state: {
    currentUser:
      localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null
  },
  getters: {
    currentUser: (state) => {
      return state.currentUser
    }
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload
    },
    setLogout(state) {
      state.currentUser = ''
    }
  },
  actions: {
    handleSignIn({ commit }, payload) {
      axios
        .post('http://localhost:3000/news-sentiment/authenticate', {
          username: payload.username,
          userPassword: payload.userPassword
        })
        .then(
          (user) => {
            const tokenDecode = jwtDecode.decode(user.data.token)
            const item = { tokenid: user.data.token, ...tokenDecode }
            localStorage.setItem('user', JSON.stringify(item))
            commit('setUser', item)
            successMessage('Sign In Successfully')
            payload.callback()
          },
          (err) => {
            localStorage.removeItem('user')
            if (err.response) {
              errorMessage('Sign in Failed', err.response.data.message)
            } else {
              errorMessage('Sign in Failed')
              console.log(err)
            }
          }
        )
        .catch((err) => {
          errorMessage('Sign in Failed')
          console.log(err)
        })
    },
    handleSignOut({ commit }) {
      localStorage.removeItem('user')
      commit('setLogout')
    }
  }
}
