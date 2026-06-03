export default function Media() {
  return (
    <section id="media" className="py-24 bg-[#1A1A1A] relative overflow-hidden grunge-texture">
      {/* Blood drips */}
      <div className="absolute top-0 left-20 w-1 h-12 bg-[#990000] rounded-full animate-blood-drip opacity-30" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-0 right-1/3 w-1.5 h-16 bg-[#990000] rounded-full animate-blood-drip opacity-25" style={{ animationDelay: '3.5s' }}></div>

      {/* Warning stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E65100]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E65100 0px, #E65100 15px, #1A1A1A 15px, #1A1A1A 20px)' }}>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#990000]/20 border border-[#990000]/40 text-[#E65100] px-4 py-2 mb-4 text-sm font-oswald font-bold uppercase tracking-widest animate-warning">
            <span className="w-2 h-2 bg-[#E65100] rounded-full"></span>
            Media
          </div>
          <h2 className="text-4xl md:text-5xl font-bangers text-[#F5F5F5] mb-4 tracking-wider">
            Watch & Listen
          </h2>
          <p className="text-[#F5F5F5]/50 text-lg font-roboto max-w-xl mx-auto">
            Dive deeper into the apocalyptic world of The Dead Walk
          </p>
          <div className="w-20 h-1 bg-[#990000] mx-auto mt-6"></div>
        </div>

        {/* Video Embed */}
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="bg-[#2D2D2D] border-2 border-[#990000]/30 overflow-hidden shadow-2xl hover-lift"
            style={{ clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)' }}>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/g7Le_AOY7wA"
                title="Jules Brunet - The Dead Walk"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video info */}
          <div className="flex items-center justify-between mt-6 px-4">
            <div>
              <p className="text-[#F5F5F5] font-oswald font-bold uppercase tracking-wider text-lg">Featured Video</p>
              <p className="text-[#F5F5F5]/40 font-roboto text-sm">The Dead Walk: Holy Shit Zombies 2</p>
            </div>
            <a
              href="https://youtu.be/g7Le_AOY7wA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#990000] text-[#F5F5F5] font-oswald font-bold uppercase tracking-[0.1em] text-sm hover:bg-[#770000] transition-all shadow-lg shadow-[#990000]/20 hover-lift flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-[#990000]/10 border-2 border-dashed border-[#990000]/30 p-8 inline-block hover-lift">
            <p className="text-[#E65100] font-bangers text-2xl tracking-wider mb-4">
              Want More Apocalyptic Content?
            </p>
            <p className="text-[#F5F5F5]/50 font-roboto text-sm mb-6">
              Subscribe for updates on new releases and exclusive content
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E65100] text-[#F5F5F5] font-oswald font-bold uppercase tracking-[0.15em] hover:bg-[#cc4400] transition-all shadow-lg shadow-[#E65100]/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}