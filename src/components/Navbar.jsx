import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center ml-10">
       
        <NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ac1616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gitlab"><path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"/></svg></NavLink>
    
        <span className="text-white font-semibold text-lg ml-5">NVC Training Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-white hover:text-black">Home</NavLink></li>
        <li><NavLink to="/about" className="text-white hover:text-black">Course</NavLink></li>
        
        <li><NavLink to="/contact" className="text-white hover:text-black">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar ;