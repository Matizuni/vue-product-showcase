import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  const product = {
    id: 1,
    title: 'Notebook Test',
    category: 'electronics',
    description: 'Producto de prueba',
    price: 999,
    image: 'https://example.com/image.jpg'
  }

  it('renderiza correctamente la información del producto', () => {
    const store = createStore({
      modules: {
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

    const wrapper = mount(ProductCard, {
      props: {
        product
      },

      global: {
        plugins: [store]
      }
    })

    expect(wrapper.text()).toContain('Notebook Test')
    expect(wrapper.text()).toContain('electronics')
    expect(wrapper.text()).toContain('Producto de prueba')
    expect(wrapper.text()).toContain('US$ 999.00')
  })
})