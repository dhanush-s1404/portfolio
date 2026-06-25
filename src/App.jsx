import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 relative scanlines">
        {/* Matrix-style background overlay */}
        <div className="matrix-bg" aria-hidden="true" />
        <div className="grid-bg fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Project />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
