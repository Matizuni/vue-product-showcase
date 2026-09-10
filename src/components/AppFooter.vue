<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <p>
        © 2026 Vue Product Showcase
      </p>

      <p>
        Proyecto académico desarrollado con Vue 3 y Vue CLI
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  margin-top: 3rem;
  padding: 2rem 1.5rem;
  background: #111827;
  color: #d1d5db;
}

.app-footer__container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.app-footer p {
  margin: 0.3rem 0;
}
</style>