export default {
  state: {
    currentPolitical: {
      name: null,
      description: null,
      figureId: null
    },
    currentNews: {}
  },
  getters: {
    currentPolitical: (state) => {
      return state.currentPolitical
    },
    currentNews: (state) => {
      return state.currentNews
    }
  },
  mutations: {
    setPolitical(state, payload) {
      state.currentPolitical = payload
    },
    setNews(state, payload) {
      state.currentNews = payload
    }
  },
  actions: {
    actionPolitical({ commit }, payload) {
      commit('setPolitical', payload)
    },
    actionNews({ commit }, payload) {
      commit('setNews', payload)
    }
  }
}
