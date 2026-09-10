export default {
  namespaced: true,

  state: () => ({
    favorites: []
  }),

  mutations: {
    ADD_FAVORITE(state, product) {
      const exists = state.favorites.some(item => item.id === product.id)
      if (!exists) {
        state.favorites.push(product)
      }
    },

    REMOVE_FAVORITE(state, productId) {
      state.favorites = state.favorites.filter(
        product => product.id !== productId
      )
    }
  },

  actions: {
    toggleFavorite({ state, commit }, product) {
      const exists = state.favorites.some(item => item.id === product.id)

      if (exists) {
        commit('REMOVE_FAVORITE', product.id)
      } else {
        commit('ADD_FAVORITE', product)
      }
    }
  },

  getters: {
    favorites(state) {
      return state.favorites
    },

    favoritesCount(state) {
      return state.favorites.length
    },

    isFavorite: state => productId => {
      return state.favorites.some(product => product.id === productId)
    }
  }
}
