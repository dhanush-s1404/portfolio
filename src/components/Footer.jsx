import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-light-muted dark:text-dark-muted">
            <span>© {new Date().getFullYear()} </span>
            <span className="font-semibold text-light-text dark:text-dark-text">Dhanush S</span>
            <span className="mx-2">•</span>
            <span>Built with</span>
            <Heart size={14} className="inline mx-1 text-red-500 fill-red-500" />
            <span>by Dhanush S</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dhanush-s1404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/dhanush-s-3a03622a2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
