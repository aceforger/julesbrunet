import { useState, useEffect } from 'react'
import { navLinks, authorInfo } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navLinks.map(link => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      setIsMobileMenuOpen(false)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#1A1A1A]/95 backdrop-blur-sm border-b-2 border-[#990000]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <span className="font-bangers text-3xl text-[#E65100] animate-glitch tracking-wider">
              {authorInfo.name.toUpperCase()}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-oswald font-bold uppercase tracking-wider transition-all animate-fade-in-up ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#F5F5F5] bg-[#990000] skew-x-[-5deg] shadow-lg shadow-[#990000]/30'
                    : 'text-[#F5F5F5]/60 hover:text-[#E65100]'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className={activeSection === link.href.replace('#', '') ? 'inline-block skew-x-[5deg]' : ''}>
                  {link.name}
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-6 py-2.5 bg-[#E65100] text-[#F5F5F5] font-oswald font-bold text-sm uppercase tracking-wider hover:bg-[#cc4400] transition-all shadow-lg shadow-[#E65100]/20 hover-lift"
            >
              Get the Book
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F5F5] hover:text-[#E65100] transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#1A1A1A] border-2 border-[#990000] mt-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 font-oswald font-bold uppercase tracking-wider transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#F5F5F5] bg-[#990000]'
                    : 'text-[#F5F5F5]/60 hover:text-[#E65100]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block mt-3 px-4 py-3 bg-[#E65100] text-[#F5F5F5] text-center font-oswald font-bold uppercase tracking-wider hover:bg-[#cc4400] transition-colors"
            >
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}