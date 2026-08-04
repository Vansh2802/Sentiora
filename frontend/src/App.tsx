import { APP_NAME } from "@shared/constants/app";

export const foundationHeading = `${APP_NAME} frontend foundation is ready.`;

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-ink-50 via-white to-teal-500/10 text-ink-900">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
        <div className="grid w-full gap-10 rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-soft backdrop-blur sm:p-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
              Phase 0 Scaffold
            </p>
            <div className="space-y-3">
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                {foundationHeading}
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                This is the initial Vite + React + TypeScript + Tailwind scaffold. It exists
                only to verify the project runs and provide a stable base for later phases.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-teal-500/15 bg-teal-500/5 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-teal-700">
              Runtime Check
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p>• Vite dev server</p>
              <p>• Strict TypeScript</p>
              <p>• Tailwind foundation</p>
              <p>• Shared package import aliases</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
