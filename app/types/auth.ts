export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'manager' | 'receptionist'
  is_active: boolean
  password_setup_required: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}
