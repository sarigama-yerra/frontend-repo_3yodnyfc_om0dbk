import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket, Lightbulb, Workflow, GraduationCap, Building2, Banknote } from 'lucide-react'
import { useRef } from 'react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Idea',
    desc: 'Capture the spark. Validate with mentors and peers in a collaborative studio.',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: Workflow,
    title: 'Prototype',
    desc: 'Build your MVP with guided templates, AI pair-programming, and instant feedback.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: GraduationCap,
    title: 'Launch',
    desc: 'Ship to real users. Iterate with analytics, A/B tests, and community reviews.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    icon: Building2,
    title: 'Scale',
    desc: 'Level up ops, security, and performance with battle-tested playbooks.',
    color: 'from-violet-400 to-fuchsia-500'
  },
  {
    icon: Banknote,
    title: 'IPO',
    desc: 'Master fundraising, governance, and compliance to ring the bell.',
    color: 'from-pink-400 to-rose-500'
  },
]

export default function Journey() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6])
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="journey" ref={ref} className="relative py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,#000_40%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.08),transparent_30%)]" />
      </div>

      <motion.div style={{ opacity, y }} className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <Rocket className="h-3.5 w-3.5 text-emerald-400" />
            Your path, chapter by chapter
          </span>
          <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-white">Narrated journey from classroom to bell ring</h2>
          <p className="mt-4 text-slate-300 text-lg">Scroll to uncover each phase — the UI animates in sync with your progress.</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc, color }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-slate-300 mt-1">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
