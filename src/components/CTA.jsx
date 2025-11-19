import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.1),transparent_40%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_40%)]" />
          <div className="relative p-10 md:p-16 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Kickstart your journey today</h3>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Join a cohort, pick a challenge, and build your way from idea to IPO with the community cheering you on.</p>
            <div className="mt-8">
              <a href="#home" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium shadow hover:shadow-lg transition">Apply Now</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
