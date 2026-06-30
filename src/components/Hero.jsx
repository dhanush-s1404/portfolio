import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'

const roles = ['Python Developer', 'Backend Developer', 'Software Engineer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 mb-6 animate-fade-in-down opacity-0">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-primary">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 animation-delay-100">
          <span className="gradient-text">Dhanush S</span>
        </h1>

        {/* Typing role */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6 animate-fade-in-up opacity-0 animation-delay-200">
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-light-muted dark:text-dark-muted">
            {displayText}
            <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse align-middle" />
          </span>
        </div>

        {/* Summary */}
        <p className="text-light-muted dark:text-dark-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animation-delay-300">
          Enthusiastic graduate student skilled in Python, DSA, and web development.
          Passionate about learning new technologies and applying technical knowledge
          to solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 animation-delay-400">
          <a
            href="portfolio/Dhanush_Resume_al.pdf"
            download="Dhanush_Resume_al.pdf"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary/30 text-primary font-medium rounded-xl hover:border-primary hover:bg-primary/5 transition-all hover:-translate-y-0.5"
          >
            Contact Me
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-500">
          <a
            href="https://github.com/dhanush-s1404"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:text-primary-light dark:hover:border-primary-light transition-all hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/dhanush-s-3a03622a2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:text-primary-light dark:hover:border-primary-light transition-all hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:dhanushdhanush12950@gmail.com"
            className="p-3 rounded-xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:text-primary-light dark:hover:border-primary-light transition-all hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-600 hidden sm:block">
          <div className="w-6 h-10 border-2 border-light-border dark:border-dark-border rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
