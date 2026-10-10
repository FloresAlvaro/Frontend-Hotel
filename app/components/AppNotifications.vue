<script setup lang="ts">
const { notifications, dismiss } = useNotifications()
const timers = new Map<string, ReturnType<typeof setTimeout>>()
const duration = 5000

onMounted(() => {
  watch(
    () => notifications.value.map((notification) => notification.id),
    (ids) => {
      for (const [id, timer] of timers) {
        if (!ids.includes(id)) {
          clearTimeout(timer)
          timers.delete(id)
        }
      }
      for (const id of ids) {
        if (!timers.has(id)) {
          timers.set(
            id,
            setTimeout(() => dismiss(id), duration)
          )
        }
      }
    },
    { immediate: true }
  )
})

onBeforeUnmount(() => {
  for (const timer of timers.values()) clearTimeout(timer)
  timers.clear()
})
</script>

<template>
  <div
    class="app-notifications"
    :style="{ '--notification-duration': `${duration}ms` }"
    aria-label="Notificaciones"
  >
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="app-notifications__alert"
      :class="`app-notifications__alert--${notification.type}`"
      :role="notification.type === 'error' ? 'alert' : 'status'"
      aria-atomic="true"
    >
      <div class="app-notifications__message">
        <p class="app-notifications__title">{{ notification.title }}</p>
        <p
          v-if="notification.description"
          class="app-notifications__description"
        >
          {{ notification.description }}
        </p>
      </div>
      <button
        type="button"
        class="app-notifications__close"
        :aria-label="`Cerrar notificación: ${notification.title}`"
        @click="dismiss(notification.id)"
      >
        ×
      </button>
      <div class="app-notifications__progress" aria-hidden="true">
        <span class="app-notifications__remaining" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./AppNotifications.scss"></style>
