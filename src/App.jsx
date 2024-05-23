import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Icons from './components/Icons'
import Footer from './components/Footer'
import Image from './components/Image'
import People from './components/People'
import End from './components/End'


function App() {
  return (
    <>
    <NavBar/>
    <Header/>
    <section className="features-icons bg-light text-center">
            <div className="container">
            <Icons/>
            </div>
        </section>
    <Image/>
    <People/>
    <End/>
    <Footer/>
    </>
  )
}

export default App