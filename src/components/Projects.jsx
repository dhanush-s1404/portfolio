import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'AI Code Review System',
    description:
      'Developed a full-stack web application that automates source code analysis using AI. Detects bugs, security vulnerabilities, and coding standard violations. Integrated OpenAI GPT and Anthropic Claude APIs. Generates severity classification, fix suggestions, corrected code, and quality scores. Implemented user authentication, file uploads, analysis history tracking, and fallback static analysis.',
    tech: ['Python', 'Flask', 'SQLite', 'OpenAI API', 'Anthropic API'],
    github: 'https://github.com/dhanush-s1404',
    live: '#',
    featured: true,
  },
  {
    title: 'Personal Developer Portfolio',
    description:
      'Developed a responsive developer portfolio website with clean, professional design. Implemented dark/light mode, responsive layouts, and interactive components. Showcased projects, certifications, and technical skills. Deployed using Vercel.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/dhanush-s1404/portfolio',
    live: 'https://portfolio-roan-five-15.vercel.app',
    featured: false,
  },
]

export default function Projects() {
  const sectionRef = useScrollReveal()

  return (
    <section id="projects" className="py-20 px-4" aria-labelledby="projects-heading">
      <div className="max-w-4xl mx-auto reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-mono text-primary font-medium">03. Work</span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-3"
          >
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card-hover group relative p-6 sm:p-8 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border overflow-hidden"
            >
              {/* Gradient accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Featured badge */}
              {project.featured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Featured Project
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
                <ArrowUpRight size={20} className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>

              {/* Description */}
              <p className="text-light-muted dark:text-dark-muted leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light border border-primary/10 dark:border-primary/20"
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
                    className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-light-border dark:border-dark-border text-sm font-medium rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 dark:hover:border-primary-light dark:hover:text-primary-light transition-all"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github size={14} />
                  GitHub Repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
