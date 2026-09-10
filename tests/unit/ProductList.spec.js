import { mount, flushPromises } from '@vue/test-utils'
import { createStore } from 'vuex'
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  it('muestra un mensaje visual cuando existe error de API', async () => {
    const store = createStore({
      modules: {
        products: {
          namespaced: true,

          state: () => ({
            products: [],
            loading: false,
            error: 'No fue posible cargar los productos. Intenta nuevamente.'
          }),

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
          },

          actions: {
            fetchProducts() {
              return Promise.resolve([])
            }
          }
        },

        filters: {
          namespaced: true,

          state: () => ({
            selectedCategory: ''
          }),

          getters: {
            selectedCategory(state) {
              return state.selectedCategory
            },

            filteredProducts() {
              return []
            }
          },

          actions: {
            setCategory() {}
          }
        },

        favorites: {
          namespaced: true,

          state: () => ({
            favorites: []
          }),

          getters: {
            isFavorite: () => () => false
          },

          actions: {
            toggleFavorite() {}
          }
        }
      }
    })

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store]
      }
    })

    await flushPromises()

    expect(wrapper.text()).toContain(
      'No fue posible cargar los productos. Intenta nuevamente.'
    )
  })
})