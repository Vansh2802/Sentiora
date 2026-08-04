import { useState, useEffect } from "react";
import { APP_NAME } from "@shared/constants/app";
import PopupAuth from "./PopupAuth";
import { getAccessToken, getCachedUser, clearAllAuthData, CachedUser } from "../services/storage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<CachedUser | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  async function checkAuth() {
    try {
      const token = await getAccessToken();
      const cached = await getCachedUser();
      if (token && cached) {
        setIsAuthenticated(true);
        setUser(cached);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setCheckingAuth(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  async function handleSignOut() {
    await clearAllAuthData();
    setIsAuthenticated(false);
    setUser(null);
  }

  if (checkingAuth) {
    return (
      <main className="min-h-[320px] w-[360px] bg-slate-950 px-5 py-6 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
      </main>
    );
  }

  return (
    <main className="min-h-[320px] w-[360px] bg-slate-950 px-5 py-6 text-white font-sans">
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-md">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <div>
            <h1 className="text-lg font-semibold tracking-wide text-slate-100">{APP_NAME}</h1>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-teal-400">
              Personal Vault Extension
            </p>
          </div>
          {isAuthenticated && (
            <button
              onClick={handleSignOut}
              className="text-[10px] bg-white/10 hover:bg-white/20 text-slate-300 font-semibold rounded-lg px-2.5 py-1 transition-colors"
            >
              Sign Out
            </button>
          )}
        </div>

        {isAuthenticated ? (
          <div className="space-y-3 pt-1">
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Connected Vault Account
              </p>
              <p className="text-sm font-medium text-slate-200 truncate">{user?.email}</p>
            </div>

            <div className="flex items-center gap-3 bg-teal-500/10 border border-teal-500/20 rounded-2xl p-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 animate-pulse" />
              <p className="text-xs font-medium text-teal-300">
                Meaningful Capture Engine active.
              </p>
            </div>
          </div>
        ) : (
          <PopupAuth onAuthChange={checkAuth} />
        )}
      </div>
    </main>
  );
}
