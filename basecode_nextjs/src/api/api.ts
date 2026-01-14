import axios, { type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'

import { authStore } from '@/stores/auth'

type ApiError = {
  kind: 'network' | 'http'
  message: string
  status?: number
  data?: unknown
}

export const api: AxiosInstance = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_IPINFO_HOST as string | undefined)?.trim() || undefined,
  timeout: 10_000,
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = authStore.getState().accessToken

  if (token) {
    config.headers.set?.('Authorization', `Bearer ${token}`)
    if (!config.headers.set) {
      ;(config.headers as unknown as Record<string, string>)['Authorization'] = `Bearer ${token}`
    }
  }

  return config
})

export function toApiError(err: unknown): ApiError {
  if (axios.isAxiosError(err)) {
    const ax = err as AxiosError

    if (!ax.response) {
      return { kind: 'network', message: ax.message || 'Network error' }
    }

    return {
      kind: 'http',
      message: ax.message || `Request failed with status ${ax.response.status}`,
      status: ax.response.status,
      data: ax.response.data
    }
  }

  return { kind: 'network', message: err instanceof Error ? err.message : 'Unknown error' }
}
