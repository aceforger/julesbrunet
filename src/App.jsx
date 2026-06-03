import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BookDetail from './components/BookDetail'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <Hero />
      <About />
      <BookDetail />
      <Media />
      <Contact />
      <Footer />
    </div>
  )
}

export default App