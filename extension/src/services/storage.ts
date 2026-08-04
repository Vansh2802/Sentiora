/**
 * Extension token storage via chrome.storage.local.
 *
 * Access tokens are kept in session-scoped storage for short-lived use.
 * Refresh tokens are kept in local storage for persistence across browser restarts.
 */

const ACCESS_TOKEN_KEY = "sentiora_access_token";
const REFRESH_TOKEN_KEY = "sentiora_refresh_token";
const USER_KEY = "sentiora_user";

// ── Access Token ──

export async function getAccessToken(): Promise<string | null> {
  const result = await chrome.storage.session.get(ACCESS_TOKEN_KEY);
  return (result[ACCESS_TOKEN_KEY] as string) ?? null;
}

export async function setAccessToken(token: string): Promise<void> {
  await chrome.storage.session.set({ [ACCESS_TOKEN_KEY]: token });
}

export async function clearAccessToken(): Promise<void> {
  await chrome.storage.session.remove(ACCESS_TOKEN_KEY);
}

// ── Refresh Token ──

export async function getRefreshToken(): Promise<string | null> {
  const result = await chrome.storage.local.get(REFRESH_TOKEN_KEY);
  return (result[REFRESH_TOKEN_KEY] as string) ?? null;
}

export async function setRefreshToken(token: string): Promise<void> {
  await chrome.storage.local.set({ [REFRESH_TOKEN_KEY]: token });
}

export async function clearRefreshToken(): Promise<void> {
  await chrome.storage.local.remove(REFRESH_TOKEN_KEY);
}

// ── Cached User ──

export interface CachedUser {
  id: string;
  email: string;
  is_email_verified: boolean;
}

export async function getCachedUser(): Promise<CachedUser | null> {
  const result = await chrome.storage.local.get(USER_KEY);
  return (result[USER_KEY] as CachedUser) ?? null;
}

export async function setCachedUser(user: CachedUser): Promise<void> {
  await chrome.storage.local.set({ [USER_KEY]: user });
}

// ── Clear All Auth Data ──

export async function clearAllAuthData(): Promise<void> {
  await chrome.storage.session.remove(ACCESS_TOKEN_KEY);
  await chrome.storage.local.remove([REFRESH_TOKEN_KEY, USER_KEY]);
}
