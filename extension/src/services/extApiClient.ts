/**
 * Extension API client for communicating with the Sentiora backend.
 * Uses fetch (available in service workers) with automatic token attachment
 * and silent 401 refresh via chrome.storage.
 */

import {
  clearAllAuthData,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "./storage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";
const API_PREFIX = `${API_BASE_URL}/api/v1`;

interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  error?: { code: string; message: string };
}

let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;

async function attemptTokenRefresh(): Promise<string | null> {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) return null;

  try {
    const resp = await fetch(`${API_PREFIX}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (!resp.ok) {
      await clearAllAuthData();
      return null;
    }

    const json: ApiResponse<{ access_token: string; refresh_token: string }> = await resp.json();
    await setAccessToken(json.data.access_token);
    await setRefreshToken(json.data.refresh_token);
    return json.data.access_token;
  } catch {
    await clearAllAuthData();
    return null;
  }
}

export async function extApiFetch<T = unknown>(
  path: string,
  init: RequestInit = {},
): Promise<ApiResponse<T>> {
  const accessToken = await getAccessToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init.headers as Record<string, string> | undefined),
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  let resp = await fetch(`${API_PREFIX}${path}`, { ...init, headers });

  // On 401, attempt a single refresh
  if (resp.status === 401) {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshPromise = attemptTokenRefresh().finally(() => {
        isRefreshing = false;
        refreshPromise = null;
      });
    }

    const newToken = await refreshPromise;
    if (newToken) {
      headers["Authorization"] = `Bearer ${newToken}`;
      resp = await fetch(`${API_PREFIX}${path}`, { ...init, headers });
    }
  }

  const json: ApiResponse<T> = await resp.json();

  if (!resp.ok) {
    throw new ExtApiError(
      json.error?.message ?? "Request failed",
      json.error?.code ?? "UNKNOWN_ERROR",
      resp.status,
    );
  }

  return json;
}

export class ExtApiError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ExtApiError";
  }
}
