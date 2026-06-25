import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata, via Forage',
    year: '2026',
    icon: '🤖',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia, via Forage',
    year: '2026',
    icon: '📊',
  },
  {
    title: 'Resume Writing with AI Support Job Simulation',
    issuer: 'Forage',
    year: '2026',
    icon: '📝',
  },
  {
    title: 'Advance Diploma in Python Programming',
    issuer: 'CSC',
    year: '2023',
    icon: '🐍',
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-4"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-[family-name:var(--font-accent)] text-neon text-sm">04.</span>
          <h2
            id="certifications-heading"
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wide"
          >
            certifications
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
        </div>

        {/* Terminal-style list */}
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/5"
            >
              {/* Index number */}
              <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-neon/10 text-neon font-[family-name:var(--font-heading)] text-xs font-bold shrink-0">
                {String(index).padStart(2, '0')}
              </div>

              {/* Emoji icon */}
              <span className="text-xl sm:hidden shrink-0">{cert.icon}</span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm sm:text-base group-hover:text-neon transition-colors font-[family-name:var(--font-heading)]">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted mt-1 font-[family-name:var(--font-label)]">
                  <span className="text-cyber-blue">{cert.issuer}</span>
                </p>
              </div>

              {/* Year badge */}
              <span className="px-2.5 py-1 text-[10px] font-[family-name:var(--font-accent)] text-neon bg-neon/10 border border-neon/20 rounded-md shrink-0">
                {cert.year}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs font-[family-name:var(--font-code)] text-dark-muted mt-8">
          <span className="text-neon">$</span> echo "Always learning, always growing." <span className="text-neon animate-pulse">▊</span>
        </p>
      </div>
    </section>
  )
}
