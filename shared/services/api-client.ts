import { serverConfig } from "../../config"

const { apiUrl, apiWard, apiKey } = serverConfig

type FetchOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>
}

const buildHeaders = (headers?: HeadersInit, includeApiKey = false) => {
  const finalHeaders = new Headers(headers)
  finalHeaders.set("Content-Type", "application/json")

  // Only send the key to our own backend, never to third-party URLs
  if (includeApiKey && apiKey) {
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

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
  }
}

const ensureSuccess = async (response: Response) => {
  if (!response.ok) {
    // Cloudflare sets cf-mitigated when it serves a bot challenge instead of forwarding to the API
    if (response.headers.get("cf-mitigated") === "challenge") {
      throw new ApiError(
        response.status,
        `Request to ${response.url} was blocked by a Cloudflare bot challenge before reaching the API ` +
          `(cf-ray: ${response.headers.get("cf-ray")}, at ${new Date().toISOString()}). ` +
          "The API's Cloudflare settings need to allow server-to-server requests from this host."
      )
    }

    const message = await response.text()
    const credentialHint =
      response.status === 401 || response.status === 403 ? " Check the LDW_KEY and LDW_WARD_PATH environment variables." : ""

    throw new ApiError(
      response.status,
      `Request to ${response.url} failed (${response.status}): ${(message || response.statusText).slice(0, 500)}${credentialHint}`
    )
  }

  return response
}

const request = async (url: string, options?: FetchOptions, includeApiKey = false) => {
  const response = await fetch(url, {
    ...options,
    headers: buildHeaders(options?.headers, includeApiKey),
  })

  return ensureSuccess(response)
}

export const fetchJson = async <T>(url: string, options?: FetchOptions): Promise<T> => {
  const response = await request(url, options)
  return response.json() as Promise<T>
}

export const fetchText = async (url: string, options?: FetchOptions): Promise<string> => {
  const response = await request(url, options)
  return response.text()
}

export const fetchWardJson = async <T>(path: string, options?: FetchOptions): Promise<T> => {
  const response = await request(buildUrl(path, options?.query), options, true)
  return response.json() as Promise<T>
}

export const getWardPath = (resource: string) => `/${resource}/${apiWard}`

/**
 * Resolves to `fallback` instead of throwing, so a backend outage or missing data
 * renders an empty section rather than a 500 for the whole page.
 */
export const withFallback = async <T>(promise: Promise<T>, fallback: T): Promise<T> => {
  try {
    return await promise
  } catch (error) {
    // 404 is the API's normal "nothing posted yet" response (e.g. no sacrament agenda)
    if (!(error instanceof ApiError && error.status === 404)) {
      console.error(error)
    }
    return fallback
  }
}
