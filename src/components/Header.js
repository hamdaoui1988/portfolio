import React from "react"
import Typed from "react-typed"
function Header() {
    return (
        <div className="header-wrapper">
             <div className="main-info">
             <div class="text-1">Hello, my Name Is</div>
            <div class="text-2">Hamdaoui Nour Eddine</div>
            <div class="text-3">And I'am <span><Typed
              className="typed-text"
              strings={[" a Web Developer"," a Person Who Loves Coding"," a Problem's Solver",]}
              typeSpeed={40}
              backSpeed={60}
              loop
             />
             
             
             </span></div>
             <a href="#" className="hire-me">Hire Me</a>
             
             </div>
            
        </div>
    )
}

export default Header
