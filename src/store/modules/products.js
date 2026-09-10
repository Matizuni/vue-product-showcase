import axios from 'axios'

export default {
  namespaced: true,

  state: () => ({
    products: [],
    loading: false,
    error: ''
  }),

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },

    SET_LOADING(state, value) {
      state.loading = value
    },

    SET_ERROR(state, message) {
      state.error = message
    }
  },

  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', '')

      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const products = Array.isArray(response.data) ? response.data : []

        commit('SET_PRODUCTS', products)
        return products
      } catch (error) {
        console.error('Error al cargar productos:', error)
        commit('SET_PRODUCTS', [])
        commit('SET_ERROR', 'No fue posible cargar los productos. Intenta nuevamente.')
        return []
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    allProducts(state) {
      return state.products
    },

    loading(state) {
      return state.loading
    },

    error(state) {
      return state.error
    }
  }
}
