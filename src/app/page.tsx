const features = [
  "Next.js App Router + TypeScript",
  "Tailwind CSS ready for fast landing pages",
  "GitHub → Vercel deploy path verified",
];

const steps = ["Clone", "Customize", "Ship"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            OpenClaw app starter
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Launch mini apps and landing pages without rebuilding the lane.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A clean Next.js + Tailwind baseline wired for GitHub and Vercel, ready
            to fork into client demos, internal tools, lead magnets, and quick
            automation front-ends.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
              href="https://github.com/acheungopenclaw-afk/openclaw-next-starter"
            >
              View repo
            </a>
            <a
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              href="https://vercel.com/docs"
            >
              Start customizing
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 h-2 w-10 rounded-full bg-cyan-300" />
              <p className="text-lg font-medium text-slate-100">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
          {steps.map((step, index) => (
            <span key={step} className="rounded-full bg-white/10 px-4 py-2">
              {index + 1}. {step}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
