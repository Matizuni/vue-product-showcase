export default {
  namespaced: true,

  state: () => ({
    selectedCategory: ''
  }),

  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category
    }
  },

  actions: {
    setCategory({ commit }, category) {
      commit('SET_CATEGORY', category)
    }
  },

  getters: {
    selectedCategory(state) {
      return state.selectedCategory
    }
  }
}
