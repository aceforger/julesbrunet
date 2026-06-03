import { contactInfo, authorInfo, book } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#2D2D2D] relative overflow-hidden grunge-texture">
      {/* Warning stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E65100]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #E65100 0px, #E65100 15px, #2D2D2D 15px, #2D2D2D 20px)' }}>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-[#990000] flex items-center justify-center animate-pulse-red"
          style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
          <span className="text-2xl text-[#F5F5F5] font-bangers">!</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bangers text-[#F5F5F5] mb-6 tracking-wider animate-fade-in-up">
          Get the Book
        </h2>
        <p className="text-[#F5F5F5]/50 text-lg mb-12 max-w-md mx-auto font-roboto animate-fade-in-up-delayed">
          Contact {authorInfo.firstName} to order your copy of "{book.fullTitle}"
        </p>

        <div className="bg-[#1A1A1A] border-2 border-[#990000]/30 p-10 inline-block shadow-2xl animate-fade-in-up-delayed-2 hover-lift"
          style={{ clipPath: 'polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)' }}>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#E65100] text-[#F5F5F5] font-oswald font-bold uppercase tracking-[0.15em] hover:bg-[#cc4400] transition-all shadow-lg shadow-[#E65100]/30 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}