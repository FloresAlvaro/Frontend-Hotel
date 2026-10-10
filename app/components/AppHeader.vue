<template>
  <header class="app-header">
    <div class="app-header__container">
      <AppBrand />
      <div v-if="$slots.default" class="app-header__actions">
        <slot />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss" src="./AppHeader.scss"></style>
