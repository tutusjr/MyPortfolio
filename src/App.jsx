
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App snap-y h-screen snap-mandatory overflow-y-auto">
      <Navbar/>
      <Hero />
      <About />
    </div>
  )
}

export default App
