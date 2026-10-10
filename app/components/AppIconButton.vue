<script setup lang="ts">
import type { AppIconButtonProps } from './button.types'

withDefaults(defineProps<AppIconButtonProps>(), { showLabel: false })
</script>

<template>
  <AppButton
    class="app-icon-button"
    :class="{ 'app-icon-button--icon-only': !showLabel }"
    :variant="variant"
    :size="size"
    :type="type"
    :disabled="disabled"
    :loading="loading"
    :block="block"
    :aria-label="label"
    :title="showLabel ? undefined : label"
  >
    <UIcon
      v-if="!loading"
      :name="icon"
      class="app-icon-button__icon"
      aria-hidden="true"
    />
    <span v-if="showLabel">{{ label }}</span>
  </AppButton>
</template>

<style scoped lang="scss" src="./AppIconButton.scss"></style>
