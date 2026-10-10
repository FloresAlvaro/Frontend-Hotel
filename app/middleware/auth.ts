import { useAuthStore } from '~/stores/auth'
import { safeRedirect } from '~/utils/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return
  const auth = useAuthStore()
  await auth.restoreSession()
  if (!auth.initialized) return
  if (to.path === '/auth/login') {
    if (auth.isAuthenticated) return navigateTo(safeRedirect(to.query.redirect))
  } else if (!auth.isAuthenticated) {
    return navigateTo({ path: '/auth/login', query: { redirect: to.fullPath } })
  }
})
