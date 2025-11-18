import React from 'react'
import Hero from './components/Hero'
import Definition from './components/Definition'
import Origin from './components/Origin'
import Effects from './components/Effects'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />

      <main className="relative">
        <Hero />
        <Definition />
        <Origin />
        <Effects />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-blue-200/80 text-sm">
          هذا المحتوى لأغراض توعوية ولا يُعد نصيحة طبية. في حال وجود استفسارات صحية، يُنصح باستشارة مختص.
        </div>
      </footer>
    </div>
  )
}

export default App
