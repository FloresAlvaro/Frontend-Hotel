import type { ApiResponse, User } from '~/types/auth'
import { useApiClient } from './api'

export const useAuthService = () => {
  const api = useApiClient()
  return {
    login: (email: string, password: string) =>
      api<ApiResponse<{ user: User }>>('/users/login', {
        method: 'POST',
        body: { email, password }
      }),
    profile: () => api<ApiResponse<User>>('/users/profile'),
    logout: () => api<ApiResponse<null>>('/account/logout', { method: 'POST' })
  }
}
