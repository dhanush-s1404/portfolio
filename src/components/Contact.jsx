import { Mail, Phone, Linkedin, Github, Send, MessageCircle, ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 63749 44704',
    href: 'tel:+916374944704',
    color: 'group-hover:bg-green-500',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'dhanushdhanush12950@gmail.com',
    href: 'mailto:dhanushdhanush12950@gmail.com',
    color: 'group-hover:bg-primary',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'dhanush-s-3a03622a2',
    href: 'https://linkedin.com/in/dhanush-s-3a03622a2',
    color: 'group-hover:bg-blue-600',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'dhanush-s1404',
    href: 'https://github.com/dhanush-s1404',
    color: 'group-hover:bg-purple',
  },
]

export default function Contact() {
  const sectionRef = useScrollReveal()

  return (
    <section id="contact" className="py-24 px-4 relative" aria-labelledby="contact-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 reveal" ref={sectionRef}>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-mono text-primary font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-3">05. Contact</span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
          >
            Let's Work Together
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-lg mx-auto">
            I'm actively seeking internship and job opportunities. Whether you have a question or just want to connect, I'd love to hear from you.
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
                className="card-hover flex items-center gap-4 p-4 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border group"
              >
                <div className={`p-3 rounded-xl bg-primary/10 text-primary ${item.color} group-hover:text-white transition-all group-hover:scale-110 group-hover:shadow-lg`}>
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium truncate group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight size={16} className="text-light-muted dark:text-dark-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
              </a>
            ))}

            {/* Quick connect CTA */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle size={16} className="text-primary" />
                <span className="text-sm font-semibold">Quick Response</span>
              </div>
              <p className="text-xs text-light-muted dark:text-dark-muted">
                I typically respond within 24 hours. For urgent matters, call or message on LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="p-6 sm:p-7 rounded-3xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm">
            <h3 className="font-semibold mb-1">Send a Message</h3>
            <p className="text-xs text-light-muted dark:text-dark-muted mb-5">Fill out the form and I'll get back to you.</p>
            <form
              action="mailto:dhanushdhanush12950@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-1.5 uppercase tracking-wider text-light-muted dark:text-dark-muted">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-primary dark:focus:border-primary-light focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1.5 uppercase tracking-wider text-light-muted dark:text-dark-muted">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-primary dark:focus:border-primary-light focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-1.5 uppercase tracking-wider text-light-muted dark:text-dark-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:border-primary dark:focus:border-primary-light focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="btn-shimmer btn-ripple inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
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
