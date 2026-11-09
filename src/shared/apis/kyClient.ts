import ky from 'ky'

export const apiClient = ky.create({
  prefix: import.meta.env.VITE_API_BASE_URL,
  retry: { limit: 0 },
})
