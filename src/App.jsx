import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import './App.css'
const App = () => {
  return (
    <div className='app-container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
