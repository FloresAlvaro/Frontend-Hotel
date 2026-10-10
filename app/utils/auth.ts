export function safeRedirect(value: unknown): string {
  if (
    typeof value !== 'string' ||
    !value.startsWith('/') ||
    value.startsWith('//') ||
    value.includes('\\') ||
    Array.from(value).some((character) => character.charCodeAt(0) <= 32)
  )
    return '/'
  const path = value.split(/[?#]/)[0]
  if (path === '/auth' || path?.startsWith('/auth/')) return '/'
  // Solo existe una página privada por ahora.
  return path === '/' ? value : '/'
}
