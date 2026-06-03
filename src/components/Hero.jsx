import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#1A1A1A] relative overflow-hidden grunge-texture">
      {/* Blood drips */}
      <div className="absolute top-0 left-10 w-1 h-16 bg-[#990000] rounded-full animate-blood-drip opacity-40"></div>
      <div className="absolute top-0 left-1/4 w-1.5 h-20 bg-[#990000] rounded-full animate-blood-drip opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-0 right-1/3 w-1 h-12 bg-[#990000] rounded-full animate-blood-drip opacity-35" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-0 right-20 w-1.5 h-24 bg-[#990000] rounded-full animate-blood-drip opacity-25" style={{ animationDelay: '3s' }}></div>

      {/* Warning stripes */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E65100]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E65100 0px, #E65100 20px, #1A1A1A 20px, #1A1A1A 25px)' }}>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E65100]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E65100 0px, #E65100 20px, #1A1A1A 20px, #1A1A1A 25px)' }}>
      </div>

      {/* Red glow */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#990000] rounded-full opacity-8 blur-3xl animate-pulse-red"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#E65100] rounded-full opacity-5 blur-3xl"></div>

      {/* Blood splatters */}
      <div className="absolute top-20 right-40 w-3 h-3 bg-[#990000] rounded-full opacity-40"></div>
      <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-[#990000] rounded-full opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#990000] rounded-full opacity-35"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Author Introduction */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#990000]/20 border border-[#990000]/40 text-[#E65100] px-4 py-2 mb-8 text-sm font-oswald font-bold uppercase tracking-widest animate-warning">
              <span className="w-2 h-2 bg-[#E65100] rounded-full"></span>
              Horror Author
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bangers text-[#F5F5F5] mb-6 leading-tight tracking-wider animate-skew-in">
              {authorInfo.name.toUpperCase()}
            </h1>

            <p className="text-xl text-[#E65100] mb-6 font-oswald font-bold uppercase tracking-[0.2em] animate-fade-in-up-delayed">
              Apocalypse Storyteller
            </p>

            <div className="w-32 h-1 bg-gradient-to-r from-[#990000] to-[#E65100] mb-8 mx-auto md:mx-0 animate-fade-in-up-delayed"></div>

            <p className="text-[#F5F5F5]/70 leading-relaxed max-w-lg mx-auto md:mx-0 font-roboto text-lg bg-[#990000]/5 border border-[#990000]/10 p-6 animate-fade-in-up-delayed-2"
              style={{ borderLeftWidth: '4px', borderLeftColor: '#E65100' }}>
              "{authorInfo.tagline}"
            </p>

            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-in-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-[#2D2D2D] text-[#E65100] text-xs font-oswald font-bold uppercase tracking-wider border border-[#990000]/30 hover-lift">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delayed-2">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="px-8 py-4 bg-[#990000] text-[#F5F5F5] font-oswald font-bold uppercase tracking-[0.15em] hover:bg-[#770000] transition-all shadow-lg shadow-[#990000]/30 text-center hover-lift"
              >
                About the Author
              </a>
              <a
                href="#book"
                onClick={(e) => handleScroll(e, '#book')}
                className="px-8 py-4 border-2 border-[#E65100] text-[#E65100] font-oswald font-bold uppercase tracking-[0.15em] hover:bg-[#E65100]/10 transition-all text-center hover-lift"
              >
                The Book
              </a>
            </div>
          </div>

          {/* Profile placeholder */}
          <div className="relative mx-auto max-w-sm animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#990000]/20 blur-xl animate-pulse-red"></div>
              <div className="relative bg-[#2D2D2D] shadow-2xl border-2 border-[#990000]/30 overflow-hidden"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4 font-bangers text-[#990000] animate-glitch">J</div>
                    <p className="text-2xl font-bangers text-[#F5F5F5] tracking-wider">{authorInfo.name.toUpperCase()}</p>
                    <p className="text-[#E65100] text-sm font-oswald uppercase tracking-widest mt-2">Author Photo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#E65100] text-[#1A1A1A] w-12 h-12 flex items-center justify-center font-bangers text-lg shadow-lg animate-warning"
              style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
              !
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}