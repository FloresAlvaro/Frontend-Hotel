import { useAuthStore } from '~/stores/auth'
import { safeRedirect } from '~/utils/auth'
import { getHttpStatus, getLoginErrorMessage } from '~/utils/errors'
import { validateLoginField } from '~/utils/loginValidation'

export function useLoginForm() {
  const auth = useAuthStore()
  const route = useRoute()
  const email = ref('')
  const password = ref('')
  const passwordVisible = ref(false)
  const loading = ref(false)
  const { notify } = useNotifications()
  const fieldErrors = reactive({ email: '', password: '' })

  function validateField(field: 'email' | 'password') {
    fieldErrors[field] = validateLoginField(
      field,
      field === 'email' ? email.value : password.value
    )
  }

  function clearFieldError(field: 'email' | 'password') {
    fieldErrors[field] = ''
  }

  async function handleLogin() {
    if (loading.value) return

    validateField('email')
    validateField('password')
    if (fieldErrors.email || fieldErrors.password) {
      await nextTick()
      document
        .getElementById(fieldErrors.email ? 'login-email' : 'login-password')
        ?.focus()
      return
    }
    loading.value = true
    try {
      await auth.login(email.value, password.value)
      password.value = ''
      await navigateTo(safeRedirect(route.query.redirect))
      notify('success', 'Sesión iniciada', 'Bienvenido a Roomly.')
    } catch (cause) {
      notify(
        'error',
        getHttpStatus(cause) === 401
          ? 'Correo o contraseña incorrectos'
          : 'No se pudo iniciar sesión',
        getLoginErrorMessage(cause)
      )
    } finally {
      loading.value = false
    }
  }
  return {
    email,
    password,
    passwordVisible,
    loading,

    fieldErrors,
    validateField,
    clearFieldError,
    handleLogin
  }
}
