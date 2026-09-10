<template>
  <header class="app-header">
    <div class="app-header__container">

      <div class="app-header__brand">
        <div class="app-header__logo">
          V
        </div>

        <div>
          <h1 class="app-header__title">
            Vue Product Showcase
          </h1>

          <p class="app-header__subtitle">
            Catálogo interactivo de productos tecnológicos
          </p>
        </div>
      </div>

      <div class="app-header__actions">

        <div
          class="app-header__favorites"
          aria-label="Cantidad de favoritos"
        >
          <span class="app-header__heart">
            ♥
          </span>

          <span>
            {{ favoritesCount }}
          </span>
        </div>

        <v-btn
          icon
          variant="tonal"
          size="small"
          class="app-header__theme-button"
          :aria-label="
            isDark
              ? 'Activar modo claro'
              : 'Activar modo oscuro'
          "
          @click="toggleTheme"
        >
          <span class="app-header__theme-icon">
            {{ isDark ? '☀️' : '🌙' }}
          </span>
        </v-btn>

      </div>
    </div>
  </header>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  name: 'AppHeader',

  setup() {
    const theme = useTheme()

    return {
      theme
    }
  },

  computed: {
    favoritesCount() {
      return this.$store.getters[
        'favorites/favoritesCount'
      ]
    },

    isDark() {
      return this.theme.global.current.value.dark
    }
  },

  methods: {
    toggleTheme() {
      this.theme.global.name.value =
        this.isDark
          ? 'light'
          : 'dark'
    }
  }
}
</script>

<style scoped>
.app-header {
  width: 100%;
  padding: 1.7rem 1.5rem;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  border-bottom: 1px solid
    rgba(var(--v-border-color), var(--v-border-opacity));
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
}

.app-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.app-header__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  border-radius: 14px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  font-size: 1.4rem;
  font-weight: 900;
  box-shadow: 0 8px 20px
    rgba(var(--v-theme-primary), 0.25);
}

.app-header__title {
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 800;
  line-height: 1.15;
}

.app-header__subtitle {
  margin: 0.4rem 0 0;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.65;
  font-size: 0.95rem;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.app-header__favorites {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-width: 62px;
  min-height: 40px;
  padding: 0.55rem 0.85rem;
  border: 1px solid
    rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 999px;
  background: rgba(var(--v-theme-surface-variant), 0.3);
  font-weight: 800;
}

.app-header__heart {
  color: #e11d48;
  font-size: 1rem;
}

.app-header__theme-button {
  flex: 0 0 auto;
}

.app-header__theme-icon {
  font-size: 1.05rem;
}

@media (max-width: 650px) {
  .app-header {
    padding: 1.25rem 1rem;
  }

  .app-header__container {
    align-items: flex-start;
    gap: 1rem;
  }

  .app-header__brand {
    gap: 0.7rem;
  }

  .app-header__logo {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
    border-radius: 11px;
    font-size: 1.1rem;
  }

  .app-header__subtitle {
    max-width: 210px;
    font-size: 0.8rem;
  }

  .app-header__actions {
    gap: 0.45rem;
  }

  .app-header__favorites {
    min-width: 50px;
    min-height: 36px;
    padding: 0.4rem 0.65rem;
  }
}

@media (max-width: 480px) {
  .app-header__subtitle {
    display: none;
  }
}
</style>