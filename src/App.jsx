
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="snap-y h-screen snap-mandatory overflow-y-scroll">
      <Hero />
      <About />
      <Navbar/>
    </div>
  )
}

export default App
