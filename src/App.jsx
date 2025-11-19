import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Journey />
      <Features />
      <CTA />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} EduOrbit. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-slate-400 hover:text-white transition" href="#">Privacy</a>
            <a className="text-slate-400 hover:text-white transition" href="#">Terms</a>
            <a className="text-slate-400 hover:text-white transition" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
