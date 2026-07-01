import { Github, ExternalLink, ArrowUpRight, Star, GitFork, Shield, Brain, Code2, Upload, History } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'AI Code Review System',
    subtitle: 'Full-Stack AI Application',
    description:
      'A production-ready web application that automates source code analysis using AI. Detects bugs, security vulnerabilities, and coding standard violations with intelligent fix suggestions.',
    highlights: [
      { icon: <Brain size={14} />, text: 'OpenAI GPT + Anthropic Claude integration' },
      { icon: <Shield size={14} />, text: 'Severity classification & quality scores' },
      { icon: <Upload size={14} />, text: 'File upload & user authentication' },
      { icon: <History size={14} />, text: 'Analysis history & fallback static analysis' },
    ],
    tech: ['Python', 'Flask', 'SQLite', 'OpenAI API', 'Anthropic API'],
    github: 'https://github.com/dhanush-s1404',
    live: '#',
    featured: true,
    gradient: 'from-primary/10 to-accent/10',
  },
  {
    title: 'Personal Developer Portfolio',
    subtitle: 'Frontend Project',
    description:
      'A responsive, modern developer portfolio with dark/light mode, scroll animations, interactive components, and a clean professional aesthetic. Deployed on Vercel.',
    highlights: [
      { icon: <Code2 size={14} />, text: 'React + Vite + Tailwind CSS' },
      { icon: <Star size={14} />, text: 'Dark/Light mode with smooth transitions' },
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/dhanush-s1404/portfolio',
    live: 'https://portfolio-roan-five-15.vercel.app',
    featured: false,
    gradient: 'from-purple/10 to-primary/10',
  },
]

export default function Projects() {
  const sectionRef = useScrollReveal()

  return (
    <section id="projects" className="py-24 px-4" aria-labelledby="projects-heading">
      <div className="max-w-4xl mx-auto reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-primary font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-3">03. Projects</span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            What I've Built
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-lg mx-auto">
            Projects that showcase my skills in backend development, AI integration, and web technologies.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card-hover group relative rounded-3xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border overflow-hidden"
            >
              {/* Gradient banner top */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    {/* Featured badge */}
                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                        <Star size={12} className="fill-primary" />
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight size={20} className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="text-sm text-light-muted dark:text-dark-muted mt-1 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-light-muted dark:text-dark-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key highlights */}
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-light-muted dark:text-dark-muted">
                      <span className="text-primary">{h.icon}</span>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="skill-tag px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light border border-primary/10 dark:border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer btn-ripple inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ripple inline-flex items-center gap-2 px-5 py-2.5 border border-light-border dark:border-dark-border text-sm font-medium rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 dark:hover:border-primary-light dark:hover:text-primary-light transition-all"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
