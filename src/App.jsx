import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

import About from "./components/About.jsx"


function App() {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <About />
      <Footer />
    </>
  )
}

export default App
