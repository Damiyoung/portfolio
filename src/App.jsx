import React from 'react'
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experiance from "./components/Experiance/Experiance"
import Service from "./components/Service/Service"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonia from "./components/Testimonia/Testimonia"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Service/>
    <Portfolio/>

    <Contact/>
    <Footer/>
     
    </>
  )
}

export default App