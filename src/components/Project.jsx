import { Github, ExternalLink, Code2, Shield, Brain, Cpu, Zap, Lock } from 'lucide-react'

const features = [
  {
    icon: <Brain size={20} />,
    title: 'AI Code Analysis',
    description: 'Google Gemini API reviews code across 6 programming languages with intelligent feedback',
    color: 'text-neon',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Monaco Editor',
    description: 'VS Code-grade in-browser editor with syntax highlighting and auto-completion',
    color: 'text-cyber-blue',
  },
  {
    icon: <Shield size={20} />,
    title: 'Hardened Security',
    description: 'JWT auth, Helmet headers, CORS policies, and rate limiting built in',
    color: 'text-cyber-purple',
  },
  {
    icon: <Cpu size={20} />,
    title: 'MERN Stack',
    description: 'MongoDB + Express + React (Vite) + Node.js — full-stack architecture',
    color: 'text-amber-400',
  },
  {
    icon: <Zap size={20} />,
    title: 'Vite Powered',
    description: 'Lightning-fast HMR and optimized production builds',
    color: 'text-neon',
  },
  {
    icon: <Lock size={20} />,
    title: 'JWT Authentication',
    description: 'Secure user registration and login with token-based auth flow',
    color: 'text-cyber-blue',
  },
]

const techStack = [
  'MongoDB',
  'Express.js',
  'React',
  'Vite',
  'Node.js',
  'Tailwind CSS',
  'Google Gemini API',
  'JWT',
  'Helmet',
  'Monaco Editor',
]

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP']

export default function Project() {
  return (
    <section id="project" className="py-24 px-4" aria-labelledby="project-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-[family-name:var(--font-accent)] text-neon text-sm">03.</span>
          <h2
            id="project-heading"
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wide"
          >
            projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
        </div>

        {/* Project card */}
        <div className="rounded-2xl border border-neon/30 bg-dark-card/60 dark:bg-dark-card/60 overflow-hidden hover:border-neon transition-all duration-500 hover:shadow-xl hover:shadow-neon/5">
          {/* Screenshot placeholder */}
          <div className="w-full h-48 sm:h-72 bg-gradient-to-br from-dark-bg via-dark-card to-neon/5 flex items-center justify-center border-b border-neon/20 relative overflow-hidden">
            {/* Fake terminal UI in placeholder */}
            <div className="absolute inset-4 sm:inset-8 rounded-lg border border-neon/20 bg-dark-bg/80 p-4 font-[family-name:var(--font-code)] text-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-neon/70" />
                <span className="ml-2 text-dark-muted text-[10px] font-[family-name:var(--font-label)]">ai-code-reviewer</span>
              </div>
              <div className="space-y-1 text-dark-muted">
                <p><span className="text-cyber-purple">import</span> {'{'} <span className="text-cyber-blue">GeminiAI</span> {'}'} <span className="text-cyber-purple">from</span> <span className="text-amber-400">'@google/gemini'</span></p>
                <p><span className="text-cyber-purple">import</span> {'{'} <span className="text-cyber-blue">MonacoEditor</span> {'}'} <span className="text-cyber-purple">from</span> <span className="text-amber-400">'@monaco-editor/react'</span></p>
                <p className="text-dark-muted/50">// analyzing your code...</p>
                <p><span className="text-neon">●</span> <span className="text-neon">AI Review Complete</span> — 3 suggestions found</p>
              </div>
            </div>
            <p className="absolute bottom-3 right-4 text-[10px] font-[family-name:var(--font-label)] text-dark-muted">
              {/* PLACEHOLDER: Replace with actual screenshot/GIF */}
              [ screenshot placeholder ]
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
              <Brain className="text-neon" size={24} />
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold tracking-wide">
                AI Code Review System
              </h3>
            </div>
            <p className="font-[family-name:var(--font-code)] text-xs text-dark-muted mb-4">
              // Full-stack AI-powered code analysis platform
            </p>

            {/* Description */}
            <p className="text-light-muted dark:text-dark-muted mb-6 leading-relaxed text-sm sm:text-base font-[family-name:var(--font-body)]">
              A production-ready web application that leverages Google's Gemini API to perform
              intelligent code review and analysis. Developers write code in an embedded Monaco editor,
              select their language, and receive instant AI feedback on quality, bugs, and improvements.
            </p>

            {/* Tech stack */}
            <div className="mb-6">
              <h4 className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-widest text-neon mb-3">
                ⚡ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-neon/10 text-neon border border-neon/20 font-[family-name:var(--font-label)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Supported languages */}
            <div className="mb-8">
              <h4 className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-widest text-cyber-blue mb-3">
                ◆ Supported Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map(lang => (
                  <span
                    key={lang}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 font-[family-name:var(--font-label)]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {features.map(feature => (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl bg-dark-bg/50 dark:bg-dark-bg/50 border border-dark-border hover:border-neon/30 transition-all"
                >
                  <div className={`${feature.color} mb-2`}>{feature.icon}</div>
                  <h4 className="font-medium text-xs mb-1 font-[family-name:var(--font-heading)]">{feature.title}</h4>
                  <p className="text-[11px] text-dark-muted leading-relaxed font-[family-name:var(--font-body)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon/10 border border-neon text-neon font-[family-name:var(--font-heading)] text-xs font-medium rounded-lg transition-all hover:bg-neon hover:text-dark-bg hover:shadow-lg hover:shadow-neon/25"
                aria-label="View source code on GitHub"
              >
                <Github size={14} />
                {/* PLACEHOLDER: Replace # with GitHub repo link */}
                view_source
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyber-blue/50 text-cyber-blue font-[family-name:var(--font-heading)] text-xs font-medium rounded-lg transition-all hover:bg-cyber-blue/10 hover:border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue/20"
                aria-label="View live demo"
              >
                <ExternalLink size={14} />
                {/* PLACEHOLDER: Replace # with live demo link */}
                live_demo
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Project Card */}
      </div>
    </section>
  )
}
