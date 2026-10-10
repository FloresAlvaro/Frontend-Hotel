<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <p class="app-footer__copyright">Todos los derechos reservados.</p>
      <div v-if="$slots.default" class="app-footer__content">
        <slot />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss" src="./AppFooter.scss"></style>
