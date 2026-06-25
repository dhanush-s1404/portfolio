import { GraduationCap, MapPin, Briefcase, Calendar, Code2 } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 px-4" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-[family-name:var(--font-accent)] text-neon text-sm">01.</span>
          <h2
            id="about-heading"
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wide"
          >
            about_me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
        </div>

        {/* Terminal-style about card */}
        <div className="terminal-card rounded-xl p-6 sm:p-8 bg-dark-card/80 dark:bg-dark-card/80 mb-8">
          <div className="pt-6">
            <div className="font-[family-name:var(--font-code)] text-xs sm:text-sm space-y-2 text-dark-muted">
              <p><span className="text-cyber-purple">const</span> <span className="text-cyber-blue">dhanush</span> <span className="text-dark-muted">=</span> {'{'}</p>
              <p className="pl-4"><span className="text-neon">name</span>: <span className="text-amber-400">"Dhanush S"</span>,</p>
              <p className="pl-4"><span className="text-neon">role</span>: <span className="text-amber-400">"Full-Stack Developer"</span>,</p>
              <p className="pl-4"><span className="text-neon">education</span>: <span className="text-amber-400">"BCA @ Hindusthan College of Arts & Science"</span>,</p>
              <p className="pl-4"><span className="text-neon">graduation</span>: <span className="text-amber-400">"2026"</span>,</p>
              <p className="pl-4"><span className="text-neon">location</span>: <span className="text-amber-400">"Tamil Nadu, India"</span>,</p>
              <p className="pl-4"><span className="text-neon">seeking</span>: <span className="text-amber-400">"Full-Stack / SWE Internship"</span>,</p>
              <p className="pl-4"><span className="text-neon">passions</span>: [<span className="text-amber-400">"MERN"</span>, <span className="text-amber-400">"AI Integration"</span>, <span className="text-amber-400">"Clean Code"</span>]</p>
              <p>{'}'}</p>
            </div>
          </div>
        </div>

        {/* Info cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: <GraduationCap size={18} />, label: 'Education', value: 'BCA — Hindusthan College' },
            { icon: <MapPin size={18} />, label: 'Location', value: 'Tamil Nadu, India' },
            { icon: <Briefcase size={18} />, label: 'Status', value: 'Open to Internships' },
            { icon: <Calendar size={18} />, label: 'Graduating', value: 'May 2026' },
          ].map(item => (
            <div
              key={item.label}
              className="group p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-neon/50 transition-all duration-300"
            >
              <div className="text-neon mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
              <p className="text-[10px] uppercase tracking-widest text-light-muted dark:text-dark-muted font-[family-name:var(--font-label)]">{item.label}</p>
              <p className="text-sm font-medium mt-1 font-[family-name:var(--font-heading)]">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Story paragraphs */}
        <div className="space-y-4 text-light-muted dark:text-dark-muted leading-relaxed max-w-3xl font-[family-name:var(--font-body)]">
          <p className="flex items-start gap-3">
            <Code2 size={16} className="text-neon shrink-0 mt-1" />
            <span>
              I'm passionate about building full-stack web applications that solve real-world problems
              — especially at the intersection of <span className="text-neon font-medium">AI and software engineering</span>.
              The MERN stack is my weapon of choice.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <Code2 size={16} className="text-cyber-blue shrink-0 mt-1" />
            <span>
              I believe in writing <span className="text-cyber-blue font-medium">clean, secure, and scalable code</span>.
              From JWT authentication to rate limiting, I don't just build features — I build them right.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <Code2 size={16} className="text-cyber-purple shrink-0 mt-1" />
            <span>
              Currently exploring how <span className="text-cyber-purple font-medium">Generative AI</span> can 
              supercharge developer tools, while stacking certifications in data analytics and Python.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
