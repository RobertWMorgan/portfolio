import { useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Experience from './components/experience'
import Interests from './components/interests'



const App = () => {
  return (
    <>
      <Navbar />
      <div className='site-wrapper'>
        <Sidebar />
        <About />
        <Projects />
        <Experience />
        <Interests />
      </div>
    </>

  )
}

export default App
