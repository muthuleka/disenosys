import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Signup from '../Components/Signup/Signup'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Routing

