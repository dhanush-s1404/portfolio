const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    color: 'neon',
    skills: ['JavaScript', 'Python', 'C', 'C++'],
  },
  {
    title: 'Web Stack',
    icon: '< />',
    color: 'cyber-blue',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'REST APIs',
      'JWT Auth',
    ],
  },
  {
    title: 'Arsenal',
    icon: '⚡',
    color: 'cyber-purple',
    skills: ['Git', 'GitHub', 'VS Code', 'Monaco Editor', 'Vite'],
  },
  {
    title: 'Domains',
    icon: '◈',
    color: 'amber-400',
    skills: ['Full-Stack (MERN)', 'Generative AI', 'Data Analytics'],
  },
]

const colorMap = {
  'neon': {
    border: 'border-neon/30 hover:border-neon',
    bg: 'bg-neon/5',
    text: 'text-neon',
    tag: 'bg-neon/10 text-neon border-neon/20 hover:bg-neon hover:text-dark-bg',
    glow: 'hover:shadow-neon/10',
  },
  'cyber-blue': {
    border: 'border-cyber-blue/30 hover:border-cyber-blue',
    bg: 'bg-cyber-blue/5',
    text: 'text-cyber-blue',
    tag: 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20 hover:bg-cyber-blue hover:text-dark-bg',
    glow: 'hover:shadow-cyber-blue/10',
  },
  'cyber-purple': {
    border: 'border-cyber-purple/30 hover:border-cyber-purple',
    bg: 'bg-cyber-purple/5',
    text: 'text-cyber-purple',
    tag: 'bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20 hover:bg-cyber-purple hover:text-dark-bg',
    glow: 'hover:shadow-cyber-purple/10',
  },
  'amber-400': {
    border: 'border-amber-400/30 hover:border-amber-400',
    bg: 'bg-amber-400/5',
    text: 'text-amber-400',
    tag: 'bg-amber-400/10 text-amber-400 border-amber-400/20 hover:bg-amber-400 hover:text-dark-bg',
    glow: 'hover:shadow-amber-400/10',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-[family-name:var(--font-accent)] text-neon text-sm">02.</span>
          <h2
            id="skills-heading"
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wide"
          >
            tech_stack
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map(category => {
            const colors = colorMap[category.color]
            return (
              <div
                key={category.title}
                className={`group p-5 rounded-2xl bg-light-card dark:bg-dark-card border ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow} hover:-translate-y-1`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xl font-[family-name:var(--font-code)] ${colors.text}`}>
                    {category.icon}
                  </span>
                  <h3 className={`font-[family-name:var(--font-nav)] text-[11px] font-semibold uppercase tracking-widest ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skill count */}
                <p className="text-[10px] font-[family-name:var(--font-label)] text-dark-muted mb-3">
                  {category.skills.length} skills loaded
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md border font-[family-name:var(--font-label)] ${colors.tag} transition-all cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-10 p-4 rounded-xl border border-dark-border bg-dark-card/50 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {[
            { label: 'Languages', value: '4+' },
            { label: 'Frameworks', value: '5+' },
            { label: 'Tools', value: '5+' },
            { label: 'Projects', value: 'Building...' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-neon">{stat.value}</p>
              <p className="text-[10px] font-[family-name:var(--font-label)] text-dark-muted uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
