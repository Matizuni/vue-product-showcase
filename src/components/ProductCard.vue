<template>
  <v-card
    class="product-card"
    elevation="2"
    rounded="lg"
  >
    <div class="product-card__image-container">
      <v-img
        :src="product.image"
        :alt="product.title"
        height="230"
        contain
        class="product-card__image"
      />

      <v-btn
        class="product-card__favorite"
        :class="{ 'product-card__favorite--active': isFavorite }"
        icon
        size="small"
        elevation="2"
        :aria-label="isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'"
        @click="toggleFavorite"
      >
        {{ isFavorite ? '♥' : '♡' }}
      </v-btn>
    </div>

    <v-card-item>
      <div class="product-card__category">
        {{ product.category }}
      </div>

      <v-card-title class="product-card__title">
        {{ product.title }}
      </v-card-title>
    </v-card-item>

    <v-card-text>
      <p class="product-card__description">
        {{ product.description }}
      </p>

      <div class="product-card__bottom">
        <span class="product-card__price">
          US$ {{ Number(product.price).toFixed(2) }}
        </span>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        variant="flat"
        block
        rounded="lg"
      >
        Ver producto
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  computed: {
    isFavorite() {
      return this.$store.getters['favorites/isFavorite'](
        this.product.id
      )
    }
  },

  methods: {
    toggleFavorite() {
      this.$store.dispatch(
        'favorites/toggleFavorite',
        this.product
      )
    }
  }
}
</script>

<style scoped>
.product-card {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card__image-container {
  position: relative;
  padding: 1rem;
  background: #fff;
}

.product-card__image {
  transition: transform 0.3s ease;
}

.product-card:hover .product-card__image {
  transform: scale(1.03);
}

.product-card__favorite {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 1.2rem;
}

.product-card__favorite--active {
  color: #e11d48;
}

.product-card__category {
  margin-bottom: 0.45rem;
  color: rgb(var(--v-theme-primary));
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-card__title {
  padding: 0;
  min-height: 52px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
  white-space: normal;
}

.product-card__description {
  display: -webkit-box;
  min-height: 63px;
  overflow: hidden;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.72;
  font-size: 0.88rem;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.product-card__bottom {
  margin-top: 1rem;
}

.product-card__price {
  font-size: 1.3rem;
  font-weight: 800;
}

.v-card-actions {
  margin-top: auto;
  padding: 0 16px 16px;
}
</style>