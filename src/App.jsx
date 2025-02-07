import Features from "./components/Features"
import FeaturesSlider from "./components/FeaturesSlider"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return(
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <FeaturesSlider/>
      <Footer/>
    </div>
  )
}

export default App
