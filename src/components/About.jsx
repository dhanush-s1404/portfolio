import { GraduationCap, MapPin, Calendar, Award, Code2, Brain, Rocket } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" className="py-20 px-4" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-mono text-primary font-medium">01. About</span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-3"
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <div className="space-y-4">
            <div className="card-hover p-5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold">Education</h3>
              </div>
              <p className="text-sm text-light-muted dark:text-dark-muted">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                Hindusthan College of Science and Commerce
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-hover p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-center">
                <Calendar size={18} className="text-primary mx-auto mb-2" />
                <span className="text-xs font-medium text-light-muted dark:text-dark-muted block">Graduation</span>
                <p className="font-bold text-lg mt-1">2026</p>
              </div>
              <div className="card-hover p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-center">
                <Award size={18} className="text-primary mx-auto mb-2" />
                <span className="text-xs font-medium text-light-muted dark:text-dark-muted block">CGPA</span>
                <p className="font-bold text-lg mt-1">7.34</p>
              </div>
            </div>

            <div className="card-hover p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-light-muted dark:text-dark-muted">Location</span>
                  <p className="font-semibold">Erode, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* About text with icons */}
          <div className="space-y-5">
            <div className="flex gap-4 items-start group">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                <Code2 size={18} className="text-primary" />
              </div>
              <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                Dedicated BCA student with a strong passion for <strong className="text-light-text dark:text-dark-text">backend development</strong>. I enjoy working with Python, REST APIs, and databases to build robust and scalable applications.
              </p>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="p-2 rounded-lg bg-accent/10 shrink-0 group-hover:bg-accent/20 transition-colors">
                <Brain size={18} className="text-accent" />
              </div>
              <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                Fascinated by <strong className="text-light-text dark:text-dark-text">AI-integrated applications</strong> and how artificial intelligence can enhance software products and developer workflows.
              </p>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="p-2 rounded-lg bg-purple-500/10 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <Rocket size={18} className="text-purple-500" />
              </div>
              <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                A firm believer in <strong className="text-light-text dark:text-dark-text">continuous learning</strong> and problem-solving. Whether it's DSA challenges or exploring new frameworks, I approach every challenge with curiosity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
