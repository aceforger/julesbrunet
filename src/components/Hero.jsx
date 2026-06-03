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
      {/* BLOOD OVERLAY - Dark red tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#990000]/10 via-transparent to-[#990000]/15 z-0"></div>

      {/* BLOOD POOLS */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[200px] animate-pool" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 500 200" className="w-full h-full text-[#990000]/25" fill="currentColor">
          <ellipse cx="200" cy="120" rx="250" ry="80"/>
          <ellipse cx="250" cy="100" rx="180" ry="60" opacity="0.7"/>
          <ellipse cx="150" cy="140" rx="120" ry="40" opacity="0.5"/>
        </svg>
      </div>

      <div className="absolute top-10 right-0 w-[400px] h-[150px] animate-pool" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 400 150" className="w-full h-full text-[#990000]/20" fill="currentColor">
          <ellipse cx="300" cy="70" rx="200" ry="60"/>
          <ellipse cx="250" cy="80" rx="150" ry="40" opacity="0.6"/>
        </svg>
      </div>

      {/* BLOOD SMEARS */}
      <div className="absolute top-1/4 left-0 w-full h-20 animate-smear" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 1440 80" className="w-full h-full text-[#990000]/20" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 40Q200 20 400 45T800 35T1200 50T1440 30L1440 80L0 80Z"/>
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-0 w-full h-16 animate-smear" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 1440 60" className="w-full h-full text-[#990000]/15" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 30Q300 15 500 35T900 25T1300 40T1440 20L1440 60L0 60Z"/>
        </svg>
      </div>

      {/* BLOOD SPLASHES - Large */}
      <div className="absolute top-5 left-5 w-56 h-56 animate-blood-splash">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/50" fill="currentColor">
          <path d="M100 5C55 5 20 40 10 85C0 135 20 175 55 190C90 205 140 195 170 155C200 115 195 65 165 35C140 10 120 5 100 5Z"/>
        </svg>
      </div>

      <div className="absolute top-20 right-10 w-44 h-44 animate-blood-splash-delayed">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/40" fill="currentColor">
          <path d="M100 5C60 5 25 45 12 90C-1 135 20 170 50 188C80 206 130 195 160 160C190 125 195 75 165 40C140 10 120 5 100 5Z"/>
        </svg>
      </div>

      <div className="absolute bottom-10 left-1/4 w-40 h-40 animate-blood-splash-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/35" fill="currentColor">
          <path d="M100 5C70 5 35 40 20 80C5 125 25 160 55 180C85 200 130 190 158 155C186 120 190 75 165 40C145 15 120 5 100 5Z"/>
        </svg>
      </div>

      {/* BLOOD SPLASHES - Medium */}
      <div className="absolute top-1/2 right-1/4 w-32 h-32 animate-blood-splash-delayed" style={{ animationDelay: '0.6s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/30" fill="currentColor">
          <path d="M100 5C65 5 30 38 18 78C6 118 25 155 55 175C85 195 135 185 160 150C185 115 180 65 158 35C140 12 118 5 100 5Z"/>
        </svg>
      </div>

      {/* BLOOD SPLASHES - Small */}
      <div className="absolute top-16 left-1/3 w-20 h-20 animate-blood-splash-slow" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/25" fill="currentColor">
          <path d="M100 10C75 10 45 40 35 75C25 110 45 140 70 155C95 170 125 160 145 135C165 110 160 70 142 42C128 20 112 10 100 10Z"/>
        </svg>
      </div>

      <div className="absolute bottom-40 right-1/3 w-24 h-24 animate-blood-splash" style={{ animationDelay: '1.2s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/28" fill="currentColor">
          <path d="M100 10C72 10 40 38 28 78C16 118 35 150 65 168C95 186 130 178 152 148C174 118 170 72 148 40C132 18 115 10 100 10Z"/>
        </svg>
      </div>

      {/* BLOOD DRIPS - Heavy */}
      <div className="absolute top-0 left-8 w-2 h-28 bg-gradient-to-b from-[#990000] to-transparent animate-blood-drip"></div>
      <div className="absolute top-0 left-20 w-1.5 h-36 bg-gradient-to-b from-[#990000] to-transparent animate-blood-drip-fast"></div>
      <div className="absolute top-0 left-36 w-2.5 h-44 bg-gradient-to-b from-[#990000] to-transparent animate-blood-drip-slow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 right-40 w-1.5 h-32 bg-gradient-to-b from-[#990000] to-transparent animate-blood-drip-fast" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-0 right-16 w-2 h-40 bg-gradient-to-b from-[#990000] to-transparent animate-blood-drip" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-0 right-4 w-1 h-24 bg-gradient-to-b from-[#990000] to-transparent animate-blood-drip-fast" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-0 left-1/2 w-2 h-48 bg-gradient-to-b from-[#990000] to-transparent animate-blood-drip-slow" style={{ animationDelay: '0.8s' }}></div>

      {/* HANDPRINTS */}
      <div className="absolute top-1/3 right-5 w-28 h-32 animate-handprint" style={{ animationDelay: '0.8s' }}>
        <svg viewBox="0 0 200 240" className="w-full h-full text-[#990000]/30" fill="currentColor">
          <path d="M100 30C90 10 70 5 60 15C50 25 55 50 55 60L55 90C50 85 35 80 30 90C25 100 35 120 45 125L45 150C40 145 25 140 20 150C15 160 30 175 40 180L40 200C35 195 20 195 18 205C15 220 40 235 60 235L140 235C160 235 185 220 182 205C180 195 165 195 160 200L160 180C170 175 185 160 180 150C175 140 160 145 155 150L155 125C165 120 175 100 170 90C165 80 150 85 145 90L145 60C145 50 150 25 140 15C130 5 110 10 100 30Z"/>
        </svg>
      </div>

      <div className="absolute bottom-10 left-5 w-24 h-28 animate-handprint" style={{ animationDelay: '1.8s', transform: 'rotate(45deg)' }}>
        <svg viewBox="0 0 200 240" className="w-full h-full text-[#990000]/20" fill="currentColor">
          <path d="M100 30C90 10 70 5 60 15C50 25 55 50 55 60L55 90C50 85 35 80 30 90C25 100 35 120 45 125L45 150C40 145 25 140 20 150C15 160 30 175 40 180L40 200C35 195 20 195 18 205C15 220 40 235 60 235L140 235C160 235 185 220 182 205C180 195 165 195 160 200L160 180C170 175 185 160 180 150C175 140 160 145 155 150L155 125C165 120 175 100 170 90C165 80 150 85 145 90L145 60C145 50 150 25 140 15C130 5 110 10 100 30Z"/>
        </svg>
      </div>

      {/* BLOOD SPATTER DOTS */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-[#990000] rounded-full"
          style={{
            width: `${2 + Math.random() * 8}px`,
            height: `${2 + Math.random() * 8}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `bloodSplash ${0.5 + Math.random() * 1}s ease-out forwards`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}

      {/* BLOOD STREAKS on walls */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#990000]/30 via-[#990000]/10 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-[#990000]/15 to-[#990000]/30"></div>

      {/* Warning stripes */}
      <div className="absolute top-0 left-0 right-0 h-1.5 z-20" 
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E65100 0px, #E65100 20px, #1A1A1A 20px, #1A1A1A 25px)' }}>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-20" 
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E65100 0px, #E65100 20px, #1A1A1A 20px, #1A1A1A 25px)' }}>
      </div>

      {/* Red glow */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#990000] rounded-full opacity-10 blur-[120px] animate-pulse-red"></div>
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#E65100] rounded-full opacity-5 blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Author Introduction */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#990000]/30 border-2 border-[#990000]/60 text-[#E65100] px-5 py-2.5 mb-8 text-sm font-creepster tracking-widest animate-warning">
              <span className="w-2.5 h-2.5 bg-[#E65100] rounded-full animate-warning"></span>
              HORROR AUTHOR
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-creepster text-[#F5F5F5] mb-6 leading-tight tracking-wider animate-skew-in drop-shadow-[0_0_20px_rgba(153,0,0,0.5)] whitespace-nowrap">
            {authorInfo.name.toUpperCase()}
            </h1>

            <p className="text-2xl text-[#E65100] mb-6 font-nosifer tracking-wider animate-fade-in-up-delayed drop-shadow-[0_0_10px_rgba(230,81,0,0.4)]">
              Apocalypse Storyteller
            </p>

            <div className="w-32 h-1.5 bg-gradient-to-r from-[#990000] to-[#E65100] mb-8 mx-auto md:mx-0 animate-fade-in-up-delayed"></div>

            <p className="text-[#F5F5F5]/80 leading-relaxed max-w-lg mx-auto md:mx-0 font-creepster text-xl bg-[#990000]/10 border-2 border-[#990000]/20 p-6 animate-fade-in-up-delayed-2 tracking-wider"
              style={{ borderLeftWidth: '5px', borderLeftColor: '#E65100' }}>
              "{authorInfo.tagline}"
            </p>

            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-in-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-[#2D2D2D] text-[#E65100] text-xs font-oswald font-bold uppercase tracking-wider border-2 border-[#990000]/40 hover-lift">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delayed-2">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="px-8 py-4 bg-[#990000] text-[#F5F5F5] font-creepster text-lg tracking-wider hover:bg-[#770000] transition-all shadow-lg shadow-[#990000]/40 text-center hover-lift border-2 border-[#660000]"
              >
                About the Author
              </a>
              <a
                href="#book"
                onClick={(e) => handleScroll(e, '#book')}
                className="px-8 py-4 border-2 border-[#E65100] text-[#E65100] font-creepster text-lg tracking-wider hover:bg-[#E65100]/10 transition-all text-center hover-lift"
              >
                The Book
              </a>
            </div>
          </div>

          {/* Profile placeholder */}
          <div className="relative mx-auto max-w-sm animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#990000]/20 blur-xl animate-pulse-red"></div>
              <div className="relative bg-[#2D2D2D] shadow-2xl border-2 border-[#990000]/40 overflow-hidden"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                {/* Blood stains on profile frame */}
                <div className="absolute top-2 right-2 w-20 h-20 animate-blood-splash">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/40" fill="currentColor">
                    <path d="M100 10C65 10 35 45 25 85C15 125 35 160 65 180C95 200 135 190 158 155C181 120 180 75 158 42C140 18 120 10 100 10Z"/>
                  </svg>
                </div>
                <div className="absolute bottom-5 left-5 w-14 h-14 animate-blood-splash-delayed">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-[#990000]/35" fill="currentColor">
                    <path d="M100 10C72 10 42 42 30 82C18 122 35 155 62 172C89 189 128 180 150 150C172 120 170 78 150 45C134 20 118 10 100 10Z"/>
                  </svg>
                </div>
                <div className="aspect-square flex items-center justify-center relative">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4 font-creepster text-[#990000] animate-glitch drop-shadow-[0_0_15px_rgba(153,0,0,0.5)]">J</div>
                    <p className="text-2xl font-creepster text-[#F5F5F5] tracking-wider">{authorInfo.name.toUpperCase()}</p>
                    <p className="text-[#E65100] text-sm font-oswald uppercase tracking-widest mt-2">Author Photo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#E65100] text-[#1A1A1A] w-14 h-14 flex items-center justify-center font-creepster text-xl shadow-lg animate-warning border-2 border-[#cc4400]"
              style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
              !
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}