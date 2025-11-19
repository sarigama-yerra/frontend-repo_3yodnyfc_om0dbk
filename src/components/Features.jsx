import { motion } from 'framer-motion'
import { Users, BookOpen, Cpu, LineChart, Layers, Shield } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Project-first Content',
    desc: 'Courses are built around real-world builds with milestones and reviews.'
  },
  {
    icon: Cpu,
    title: 'AI Co-Pilot',
    desc: 'Get unstuck fast with contextual hints, code suggestions, and feedback.'
  },
  {
    icon: Users,
    title: 'Mentor Network',
    desc: 'Book live sessions with industry experts and alumni mentors.'
  },
  {
    icon: LineChart,
    title: 'Career Outcomes',
    desc: 'Portfolio, referrals, and hiring partnerships that lead to offers.'
  },
  {
    icon: Layers,
    title: 'Paths & Stacks',
    desc: 'Choose your stack: web, data, ML, product, or cloud — mix and match.'
  },
  {
    icon: Shield,
    title: 'Verified Credentials',
    desc: 'Shareable skill proofs powered by on-chain attestations.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Engineered for outcomes</h2>
          <p className="mt-4 text-slate-300 text-lg">Everything you need to go from zero to founder-ready — and beyond.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="text-slate-300 mt-1">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
