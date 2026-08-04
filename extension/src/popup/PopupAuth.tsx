import React, { useState, useEffect } from "react";
import { extApiFetch, ExtApiError } from "../services/extApiClient";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
  setCachedUser,
  clearAllAuthData,
  getCachedUser,
  CachedUser
} from "../services/storage";

interface PopupAuthProps {
  onAuthChange: (authenticated: boolean) => void;
}

export default function PopupAuth({ onAuthChange }: PopupAuthProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const resp = await extApiFetch<{
        access_token: string;
        refresh_token: string;
        user: { id: string; email: string; is_email_verified: boolean };
      }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const { access_token, refresh_token, user } = resp.data;
      await setAccessToken(access_token);
      await setRefreshToken(refresh_token);
      await setCachedUser({
        id: user.id,
        email: user.email,
        is_email_verified: user.is_email_verified ?? false,
      });

      onAuthChange(true);
    } catch (err) {
      if (err instanceof ExtApiError && err.code === "AUTH_INVALID_CREDENTIALS") {
        setError("Invalid email or password.");
      } else {
        setError("Authentication failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-slate-100">Sign In</h2>
        <p className="text-xs text-slate-400 mt-1">Access your personal knowledge archive</p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl p-3 text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors"
            placeholder="jordan@example.com"
          />
        </div>

        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-800 text-slate-950 font-semibold rounded-xl py-2.5 text-sm transition-colors mt-2"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
