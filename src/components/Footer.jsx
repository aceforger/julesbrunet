import { authorInfo, navLinks, book } from '../data'

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-[#0a0a0a] text-[#F5F5F5]">
      {/* Launch Portal */}
      <div className="border-b-2 border-[#990000]/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bangers tracking-wider text-[#E65100] mb-1">Ready to Publish?</h3>
              <p className="text-[#F5F5F5]/40 text-sm font-roboto">Access the go-live portal for your book</p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#E65100] text-[#F5F5F5] font-oswald font-bold uppercase tracking-[0.1em] text-sm hover:bg-[#cc4400] transition-all shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch & Go-Live Portal
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bangers text-2xl text-[#E65100] tracking-wider">{authorInfo.name.toUpperCase()}</span>
            </div>
            <p className="text-[#F5F5F5]/30 text-sm font-roboto leading-relaxed">
              Author of "{book.fullTitle}" — Survival is about enduring the absurd.
            </p>
          </div>

          <div>
            <h4 className="font-oswald text-xs font-bold uppercase tracking-wider mb-4 text-[#E65100]">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#F5F5F5]/30 hover:text-[#E65100] transition-colors text-sm font-roboto uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-xs font-bold uppercase tracking-wider mb-4 text-[#E65100]">Contact</h4>
            <a
              href={`mailto:${authorInfo.email}`}
              className="text-[#F5F5F5]/30 hover:text-[#E65100] transition-colors text-sm font-roboto"
            >
              {authorInfo.email}
            </a>
          </div>
        </div>

        <div className="border-t border-[#990000]/20 mt-12 pt-8 text-center">
          <p className="text-[#F5F5F5]/15 text-xs font-roboto uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {authorInfo.name} | The Dead Walk
          </p>
        </div>
      </div>
    </footer>
  )
}