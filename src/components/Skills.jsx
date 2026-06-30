import { Code2, Globe, Database, Wrench, Lightbulb } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 size={20} />,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'PHP'],
  },
  {
    title: 'Web Technologies',
    icon: <Globe size={20} />,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: <Database size={20} />,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    skills: ['MySQL', 'SQLite', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={20} />,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    skills: ['Git', 'GitHub', 'VS Code', 'Tableau'],
  },
  {
    title: 'Concepts',
    icon: <Lightbulb size={20} />,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'REST APIs', 'Problem Solving'],
  },
]

export default function Skills() {
  const sectionRef = useScrollReveal()

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden" aria-labelledby="skills-heading">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-card/50 to-transparent dark:from-dark-card/30 dark:to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10 reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-mono text-primary font-medium">02. Skills</span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-3"
          >
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-hover p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${category.bgColor} ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>

              <h3 className="font-semibold text-sm mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 text-xs font-medium rounded-lg bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border hover:text-primary dark:hover:text-primary-light hover:border-primary/30 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
