import { Github, ExternalLink, Code2, Layout, Palette, Monitor, Type, Smartphone, Search, Accessibility } from 'lucide-react'

const techStack = ['React', 'Vite', 'Tailwind CSS v4', 'Lucide Icons', 'Vercel']

const keyFeatures = [
  { icon: <Palette size={16} />, label: 'Dark/Light Mode' },
  { icon: <Type size={16} />, label: 'Typing Animation' },
  { icon: <Monitor size={16} />, label: 'Neon Glow Effects' },
  { icon: <Layout size={16} />, label: 'Terminal UI' },
  { icon: <Type size={16} />, label: '7 Custom Fonts' },
  { icon: <Smartphone size={16} />, label: 'Mobile-First' },
  { icon: <Search size={16} />, label: 'SEO Optimized' },
  { icon: <Accessibility size={16} />, label: 'Accessible' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4" aria-labelledby="portfolio-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-[family-name:var(--font-accent)] text-cyber-purple text-sm">03.1</span>
          <h2
            id="portfolio-heading"
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wide"
          >
            portfolio
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyber-purple/30 to-transparent" />
        </div>

        {/* Portfolio card */}
        <div className="rounded-2xl border border-cyber-purple/30 bg-dark-card/60 dark:bg-dark-card/60 overflow-hidden hover:border-cyber-purple transition-all duration-500 hover:shadow-xl hover:shadow-cyber-purple/5">
          {/* Terminal preview */}
          <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-dark-bg via-dark-card to-cyber-purple/5 flex items-center justify-center border-b border-cyber-purple/20 relative overflow-hidden">
            <div className="absolute inset-4 sm:inset-8 rounded-lg border border-cyber-purple/20 bg-dark-bg/80 p-4 font-[family-name:var(--font-code)] text-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-neon/70" />
                <span className="ml-2 text-dark-muted text-[10px] font-[family-name:var(--font-label)]">dhanush-portfolio</span>
              </div>
              <div className="space-y-1 text-dark-muted">
                <p><span className="text-cyber-purple">import</span> {'{'} <span className="text-cyber-blue">ThemeProvider</span> {'}'} <span className="text-cyber-purple">from</span> <span className="text-amber-400">'./context/ThemeContext'</span></p>
                <p><span className="text-cyber-purple">import</span> {'{'} <span className="text-cyber-blue">Hero, Skills, Projects</span> {'}'} <span className="text-cyber-purple">from</span> <span className="text-amber-400">'./components'</span></p>
                <p className="text-dark-muted/50">// cyberpunk-themed developer portfolio</p>
                <p><span className="text-neon">●</span> <span className="text-neon">Deployed</span> — live on Vercel</p>
                <p className="mt-2"><span className="text-cyber-purple">$</span> vercel --prod</p>
                <p className="text-neon">✓ Production: portfolio-roan-five-15.vercel.app</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="text-cyber-purple" size={24} />
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold tracking-wide">
                Developer Portfolio
              </h3>
            </div>
            <p className="font-[family-name:var(--font-code)] text-xs text-dark-muted mb-4">
              // Personal portfolio with hacker/cyberpunk aesthetic
            </p>

            {/* Description */}
            <p className="text-light-muted dark:text-dark-muted mb-6 leading-relaxed text-sm sm:text-base font-[family-name:var(--font-body)]">
              A modern, responsive developer portfolio designed with a cyberpunk/hacker theme.
              Built from scratch using React + Vite + Tailwind CSS v4. Features terminal-inspired
              UI elements, typing animations, matrix-style backgrounds, neon glow effects, CRT scanline
              overlays, and 7 unique fonts distributed across different UI elements for a distinctive look.
              Fully responsive, accessible, and SEO-optimized.
            </p>

            {/* Tech stack */}
            <div className="mb-6">
              <h4 className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-widest text-cyber-purple mb-3">
                ⚡ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20 font-[family-name:var(--font-label)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key features as mini cards */}
            <div className="mb-8">
              <h4 className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-widest text-cyber-blue mb-3">
                ◆ Key Features
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {keyFeatures.map(feat => (
                  <div
                    key={feat.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-bg/50 border border-dark-border hover:border-cyber-blue/30 transition-all"
                  >
                    <span className="text-cyber-blue">{feat.icon}</span>
                    <span className="text-[11px] font-[family-name:var(--font-label)] text-dark-muted">{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deployment info */}
            <div className="mb-8 p-4 rounded-xl bg-dark-bg/50 border border-neon/20">
              <p className="font-[family-name:var(--font-code)] text-xs text-dark-muted">
                <span className="text-neon">▶</span> Deployed on <span className="text-neon font-medium">Vercel</span>
              </p>
              <p className="font-[family-name:var(--font-code)] text-xs text-neon mt-1">
                https://portfolio-roan-five-15.vercel.app
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/dhanush-s1404/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-purple/10 border border-cyber-purple text-cyber-purple font-[family-name:var(--font-heading)] text-xs font-medium rounded-lg transition-all hover:bg-cyber-purple hover:text-dark-bg hover:shadow-lg hover:shadow-cyber-purple/25"
                aria-label="View portfolio source code on GitHub"
              >
                <Github size={14} />
                view_source
              </a>
              <a
                href="https://portfolio-roan-five-15.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon/10 border border-neon text-neon font-[family-name:var(--font-heading)] text-xs font-medium rounded-lg transition-all hover:bg-neon hover:text-dark-bg hover:shadow-lg hover:shadow-neon/25"
                aria-label="View live portfolio"
              >
                <ExternalLink size={14} />
                live_demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
