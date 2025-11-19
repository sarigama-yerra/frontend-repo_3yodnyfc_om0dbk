import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-md" />
          <span className="text-white font-semibold tracking-tight">EduOrbit</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#journey" className="text-slate-300 hover:text-white transition">Journey</a>
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#cta" className="text-slate-300 hover:text-white transition">Get Started</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-3 pt-3">
            <a href="#journey" className="text-slate-200" onClick={() => setOpen(false)}>Journey</a>
            <a href="#features" className="text-slate-200" onClick={() => setOpen(false)}>Features</a>
            <a href="#cta" className="text-slate-200" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
