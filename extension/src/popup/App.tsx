import { APP_NAME } from "@shared/constants/app";

import { createStatusMessage } from "../shared/utils";

export const extensionHeadline = `${APP_NAME} extension foundation`;

export default function App() {
  return (
    <main className="min-h-[320px] w-[360px] bg-slate-950 px-5 py-6 text-white">
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
          Manifest V3 Scaffold
        </p>
        <h1 className="text-2xl font-semibold">{extensionHeadline}</h1>
        <p className="text-sm leading-6 text-slate-300">
          {createStatusMessage(APP_NAME)} This shell is intentionally minimal and does not
          yet talk to the backend.
        </p>
      </div>
    </main>
  );
}
