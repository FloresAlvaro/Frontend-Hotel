<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' })
</script>

<template>
  <NuxtLink
    to="/"
    class="app-brand"
    :class="{ 'app-brand--sm': size === 'sm' }"
    aria-label="Roomly, inicio"
  >
    <span class="app-brand__logo" aria-hidden="true">R</span>
    <span aria-hidden="true">oomly</span>
  </NuxtLink>
</template>

<style scoped lang="scss" src="./AppBrand.scss"></style>
