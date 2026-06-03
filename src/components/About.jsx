import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#2D2D2D] relative overflow-hidden grunge-texture">
      {/* Warning stripe top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E65100]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E65100 0px, #E65100 15px, #2D2D2D 15px, #2D2D2D 20px)' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#990000]/20 border border-[#990000]/40 text-[#E65100] px-4 py-2 mb-4 text-sm font-oswald font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#E65100] rounded-full animate-warning"></span>
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-bangers text-[#F5F5F5] mb-4 tracking-wider">
            About the Madness
          </h2>
          <div className="w-20 h-1 bg-[#990000] mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio */}
          <div className="bg-[#1A1A1A] border border-[#990000]/20 p-8 animate-fade-in-up hover-lift"
            style={{ borderLeftWidth: '4px', borderLeftColor: '#E65100' }}>
            <p className="text-[#F5F5F5]/70 text-lg leading-relaxed font-roboto">
              {authorInfo.bio}
            </p>
          </div>

          {/* Roles */}
          <div className="flex flex-wrap gap-3 justify-center">
            {authorInfo.roles.map((role, i) => (
              <span key={i} className="px-5 py-3 bg-[#1A1A1A] text-[#E65100] text-sm font-oswald font-bold uppercase tracking-wider border border-[#990000]/30 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}>
                {role}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <div className="bg-[#990000]/10 border-2 border-dashed border-[#990000]/30 p-8 text-center animate-fade-in-up hover-lift">
            <p className="text-[#E65100] font-bangers text-2xl tracking-wider">
              "{authorInfo.tagline}"
            </p>
          </div>

          <a
            href={`mailto:${authorInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#990000] text-[#F5F5F5] font-oswald font-bold uppercase tracking-[0.15em] hover:bg-[#770000] transition-all shadow-lg shadow-[#990000]/30 hover-lift"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}