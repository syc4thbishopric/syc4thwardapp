import { config } from "../../config"

const { apiUrl, apiWard } = config
const apiKey = process.env.LATTER_DAY_API_TOKEN || process.env.LDW_KEY

type FetchOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>
}

const buildHeaders = (headers?: HeadersInit) => {
  const finalHeaders = new Headers(headers)
  finalHeaders.set("Content-Type", "application/json")

  if (apiKey) {
    finalHeaders.set("x-api-key", apiKey)
  }

  return finalHeaders
}

const buildUrl = (path: string, query?: FetchOptions["query"]) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  const url = new URL(`${apiUrl}${normalizedPath}`)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value))
      }
    })
  }

  return url.toString()
}

const ensureSuccess = async (response: Response) => {
  if (!response.ok) {
    const message = await response.text()
    const credentialHint =
      response.status === 401 || response.status === 403
        ? " Check the backend API token in LATTER_DAY_API_TOKEN or LDW_KEY."
        : ""

    throw new Error(`Request failed (${response.status}): ${message || response.statusText}${credentialHint}`)
  }

  return response
}

export const fetchJson = async <T>(url: string, options?: FetchOptions): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    headers: buildHeaders(options?.headers),
  })

  await ensureSuccess(response)
  return response.json() as Promise<T>
}

export const fetchText = async (url: string, options?: FetchOptions): Promise<string> => {
  const response = await fetch(url, {
    ...options,
    headers: buildHeaders(options?.headers),
  })

  await ensureSuccess(response)
  return response.text()
}

export const fetchWardJson = async <T>(path: string, options?: FetchOptions): Promise<T> => {
  return fetchJson<T>(buildUrl(path, options?.query), options)
}

export const getWardPath = (resource: string) => `/${resource}/${apiWard}`
