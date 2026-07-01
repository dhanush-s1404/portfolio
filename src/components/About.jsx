import { GraduationCap, MapPin, Calendar, Award, Code2, Brain, Rocket, Coffee, Zap } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  { icon: <Coffee size={16} />, text: 'Problem Solver' },
  { icon: <Zap size={16} />, text: 'Quick Learner' },
  { icon: <Code2 size={16} />, text: 'Clean Code' },
  { icon: <Brain size={16} />, text: 'AI Enthusiast' },
]

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" className="py-24 px-4 relative" aria-labelledby="about-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-primary font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-3">01. About</span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            About Me
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-lg mx-auto">
            Get to know me better — my background, education, and what drives me.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Info cards (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Education */}
            <div className="card-hover p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold">Education</h3>
              </div>
              <p className="text-sm text-light-muted dark:text-dark-muted font-medium">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
                Hindusthan College of Science and Commerce
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-hover p-4 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-center group">
                <div className="p-2 rounded-lg bg-accent/10 w-fit mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Calendar size={16} className="text-accent" />
                </div>
                <span className="text-[10px] font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider block">Graduation</span>
                <p className="font-bold text-xl mt-1">2026</p>
              </div>
              <div className="card-hover p-4 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-center group">
                <div className="p-2 rounded-lg bg-purple/10 w-fit mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Award size={16} className="text-purple" />
                </div>
                <span className="text-[10px] font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider block">CGPA</span>
                <p className="font-bold text-xl mt-1">7.34</p>
              </div>
            </div>

            {/* Location */}
            <div className="card-hover p-4 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-green-500/10">
                  <MapPin size={18} className="text-green-500" />
                </div>
                <div>
                  <span className="text-[10px] font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">Location</span>
                  <p className="font-semibold text-sm">Erode, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {highlights.map(h => (
                <span key={h.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/5 dark:bg-primary/10 text-primary border border-primary/10">
                  {h.icon}
                  {h.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right: About text (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex gap-4 items-start group">
              <div className="p-2.5 rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110 text-primary">
                <Code2 size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Python Developer</h4>
                <p className="text-light-muted dark:text-dark-muted leading-relaxed text-sm">
                  I build efficient applications and automation scripts using Python. From Flask web apps to AI integrations with OpenAI and Anthropic APIs, Python is my go-to language for solving problems.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="p-2.5 rounded-xl bg-accent/10 shrink-0 group-hover:bg-accent group-hover:text-white transition-all group-hover:scale-110 text-accent">
                <Brain size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Web Developer</h4>
                <p className="text-light-muted dark:text-dark-muted leading-relaxed text-sm">
                  I create responsive, modern web applications using React, Tailwind CSS, and JavaScript. I focus on clean UI, smooth interactions, and accessible design that works across all devices.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="p-2.5 rounded-xl bg-purple/10 shrink-0 group-hover:bg-purple group-hover:text-white transition-all group-hover:scale-110 text-purple">
                <Rocket size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Backend Developer</h4>
                <p className="text-light-muted dark:text-dark-muted leading-relaxed text-sm">
                  I design and build robust server-side systems using Flask, REST APIs, SQL databases, and authentication flows. I prioritize security, scalability, and clean architecture.
                </p>
              </div>
            </div>

            {/* Fun fact card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 mt-4">
              <p className="text-sm text-light-muted dark:text-dark-muted italic">
                💡 <strong className="text-light-text dark:text-dark-text not-italic">Fun fact:</strong> I love turning complex problems into elegant backend solutions. My motto — "if it works, make it better."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
