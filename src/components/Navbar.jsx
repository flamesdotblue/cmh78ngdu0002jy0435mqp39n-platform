import React from 'react'
import { Rocket, User, Images, Wrench, Mail } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home', icon: Rocket },
  { id: 'portfolio', label: 'Portfolio', icon: Images },
  { id: 'tools', label: 'Tools & Tech', icon: Wrench },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-red-500/20 bg-white/60 p-2 shadow-lg backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-md">
              <Rocket className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">AI Commercial Ads</p>
              <p className="text-xs text-zinc-500">Innovation • Precision • Impact</p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/30 px-3 py-2 text-sm font-medium text-zinc-700 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-white/50 hover:text-red-600 active:translate-y-0 active:scale-[0.99]"
              >
                <Icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-red-600" />
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToId('contact')}
              className="rounded-xl border border-red-500/40 bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-700 shadow-inner shadow-red-200/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-red-500/30 hover:text-red-800 active:translate-y-0 active:scale-[0.99]"
            >
              Get a Quote
            </button>
            <button
              onClick={() => scrollToId('portfolio')}
              className="md:hidden rounded-xl border border-white/30 bg-white/30 px-3 py-2 text-sm font-medium text-zinc-700 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-white/50 hover:text-red-600 active:translate-y-0 active:scale-[0.99]"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
