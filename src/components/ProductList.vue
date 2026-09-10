<template>
  <main class="product-list">
    <div class="product-list__container">

      <div class="product-list__header">
        <div>
          <p class="product-list__eyebrow">
            Catálogo
          </p>

          <h2 class="product-list__title">
            Productos disponibles
          </h2>

          <p
            v-if="!loading && !error"
            class="product-list__results"
          >
            {{ filteredProducts.length }}
            producto{{ filteredProducts.length === 1 ? '' : 's' }}
          </p>
        </div>

        <v-select
          :model-value="selectedCategory"
          :items="categoryOptions"
          item-title="title"
          item-value="value"
          label="Filtrar por categoría"
          variant="outlined"
          density="comfortable"
          hide-details
          class="product-list__filter"
          data-cy="category-filter"
          @update:model-value="changeCategoryValue"
        />
      </div>

      <div
        v-if="loading"
        class="product-list__message"
      >
        <v-progress-circular
          indeterminate
          color="primary"
          class="mb-3"
        />

        <p>
          Cargando productos...
        </p>
      </div>

      <v-alert
        v-else-if="error"
        type="error"
        variant="tonal"
        class="product-list__message"
      >
        <div class="product-list__error-content">
          <p>{{ error }}</p>

          <v-btn
            color="error"
            variant="flat"
            class="mt-3"
            @click="loadProducts"
          >
            Reintentar
          </v-btn>
        </div>
      </v-alert>

      <v-alert
        v-else-if="filteredProducts.length === 0"
        type="info"
        variant="tonal"
        class="product-list__message"
      >
        No se encontraron productos.
      </v-alert>

      <div
        v-else
        class="product-list__grid"
      >
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

    </div>
  </main>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',

  components: {
    ProductCard
  },

  data() {
    return {
      loadedProducts: [],
      requestLoading: true,
      requestError: '',
      selectedCategory: ''
    }
  },

  computed: {
    loading() {
      return this.requestLoading
    },

    error() {
      return this.requestError
    },

    categories() {
      return [
        ...new Set(
          this.loadedProducts
            .map(product => product.category)
            .filter(Boolean)
        )
      ]
    },

    categoryOptions() {
      return [
        {
          title: 'Todas las categorías',
          value: ''
        },
        ...this.categories.map(category => ({
          title: category,
          value: category
        }))
      ]
    },

    filteredProducts() {
      if (!this.selectedCategory) {
        return this.loadedProducts
      }

      return this.loadedProducts.filter(
        product => product.category === this.selectedCategory
      )
    }
  },

  mounted() {
    this.loadProducts()
  },

  methods: {
    async loadProducts() {
      this.requestLoading = true
      this.requestError = ''

      const products = await this.$store.dispatch(
        'products/fetchProducts'
      )

      this.loadedProducts = Array.isArray(products)
        ? products
        : []

      this.requestError =
        this.$store.getters['products/error']

      this.requestLoading = false
    },

    changeCategoryValue(value) {
      this.selectedCategory = value || ''

      this.$store.dispatch(
        'filters/setCategory',
        this.selectedCategory
      )
    }
  }
}
</script>

<style scoped>
.product-list {
  flex: 1;
  padding: 3rem 1.5rem;
  background: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
}

.product-list__container {
  max-width: 1200px;
  margin: 0 auto;
}

.product-list__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-list__eyebrow {
  margin: 0 0 0.4rem;
  color: rgb(var(--v-theme-primary));
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.product-list__title {
  margin: 0;
  color: rgb(var(--v-theme-on-background));
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 800;
  line-height: 1.15;
}

.product-list__results {
  margin: 0.6rem 0 0;
  color: rgb(var(--v-theme-on-background));
  opacity: 0.62;
  font-size: 0.95rem;
}

.product-list__filter {
  width: 280px;
  flex: 0 0 auto;
}

.product-list__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.product-list__message {
  margin-top: 1rem;
}

.product-list__message:not(.v-alert) {
  padding: 3rem 1.5rem;
  text-align: center;
}

.product-list__message p {
  margin: 0;
}

.product-list__error-content {
  text-align: center;
}

@media (max-width: 1000px) {
  .product-list__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .product-list {
    padding: 2rem 1rem;
  }

  .product-list__header {
    align-items: stretch;
    flex-direction: column;
    gap: 1.25rem;
  }

  .product-list__filter {
    width: 100%;
  }

  .product-list__grid {
    grid-template-columns: 1fr;
  }
}
</style>