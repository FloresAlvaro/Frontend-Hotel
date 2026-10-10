import { defineStore } from 'pinia'
import { useAuthService } from '~/services/auth'
import type { User } from '~/types/auth'
import { getHttpStatus } from '~/utils/errors'

export const useAuthStore = defineStore('auth', () => {
  const service = useAuthService()
  const { notify } = useNotifications()
  const user = ref<User | null>(null)
  const initialized = ref(false)
  const sessionError = ref<string | null>(null)
  const isAuthenticated = computed(() => user.value !== null)
  let pending: Promise<void> | null = null

  const restoreSession = async () => {
    if (import.meta.server || initialized.value) return
    if (pending) return pending
    pending = (async () => {
      sessionError.value = null
      try {
        const response = await service.profile()
        user.value = response.data
        initialized.value = true
      } catch (error) {
        const status = getHttpStatus(error)
        if (status === 401 || status === 403) {
          user.value = null
          initialized.value = true
        } else {
          sessionError.value =
            'No se pudo comprobar la sesión. Revisa la conexión e intenta nuevamente.'
          notify('error', 'Error de conexión', sessionError.value)
        }
      } finally {
        pending = null
      }
    })()
    return pending
  }

  const login = async (email: string, password: string) => {
    const response = await service.login(email, password)
    if (!response.success || !response.data?.user)
      throw new Error('Respuesta de autenticación inválida')
    user.value = response.data.user
    initialized.value = true
    sessionError.value = null
  }

  const logout = async () => {
    await service.logout()
    user.value = null
    initialized.value = true
    await navigateTo('/auth/login')
  }

  return {
    user,
    initialized,
    sessionError,
    isAuthenticated,
    restoreSession,
    login,
    logout
  }
})
