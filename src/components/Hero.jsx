import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Back-End Developer | Python Developer | AI-Integrated Web Apps'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Floating code particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 text-neon/10 font-[family-name:var(--font-code)] text-xs float-animation">{'const developer = {'}</div>
        <div className="absolute top-40 right-20 text-neon/10 font-[family-name:var(--font-code)] text-xs float-animation animation-delay-200">{'  skills: ["MERN"],'}</div>
        <div className="absolute bottom-40 left-20 text-neon/10 font-[family-name:var(--font-code)] text-xs float-animation animation-delay-400">{'  passion: "AI + Code"'}</div>
        <div className="absolute bottom-60 right-10 text-neon/10 font-[family-name:var(--font-code)] text-xs float-animation animation-delay-600">{'};'}</div>
        <div className="absolute top-60 left-1/3 text-cyber-purple/10 font-[family-name:var(--font-code)] text-xs float-animation animation-delay-800">{'// building the future'}</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Terminal-style greeting */}
        <div className="inline-block mb-6 animate-fade-in-up opacity-0">
          <span className="font-[family-name:var(--font-code)] text-xs sm:text-sm px-4 py-2 rounded-full border border-neon/30 text-neon bg-neon/5">
            <span className="text-dark-muted">guest@portfolio:</span>~$ <span className="text-neon">whoami</span>
          </span>
        </div>

        {/* Name with glitch effect */}
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl md:text-8xl font-bold mb-4 animate-fade-in-up opacity-0 animation-delay-200 glitch-hover tracking-wider">
          <span className="cyber-gradient">Dhanush S</span>
        </h1>

        {/* Typing effect tagline */}
        <div className="h-8 sm:h-10 mb-8 animate-fade-in-up opacity-0 animation-delay-400">
          <p className="font-[family-name:var(--font-accent)] text-sm sm:text-base md:text-lg text-neon-dim">
            {'> '}{displayText}
            <span className={`inline-block w-2 h-5 bg-neon ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>
        </div>

        {/* Status line */}
        <p className="text-xs font-[family-name:var(--font-label)] text-dark-muted mb-8 animate-fade-in-up opacity-0 animation-delay-400">
          <span className="text-neon">●</span> Available for internships and jobs &nbsp;|&nbsp; 
          <span className="text-cyber-blue">◆</span> BCA @ Hindusthan College of Science and Commerce &nbsp;|&nbsp;
          <span className="text-cyber-purple">▲</span> Tamil Nadu, India
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
          <a
            href="Dhanush_S_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-neon/10 border border-neon text-neon font-[family-name:var(--font-heading)] text-sm font-medium rounded-lg transition-all hover:bg-neon hover:text-dark-bg hover:shadow-lg hover:shadow-neon/25 pulse-glow"
          >
            <Download size={16} />
            Dhanush_S_Resume.pdf
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyber-blue/50 text-cyber-blue font-[family-name:var(--font-heading)] text-sm font-medium rounded-lg transition-all hover:bg-cyber-blue/10 hover:border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue/20"
          >
            <Mail size={16} />
            contact()
          </a>
          <a
            href="https://github.com/dhanush-s1404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border dark:border-dark-border hover:border-cyber-purple text-light-muted dark:text-dark-muted hover:text-cyber-purple font-[family-name:var(--font-heading)] text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-cyber-purple/20"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
            github
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in-up opacity-0 animation-delay-800">
          <a
            href="https://www.linkedin.com/in/dhanush-s-3a03622a2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-muted hover:text-neon transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/dhanush-s1404"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-muted hover:text-neon transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:dhanushdhanush12950@gmail.com"
            className="text-dark-muted hover:text-neon transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-neon/50 animate-bounce">
            <span className="font-[family-name:var(--font-label)] text-[10px]">scroll</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
