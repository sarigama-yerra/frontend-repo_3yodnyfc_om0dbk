import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Future of Learning
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold text-white tracking-tight">
            From Idea to IPO: Learn by Building
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Explore a hands-on learning journey where every concept becomes a project. Interactive 3D, smooth scroll effects, and a story that guides you from spark to scale.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#journey" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">Start the Journey</a>
            <a href="#features" className="inline-flex items-center rounded-lg bg-slate-800/70 text-white px-5 py-3 font-medium border border-white/10 hover:bg-slate-800 transition">See Features</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
