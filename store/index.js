import { createStore } from 'vuex'
import user from './user'
import political from './political'

export const store = createStore({
  modules: {
    user,
    political
  }
})
