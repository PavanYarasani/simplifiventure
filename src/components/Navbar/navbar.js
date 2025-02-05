import "./navbar.css"
import  {NavLink} from "react-router-dom"
import React, { useState } from 'react';


const Navbar = () => {
  // State to track if the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);
  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
   
        <nav className="navbar">
          <div className="logo"> Simplifi Ventures</div>
          <div>
              {/* Conditional class based on menuOpen state */}
              <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><NavLink to="/team" className="nav-item">Team</NavLink></li>
                <li><NavLink to="/studio" className="nav-item"> Studio</NavLink></li> 
                <li><NavLink to="/resources" className="nav-item"> Resources</NavLink></li> 
              </ul> 
          {/* Hamburger menu, which triggers toggleMenu function */}
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
    </nav>

  );
};

export default Navbar;