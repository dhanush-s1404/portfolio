import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 63749 44704',
    href: 'tel:+916374944704',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'dhanushdhanush12950@gmail.com',
    href: 'mailto:dhanushdhanush12950@gmail.com',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'dhanush-s-3a03622a2',
    href: 'https://linkedin.com/in/dhanush-s-3a03622a2',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'dhanush-s1404',
    href: 'https://github.com/dhanush-s1404',
  },
]

export default function Contact() {
  const sectionRef = useScrollReveal()

  return (
    <section id="contact" className="py-20 px-4 relative" aria-labelledby="contact-heading">
      {/* Background accent blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-sm font-mono text-primary font-medium">05. Contact</span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-3"
          >
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-light-muted dark:text-dark-muted max-w-lg mx-auto">
            I'm currently seeking internship opportunities and open to collaboration.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-hover flex items-center gap-4 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border group"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium truncate group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm">
            <h3 className="font-semibold mb-5">Send a Message</h3>
            <form
              action="mailto:dhanushdhanush12950@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-primary dark:focus:border-primary-light focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-primary dark:focus:border-primary-light focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-primary dark:focus:border-primary-light focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="btn-shimmer inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
