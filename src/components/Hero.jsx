import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Sparkles } from 'lucide-react'

const roles = ['Python Developer', 'Web Developer', 'Backend Developer']

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
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 dark:bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/8 dark:bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple/8 dark:bg-purple/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-32 left-16 w-3 h-3 rounded-full bg-primary/30 animate-float hidden lg:block" />
        <div className="absolute top-48 right-24 w-2 h-2 rounded-full bg-accent/40 animate-float animation-delay-200 hidden lg:block" />
        <div className="absolute bottom-48 left-32 w-2.5 h-2.5 rounded-full bg-purple/30 animate-float animation-delay-400 hidden lg:block" />
        <div className="absolute top-1/2 right-16 w-16 h-16 border border-primary/10 rounded-xl animate-spin-slow hidden lg:block" />
        <div className="absolute bottom-32 right-1/4 w-12 h-12 border border-accent/10 rounded-full animate-float-slow hidden lg:block" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 mb-8 animate-fade-in-down opacity-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-primary">Open to work</span>
          <span className="text-xs text-light-muted dark:text-dark-muted">•</span>
          <span className="text-xs text-light-muted dark:text-dark-muted flex items-center gap-1">
            <MapPin size={10} /> Erode, India
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-5 animate-fade-in-up opacity-0 animation-delay-100 tracking-tight">
          <span className="gradient-text">Dhanush S</span>
        </h1>

        {/* Typing role */}
        <div className="h-10 sm:h-14 flex items-center justify-center mb-6 animate-fade-in-up opacity-0 animation-delay-200">
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-light-muted dark:text-dark-muted font-mono">
            {'< '}{displayText}
            <span className="inline-block w-0.5 h-7 bg-primary ml-0.5 animate-pulse align-middle" />
            {' />'}
          </span>
        </div>

        {/* Summary */}
        <p className="text-light-muted dark:text-dark-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animation-delay-300">
          Enthusiastic graduate skilled in <strong className="text-light-text dark:text-dark-text">Python</strong>, <strong className="text-light-text dark:text-dark-text">DSA</strong>, and <strong className="text-light-text dark:text-dark-text">web development</strong>.
          Passionate about building AI-powered applications and applying technical knowledge
          to solve real-world problems.
        </p>

        {/* Stats mini bar */}
        <div className="flex items-center justify-center gap-8 mb-10 animate-fade-in-up opacity-0 animation-delay-300">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">2+</p>
            <p className="text-xs text-light-muted dark:text-dark-muted">Projects</p>
          </div>
          <div className="w-px h-8 bg-light-border dark:bg-dark-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">6+</p>
            <p className="text-xs text-light-muted dark:text-dark-muted">Languages</p>
          </div>
          <div className="w-px h-8 bg-light-border dark:bg-dark-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-purple">4+</p>
            <p className="text-xs text-light-muted dark:text-dark-muted">Certifications</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 animation-delay-400">
          <a
            href="/Dhanush_S_Resume.pdf"
            download
            className="btn-shimmer btn-ripple inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="btn-ripple inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-2xl hover:border-primary hover:bg-primary/5 transition-all hover:-translate-y-1 active:translate-y-0"
          >
            Let's Connect
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 animate-fade-in-up opacity-0 animation-delay-500">
          <a
            href="https://github.com/dhanush-s1404"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip-container p-3.5 rounded-2xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:text-primary-light dark:hover:border-primary-light transition-all hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10"
            aria-label="GitHub"
            data-tooltip="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/dhanush-s-3a03622a2"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip-container p-3.5 rounded-2xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:text-primary-light dark:hover:border-primary-light transition-all hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:dhanushdhanush12950@gmail.com"
            className="tooltip-container p-3.5 rounded-2xl border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-primary hover:border-primary hover:bg-primary/5 dark:hover:text-primary-light dark:hover:border-primary-light transition-all hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10"
            aria-label="Email"
            data-tooltip="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-700 hidden sm:flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium text-light-muted dark:text-dark-muted uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-9 border-2 border-light-border dark:border-dark-border rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-primary rounded-full mt-1.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
