import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex_div'>
        <h2>TextUtils</h2>
        <ul className='ultag' style={{display:"flex"}}>
            <li><NavLink className="navlink" to="/">Home</NavLink></li>
            <li><NavLink className="navlink" to="/about">About</NavLink></li>
            <li><NavLink className="navlink" to="/contact">Contact</NavLink></li>
        </ul>
        {/* <button className='nabvar_btn'>Enable Dark Mode</button> */}
    </div>
  )
}

export default Navbar