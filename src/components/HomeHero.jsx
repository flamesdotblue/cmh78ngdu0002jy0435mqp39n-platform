import React from 'react'
import { Sparkles, Play } from 'lucide-react'

export default function HomeHero() {
  return (
    <section id="home" className="relative isolate pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-red-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/50 px-3 py-1 text-xs font-medium text-red-700 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> AI-Powered Commercials
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Futuristic ads that convert, crafted by AI and creative strategy
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600">
              I design, script, and produce high-impact commercial ads using cutting-edge AI tools. From concept to delivery, expect cinematic visuals, tight messaging, and measurable performance.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-red-500/50 bg-red-500/20 px-5 py-3 font-semibold text-red-700 shadow-inner shadow-red-200/40 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-red-500/30 hover:text-red-800 active:translate-y-0 active:scale-[0.99]"
              >
                <Play className="h-4 w-4" /> View Portfolio
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/40 px-5 py-3 font-semibold text-zinc-800 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-white/60 hover:text-red-700 active:translate-y-0 active:scale-[0.99]"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-white to-red-50 p-1 shadow-2xl">
              <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(244,63,94,0.10),transparent),radial-gradient(800px_400px_at_110%_120%,rgba(244,63,94,0.12),transparent)]" />
              <div className="relative z-10 flex h-full flex-col items-start justify-end gap-3 p-6">
                <p className="text-xs uppercase tracking-widest text-red-600/80">Showreel</p>
                <h3 className="text-2xl font-bold text-zinc-900">Cinematic AI Ad Montages</h3>
                <p className="max-w-md text-sm text-zinc-600">
                  A curated selection of AI-generated visuals, product showcases, and performance snippets across retail, tech, and lifestyle brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
