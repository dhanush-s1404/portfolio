import { Code2, Globe, Database, Wrench, Lightbulb } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 size={20} />,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderHover: 'hover:border-primary/40',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'PHP'],
  },
  {
    title: 'Web Technologies',
    icon: <Globe size={20} />,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderHover: 'hover:border-accent/40',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: <Database size={20} />,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderHover: 'hover:border-green-500/40',
    skills: ['MySQL', 'SQLite', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={20} />,
    color: 'text-purple',
    bgColor: 'bg-purple/10',
    borderHover: 'hover:border-purple/40',
    skills: ['Git', 'GitHub', 'VS Code', 'Tableau'],
  },
  {
    title: 'Concepts',
    icon: <Lightbulb size={20} />,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderHover: 'hover:border-amber-500/40',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'REST APIs', 'Problem Solving'],
  },
]

export default function Skills() {
  const sectionRef = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden" aria-labelledby="skills-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-card/50 via-transparent to-light-card/30 dark:from-dark-card/30 dark:via-transparent dark:to-dark-card/20" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10 reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-primary font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-3">02. Skills</span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            Technical Skills
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-lg mx-auto">
            Technologies and tools I work with to build efficient applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`card-hover p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border ${category.borderHover} group`}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-xl ${category.bgColor} ${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                  <p className="text-[10px] text-light-muted dark:text-dark-muted">{category.skills.length} skills</p>
                </div>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 text-xs font-medium rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-muted border border-light-border dark:border-dark-border hover:text-primary dark:hover:text-primary-light hover:border-primary/30 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Total skills summary */}
        <div className="mt-12 p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex flex-wrap items-center justify-center gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">6+</p>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">Programming Languages</p>
          </div>
          <div className="w-px h-10 bg-light-border dark:bg-dark-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">5+</p>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">Web Technologies</p>
          </div>
          <div className="w-px h-10 bg-light-border dark:bg-dark-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">3</p>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">Databases</p>
          </div>
          <div className="w-px h-10 bg-light-border dark:bg-dark-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">4+</p>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">Dev Tools</p>
          </div>
        </div>
      </div>
    </section>
  )
}
