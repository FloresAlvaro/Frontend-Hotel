export function getHttpStatus(error: unknown): number | undefined {
  if (!error || typeof error !== 'object') return undefined
  if ('statusCode' in error && typeof error.statusCode === 'number')
    return error.statusCode
  if ('status' in error && typeof error.status === 'number') return error.status
  return undefined
}

const loginMessages: Record<number, string> = {
  401: 'El correo electrónico o la contraseña son incorrectos. Verifica tus datos e intenta nuevamente.',
  403: 'La cuenta está inactiva o no tiene acceso.',
  429: 'Demasiados intentos. Espera unos minutos.'
}

export function getLoginErrorMessage(error: unknown): string {
  return (
    loginMessages[getHttpStatus(error) ?? 0] ??
    'No se pudo iniciar sesión. Revisa la conexión e intenta nuevamente.'
  )
}
