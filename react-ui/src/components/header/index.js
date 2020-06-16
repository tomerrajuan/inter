import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header>
            <nav className="navbar">
        <Link to="/projects-cinema">Projects</Link>

        <a href="http://inter-audio.de/">InterAudio</a>
        <Link to="/contact">Contact</Link>
    </nav>
    </header>
   )

 }

export default Header