import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
//axios.defaults.baseURL = 'http://127.0.0.1:8000/'

export const store = new Vuex.Store({

  // State
  state: {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false,
    user: {
      id:  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null,
      name:  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : null,
      email:  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : null,
    }
  },

  // Getters
  getters: {

  },

  // Mutations
  mutations: {
    setLogin(state,data) {
      state.isLogin = data
    },
    setUser(state,user){
      if(user != null){
        state.user.id = user.id
        state.user.name = user.name
        state.user.email = user.email
      }else{
        state.user.id = ''
        state.user.name = ''
        state.user.email = ''
      }
    },
  },

  // Actions
  actions: {
    logout(context) {
      if (context.state.isLogin == true || context.state.isLogin == 'true'  ) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              localStorage.removeItem('isLogin')
              localStorage.removeItem('user')
              context.commit('setLogin', false)
              context.commit('setUser',null)
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('isLogin')
              localStorage.removeItem('user')
              context.commit('setLogin', false)
              context.commit('setUser',null)
              reject(error)
            })
        })
      }
    },
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
            const user = response.data.user
            localStorage.setItem('isLogin', true)
            localStorage.setItem('user',JSON.stringify(user))
            context.commit('setLogin', true)
            context.commit('setUser', user)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    submitPlayTime(context, data){
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      return new Promise((resolve, reject) => {
        axios.post('/merlinApp/playTime', {
          user_id: context.state.user.id,
          seconds: data.seconds,
          content_team: data.content_team,
        })
          .then(response => {
            context.dispatch('destroyToken')
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  }

})
