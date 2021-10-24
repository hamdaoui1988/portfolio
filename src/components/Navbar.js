import React from "react"
import logo from '../logo.PNG'
function Navbar() {
    return (
        <div className="navbar">
          <img className="logo" src={logo} />
          <div className="right-navbar">
              <a href="#aboutme" className="right-home active">About me</a>
              <a href="#services" className="right-link">Services</a>
              <a href="#experiences" className="right-link">Experiences</a>
              <a href="#projects" className="right-link">My Projects</a>
              <a href="#contactme" className="right-link">Contact me</a>
          </div>
        </div>
       
    )
}

export default Navbar

