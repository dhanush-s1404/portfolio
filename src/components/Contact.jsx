import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'dhanushdhanush12950@gmail.com',
    href: 'mailto:dhanushdhanush12950@gmail.com',
    color: 'group-hover:border-neon group-hover:text-neon',
    iconBg: 'group-hover:bg-neon group-hover:text-dark-bg',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 63749 44704',
    href: 'tel:+916374944704',
    color: 'group-hover:border-cyber-blue group-hover:text-cyber-blue',
    iconBg: 'group-hover:bg-cyber-blue group-hover:text-dark-bg',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'dhanush-s-3a03622a2',
    href: 'https://www.linkedin.com/in/dhanush-s-3a03622a2',
    color: 'group-hover:border-cyber-blue group-hover:text-cyber-blue',
    iconBg: 'group-hover:bg-cyber-blue group-hover:text-dark-bg',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'dhanush-s1404',
    href: 'https://github.com/dhanush-s1404',
    color: 'group-hover:border-cyber-purple group-hover:text-cyber-purple',
    iconBg: 'group-hover:bg-cyber-purple group-hover:text-dark-bg',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-[family-name:var(--font-accent)] text-neon text-sm">05.</span>
          <h2
            id="contact-heading"
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold tracking-wide"
          >
            contact
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
        </div>

        {/* Terminal-style subtitle */}
        <div className="mb-12 font-[family-name:var(--font-code)] text-xs text-dark-muted">
          <span className="text-neon">$</span> echo "Let's connect and build something awesome together"
          <p className="mt-1 text-light-muted dark:text-dark-muted font-[family-name:var(--font-body)]">
            Currently seeking internship opportunities. Open to collaboration and interesting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact links */}
          <div className="space-y-3">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex items-center gap-4 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border ${link.color} transition-all duration-300`}
              >
                <div className={`p-2.5 rounded-lg bg-dark-bg border border-dark-border ${link.iconBg} transition-all`}>
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-dark-muted font-[family-name:var(--font-label)]">{link.label}</p>
                  <p className="text-sm font-medium truncate font-[family-name:var(--font-heading)]">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="terminal-card rounded-xl p-6 bg-dark-card/80 dark:bg-dark-card/80">
            <div className="pt-4">
              <form
                action="mailto:dhanushdhanush12950@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-[family-name:var(--font-label)] text-dark-muted mb-2">
                    <span className="text-neon">{'>'}</span> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-neon focus:ring-1 focus:ring-neon/30 outline-none transition-colors text-sm font-[family-name:var(--font-accent)] placeholder:text-dark-muted/50"
                    placeholder="your_name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-[family-name:var(--font-label)] text-dark-muted mb-2">
                    <span className="text-neon">{'>'}</span> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-neon focus:ring-1 focus:ring-neon/30 outline-none transition-colors text-sm font-[family-name:var(--font-accent)] placeholder:text-dark-muted/50"
                    placeholder="you@domain.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-[family-name:var(--font-label)] text-dark-muted mb-2">
                    <span className="text-neon">{'>'}</span> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border focus:border-neon focus:ring-1 focus:ring-neon/30 outline-none transition-colors text-sm font-[family-name:var(--font-accent)] placeholder:text-dark-muted/50 resize-none"
                    placeholder="// your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-neon/10 border border-neon text-neon font-[family-name:var(--font-heading)] text-xs font-medium rounded-lg transition-all hover:bg-neon hover:text-dark-bg hover:shadow-lg hover:shadow-neon/25"
                >
                  <Send size={14} />
                  send_message()
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
