import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-10 px-4 border-t border-light-border dark:border-dark-border relative">
      <div className="max-w-6xl mx-auto">
        {/* Back to top */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-primary hover:border-primary hover:bg-primary/5 transition-all hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Name/brand */}
          <p className="text-lg font-bold gradient-text">Dhanush S</p>
          <p className="text-sm text-light-muted dark:text-dark-muted text-center max-w-md">
            Python Developer & Backend Engineer building AI-powered applications.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://github.com/dhanush-s1404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-light-muted dark:text-dark-muted hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/dhanush-s-3a03622a2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-light-muted dark:text-dark-muted hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-light-border dark:bg-dark-border mt-4" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 pt-2">
            <p className="text-xs text-light-muted dark:text-dark-muted">
              © {new Date().getFullYear()} Dhanush S. All rights reserved.
            </p>
            <p className="text-xs text-light-muted dark:text-dark-muted flex items-center gap-1">
              Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
