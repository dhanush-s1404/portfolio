import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react'

const navLinks = [
  { href: '#about', label: './about' },
  { href: '#skills', label: './skills' },
  { href: '#project', label: './projects' },
  { href: '#certifications', label: './certs' },
  { href: '#contact', label: './contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-light-card/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-light-border dark:border-neon/20'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-[family-name:var(--font-nav)] text-lg font-bold text-neon hover:opacity-80 transition-opacity neon-text"
            aria-label="Home"
          >
            <Terminal size={18} className="text-neon" />
            dhanush@dev:~$
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-nav)] text-xs text-light-muted dark:text-dark-muted hover:text-neon transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-light-border dark:border-dark-border hover:border-neon hover:text-neon transition-all"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:text-neon transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:text-neon transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-light-border dark:border-neon/20">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 font-[family-name:var(--font-nav)] text-sm text-light-muted dark:text-dark-muted hover:text-neon transition-colors"
              >
                <span className="text-neon mr-2">{'>'}</span>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
