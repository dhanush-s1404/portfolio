import { Award, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata via Forage',
    year: '2026',
    icon: '🤖',
    category: 'AI & Analytics',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia via Forage',
    year: '2026',
    icon: '📊',
    category: 'Data Analytics',
  },
  {
    title: 'Resume Writing with AI Support Job Simulation',
    issuer: 'Forage',
    year: '2026',
    icon: '📝',
    category: 'Professional Skills',
  },
  {
    title: 'Advance Diploma in Python Programming',
    issuer: 'CSC',
    year: '2023',
    icon: '🐍',
    category: 'Programming',
  },
]

export default function Certifications() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="certifications"
      className="py-24 px-4 relative overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light-card/30 to-transparent dark:via-dark-card/20" />

      <div className="max-w-4xl mx-auto relative z-10 reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-primary font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-3">04. Certifications</span>
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            Certifications & Learning
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-lg mx-auto">
            Professional certifications and simulations that validate my expertise.
          </p>
        </div>

        {/* Timeline style */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-purple/30 hidden sm:block" aria-hidden="true" />

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-hover group relative pl-0 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary hidden sm:flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border group-hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-3xl shrink-0 p-2.5 rounded-xl bg-primary/5 dark:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      {cert.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/10">
                          {cert.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <CheckCircle2 size={12} className="text-green-500" />
                        <span className="text-[11px] text-light-muted dark:text-dark-muted font-medium">{cert.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 p-4 rounded-2xl bg-primary/5 border border-primary/10">
          <p className="text-sm text-light-muted dark:text-dark-muted">
            🎯 Always learning, always growing — currently exploring <strong className="text-primary">Generative AI</strong> and <strong className="text-primary">Cloud Computing</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
