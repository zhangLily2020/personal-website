
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import About from "./components/About.jsx"
import Project from "./components/Project.jsx"
import Skills from "./components/Skills.jsx"
import ContactForm from "./components/ContactForm.jsx"
import Footer from "./components/Footer.jsx"
import Experience from "./components/Experience.jsx"

const App = () => {
  return (
    <main className=" overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Experience/>
      <Project/>
      <Skills/>
      <ContactForm/>
      <Footer/>
    </main>
  )
}


export default App