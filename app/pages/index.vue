<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({ middleware: 'auth' })
const auth = useAuthStore()
const closing = ref(false)
const { notify } = useNotifications()

async function retrySession() {
  await auth.restoreSession()
  if (auth.initialized && !auth.isAuthenticated) await navigateTo('/auth/login')
}
async function logout() {
  if (closing.value) return
  closing.value = true
  try {
    await auth.logout()
    notify('success', 'Sesión cerrada', 'Has salido de Roomly.')
  } catch {
    notify('error', 'No se pudo cerrar la sesión', 'Intenta nuevamente.')
  } finally {
    closing.value = false
  }
}
</script>

<template>
  <section>
    <ClientOnly>
      <template v-if="auth.isAuthenticated">
        <h1 class="text-2xl font-bold">Bienvenido, {{ auth.user?.name }}</h1>
        <p class="my-4">Tu sesión en Roomly está activa.</p>
        <AppButton variant="secondary" :loading="closing" @click="logout"
          >Cerrar sesión</AppButton
        >
      </template>
      <div v-else-if="auth.sessionError">
        <AppButton class="mt-4" @click="retrySession"
          >Reintentar conexión</AppButton
        >
      </div>
      <p v-else role="status">Comprobando sesión…</p>
      <template #fallback><p role="status">Comprobando sesión…</p></template>
    </ClientOnly>
  </section>
</template>
