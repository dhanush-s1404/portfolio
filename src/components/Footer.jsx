import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-label)] text-xs text-dark-muted">
            <span className="text-neon">©</span> {new Date().getFullYear()} <span className="font-[family-name:var(--font-heading)]">Dhanush S</span>
            <span className="mx-2 text-dark-border">|</span>
            <span>Built with</span>
            <Heart size={12} className="inline mx-1 text-red-500" />
            <span>+ React + Tailwind</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-[family-name:var(--font-nav)] text-[10px] text-dark-muted mr-3">
              find me →
            </span>
            <a
              href="https://github.com/dhanush-s1404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-muted hover:text-neon transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanush-s-3a03622a2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-muted hover:text-cyber-blue transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:dhanushdhanush12950@gmail.com"
              className="p-2 text-dark-muted hover:text-cyber-purple transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Fun bottom line */}
        <p className="text-center mt-6 font-[family-name:var(--font-code)] text-[10px] text-dark-muted/50">
          {'// no bugs were harmed in the making of this portfolio'}
        </p>
      </div>
    </footer>
  )
}
