import { book } from '../data'

export default function BookDetail() {
  return (
    <section id="book" className="py-24 bg-[#1A1A1A] relative overflow-hidden grunge-texture">
      {/* Blood drips */}
      <div className="absolute top-0 right-10 w-1 h-16 bg-[#990000] rounded-full animate-blood-drip opacity-30" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 right-1/2 w-1.5 h-20 bg-[#990000] rounded-full animate-blood-drip opacity-20" style={{ animationDelay: '2.5s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#990000]/20 border border-[#990000]/40 text-[#E65100] px-4 py-2 mb-4 text-sm font-oswald font-bold uppercase tracking-widest animate-warning">
            <span className="w-2 h-2 bg-[#E65100] rounded-full"></span>
            The Book
          </div>
          <h2 className="text-4xl md:text-6xl font-bangers text-[#F5F5F5] mb-4 tracking-wider">
            {book.title}
          </h2>
          <p className="text-2xl text-[#E65100] font-bangers tracking-wider">{book.subtitle}</p>
          <div className="w-20 h-1 bg-[#990000] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Book Cover */}
          <div className="relative mx-auto max-w-sm animate-fade-in-up">
            <div className="bg-[#2D2D2D] shadow-2xl border-2 border-[#990000]/30 overflow-hidden hover-lift"
              style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}>
              <div className="aspect-[3/4]">
                <img
                  src={book.coverImage}
                  alt={book.fullTitle}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-[#1A1A1A]')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-12">
                        <div class="text-8xl mb-4 font-bangers text-[#990000] animate-glitch">Z</div>
                        <p class="text-2xl font-bangers text-[#F5F5F5] tracking-wider">${book.title}</p>
                      </div>
                    `
                  }}
                />
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6 animate-fade-in-up-delayed">
            <div className="flex flex-wrap gap-3">
              {book.themes.map((theme, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#990000]/10 text-[#E65100] text-xs font-oswald font-bold uppercase tracking-wider border border-[#990000]/30">
                  {theme}
                </span>
              ))}
            </div>

            <div className="bg-[#2D2D2D] border border-[#990000]/20 p-6 hover-lift"
              style={{ borderLeftWidth: '4px', borderLeftColor: '#E65100' }}>
              <p className="text-[#F5F5F5]/70 leading-relaxed font-roboto">
                {book.description}
              </p>
            </div>

            <p className="text-[#F5F5F5]/60 leading-relaxed font-roboto">
              {book.description2}
            </p>

            <div className="bg-[#990000]/10 border-2 border-dashed border-[#E65100]/30 p-6 hover-lift">
              <p className="text-[#E65100] font-bangers text-xl tracking-wider text-center">
                "{book.tagline}"
              </p>
            </div>

            <p className="text-[#F5F5F5]/50 leading-relaxed font-roboto text-sm">
              {book.description3}
            </p>

            <a
              href="#contact"
              className="w-full inline-block text-center px-8 py-4 bg-[#990000] text-[#F5F5F5] font-oswald font-bold uppercase tracking-[0.15em] hover:bg-[#770000] transition-all shadow-lg shadow-[#990000]/30 hover-lift"
            >
              Order This Book
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}