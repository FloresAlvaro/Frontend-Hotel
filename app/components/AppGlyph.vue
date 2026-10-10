<script setup lang="ts">
defineProps<{ name: 'mail' | 'lock' | 'eye' | 'eye-off' }>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 6 8 6 8-6" />
    </template>
    <template v-else-if="name === 'lock'">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
    </template>
    <template v-else>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path v-if="name === 'eye-off'" d="m3 3 18 18" />
    </template>
  </svg>
</template>

<style scoped>
svg {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
}
</style>
