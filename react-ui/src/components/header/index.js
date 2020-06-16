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
        <Link to="/">Home</Link>

        <Link to="/projects-cinema">Projects</Link>

        <Link to="/contact">Contact</Link>
        <a id="interaudio" href="http://inter-audio.de/"  target="_blank">InterAudio</a>

    </nav>
    </header>
   )

 }

export default Header