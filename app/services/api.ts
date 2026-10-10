export const useApiClient = () => {
  const config = useRuntimeConfig()
  return $fetch.create({
    baseURL: config.public.apiBase,
    credentials: 'include',
    retry: 0
  })
}
