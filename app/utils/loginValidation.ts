export function validateLoginField(
  field: 'email' | 'password',
  value: string
): string {
  if (field === 'password') return value ? '' : 'Ingresa tu contraseña.'
  if (!value.trim()) return 'Ingresa tu correo electrónico.'
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? ''
    : 'Ingresa un correo electrónico válido.'
}
