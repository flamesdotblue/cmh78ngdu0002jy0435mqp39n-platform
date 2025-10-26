import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-100 bg-white/80 py-10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} AI Commercial Ads — Built with a modern AI-first pipeline.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#tools"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded-lg border border-white/30 bg-white/40 px-3 py-1 text-zinc-700 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-white/60 hover:text-red-700"
            >
              Tools & Technology
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded-lg border border-red-500/40 bg-red-500/20 px-3 py-1 font-medium text-red-700 shadow-inner shadow-red-200/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-red-500/30 hover:text-red-800"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
