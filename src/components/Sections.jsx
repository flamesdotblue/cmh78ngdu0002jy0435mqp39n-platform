import React from 'react'
import { Star, Sparkles } from 'lucide-react'

const portfolioItems = [
  {
    title: 'Luxury Fragrance Launch',
    tag: 'Beauty',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Next-Gen Smartphone Reveal',
    tag: 'Tech',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Eco Sportswear Campaign',
    tag: 'Fashion',
    img: 'https://images.unsplash.com/photo-1520975693416-35a1cb8a5a79?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Artisan Coffee Story',
    tag: 'F&B',
    img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Electric Car Awareness',
    tag: 'Automotive',
    img: 'https://images.unsplash.com/photo-1511396270961-5cf3baf01a1f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Smart Home Essentials',
    tag: 'Lifestyle',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop',
  },
]

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/60 px-3 py-1 text-xs font-medium text-red-700 backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-zinc-600">{subtitle}</p>}
    </div>
  )
}

export default function Sections() {
  return (
    <div className="space-y-28 py-24">
      {/* Portfolio */}
      <section id="portfolio" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Work Showcase"
            title="Portfolio"
            subtitle="A selection of AI-crafted commercials designed for performance and brand storytelling."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, idx) => (
              <article
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-white shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-zinc-900/0 to-transparent" />
                </div>
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                  {item.tag}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    Concepting, script, AI visual generation, motion design, and performance edits.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="rounded-xl border border-white/30 bg-white/50 px-3 py-2 text-xs font-medium text-zinc-800 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-white/70 hover:text-red-700 active:translate-y-0 active:scale-[0.99]">
                      Case Study
                    </button>
                    <button className="rounded-xl border border-red-500/40 bg-red-500/20 px-3 py-2 text-xs font-semibold text-red-700 shadow-inner shadow-red-200/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-red-500/30 hover:text-red-800 active:translate-y-0 active:scale-[0.99]">
                      Watch Ad
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section id="tools" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Stack"
            title="Tools & Technology"
            subtitle="Best-in-class AI tools integrated into a reliable, creative pipeline."
          />

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/60 backdrop-blur">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                    alt="ChatGPT Logo"
                    className="h-9 w-9"
                    onError={(e) => {
                      e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">ChatGPT</h3>
                  <p className="text-sm text-zinc-600">Ideation • Scriptwriting • Messaging</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                I leverage ChatGPT to rapidly iterate on creative concepts, brand-aligned scripts, hooks, and CTAs. It helps refine tone, ensure clarity, and tailor messaging to audience segments.
              </p>
              <a
                href="https://chat.openai.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/50 px-3 py-2 text-xs font-medium text-zinc-800 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-white/70 hover:text-red-700"
              >
                Learn more
              </a>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/60 backdrop-blur">
                  <img
                    src="https://www.weavy.com/hubfs/Weavy-Logo.svg"
                    alt="Weavy.ai Logo"
                    className="h-9 w-9"
                    onError={(e) => {
                      e.currentTarget.src = 'https://www.weavy.com/hubfs/Weavy%20Logo/Weavy-Logo-Black.svg'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Weavy.ai</h3>
                  <p className="text-sm text-zinc-600">Collaboration • Workflow • Integrations</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600">
                Weavy.ai powers collaborative review and feedback inside my creative workflow—threaded comments on storyboards, asset handoff, and versioning to keep production moving smoothly.
              </p>
              <a
                href="https://www.weavy.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/50 px-3 py-2 text-xs font-medium text-zinc-800 shadow-[0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-red-500/30 hover:bg-white/70 hover:text-red-700"
              >
                Explore Weavy.ai
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-50 p-4 text-sm text-red-800">
            The logos above are the official brand marks displayed for identification; each trademark is owned by its respective company.
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Who I Am"
            title="About Me"
            subtitle="A hybrid creative—part strategist, part filmmaker, part prompt engineer."
          />
          <div className="mt-10 grid items-start gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4 text-zinc-700">
              <p>
                I create commercial ads that merge human storytelling with AI acceleration. My process is data-informed and audience-first, distilled into sharp visuals and copy.
              </p>
              <p>
                From rapid ideation to final edit, I orchestrate a pipeline that includes AI script drafting, visual generation, motion design, and performance iteration.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Creative strategy and scripting',
                  'AI image/video generation and compositing',
                  'Cinematic motion graphics and sound design',
                  'Performance editing and A/B variants',
                ].map((txt, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-red-600" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-red-500/20 bg-white p-6 shadow-md">
              <h4 className="font-semibold">Capabilities</h4>
              <div className="mt-3 grid gap-2 text-sm text-zinc-600">
                <p><span className="font-medium text-zinc-800">Formats:</span> 6s, 15s, 30s, 60s, UGC, product demos, explainers</p>
                <p><span className="font-medium text-zinc-800">Platforms:</span> TVC, YouTube, TikTok, Meta, programmatic</p>
                <p><span className="font-medium text-zinc-800">Deliverables:</span> scripts, storyboards, ads, cutdowns, thumbnails</p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/20 px-3 py-2 text-xs font-semibold text-red-700 shadow-inner shadow-red-200/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-red-500/30 hover:text-red-800"
              >
                Work with me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Let’s Collaborate"
            title="Contact"
            subtitle="Tell me about your brand, goals, and timeline. I’ll reply within 24 hours."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const data = Object.fromEntries(new FormData(e.currentTarget))
                alert(`Thanks! I will get back to you shortly.\n\nName: ${data.name}\nEmail: ${data.email}`)
                e.currentTarget.reset()
              }}
              className="rounded-3xl border border-red-500/20 bg-white p-6 shadow-md"
            >
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm shadow-inner placeholder:text-zinc-400 focus:border-red-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm shadow-inner placeholder:text-zinc-400 focus:border-red-400 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm shadow-inner placeholder:text-zinc-400 focus:border-red-400 focus:outline-none"
                    placeholder="What do you want to create?"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="rounded-xl border border-red-500/40 bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-700 shadow-inner shadow-red-200/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-red-500/30 hover:text-red-800 active:translate-y-0 active:scale-[0.99]"
                  >
                    Send Message
                  </button>
                  <span className="text-xs text-zinc-500">No spam. Just a thoughtful reply.</span>
                </div>
              </div>
            </form>

            <div className="rounded-3xl border border-red-500/20 bg-white p-6 shadow-md">
              <h4 className="text-lg font-semibold text-zinc-900">Project Fit</h4>
              <p className="mt-2 text-sm text-zinc-600">
                Ideal for brands seeking cinematic visuals, crisp messaging, and performance-driven edits across paid social and web.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-zinc-700">
                <p>• Concept-to-delivery creative support</p>
                <p>• Fast turnarounds with AI acceleration</p>
                <p>• A/B variants and data-informed iterations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
