import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import WhyChoose from './components/WhyChoose'
import About from './components/About'
import Footer from './components/Footer'
import PopUp from './components/PopUp'

function App() {
  const [showPopup,setShowPopup] = useState(false)
  const handlePopup = () =>{
    setShowPopup(true)
  }

  return (
    <div className='overflow-x-hidden'>
      <Navbar setShowPopup={setShowPopup}></Navbar>
      <Hero></Hero>
      <WhyChoose></WhyChoose>
      <About></About>
      <Banner></Banner>
      <Footer></Footer>
      <PopUp showPopup={showPopup} setShowPopup={setShowPopup}></PopUp>
    </div>
  )
}

export default App
