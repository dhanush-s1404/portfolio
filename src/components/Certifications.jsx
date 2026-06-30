import { Award, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata via Forage',
    year: '2026',
    icon: '🤖',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia via Forage',
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
  const sectionRef = useScrollReveal()

  return (
    <section
      id="certifications"
      className="py-20 px-4 relative overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-card/50 to-transparent dark:from-dark-card/30 dark:to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-mono text-primary font-medium">04. Certifications</span>
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-3"
          >
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-hover group p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="text-2xl shrink-0 p-2 rounded-xl bg-primary/5 dark:bg-primary/10 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm leading-tight mb-1.5 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-light-muted dark:text-dark-muted">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/10">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
