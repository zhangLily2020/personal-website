
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import About from "./components/About.jsx"

const App = () => {
  return (
    <main className=" overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar/>
      <HeroSection/>
      <About/>
    </main>
  )
}


export default App