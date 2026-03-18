import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;