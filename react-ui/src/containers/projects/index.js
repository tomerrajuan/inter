import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Uploader from '../../components/uploader'
import aDogsPurpose from './projects-images/a-dogs-purpose.jpg'
import alianCovenant from './projects-images/alian-covenant.jpg'
import allEyesOnMe from './projects-images/all-eyes-on-me.jpg'
import chips from './projects-images/chips.jpg'
import daddysHome2 from './projects-images/daddys-home-2.jpg'
import deadpool from './projects-images/deadpool.jpg'
import theBookOfHenry from './projects-images/the-book-of-henry.jpg'
import theCommuter from './projects-images/the-commuter.jpg'
import theDarkestHour from './projects-images/the-darkest-hour.jpg'
import './style.css'

/**
* @author
* @function Projects
**/

const Projects = (props) => {
  return(
      <div>
            <header>
    <nav className="navbar">
    <Link to="/contact">Services</Link>
        <a href="http://inter-audio.de/">InterAudio</a>
        <Link to="/projects">Projects</Link>
        <Link to="/">Home</Link>
    </nav>
</header>
<div className="contact-head">
            <div id="logo">
                <img src="interopa.png" alt=""/>
            </div>
            <p>Here are some of the many projects we have worked on</p>
            <nav className="navbar-projects">
                <Link to="/projects">Theatrical</Link>
                <a href="movies.html">Movies</a>
                <a href="series.html">Series</a>
                <a href="animation-theater.html">Animation/Theatrical</a>
                <a href="animation-tv.html">Animation/TV</a>
            </nav>
            <Uploader/>
        </div>
 
              <div className="imageList">
      <img className="image-in-imageList" src={aDogsPurpose} alt=" "/>
      <img className="image-in-imageList" src={alianCovenant} alt=" "/>
      <img className="image-in-imageList" src={allEyesOnMe} alt=" "/>
      <img className="image-in-imageList" src={chips} alt=" "/>
      <img className="image-in-imageList" src={deadpool} alt=" "/>
      <img className="image-in-imageList" src={theBookOfHenry} alt=" "/>
      <img className="image-in-imageList" src= {theCommuter} alt=" "/>
      <img className="image-in-imageList" src= {theDarkestHour} alt=" "/>
      <img className="image-in-imageList" src= {daddysHome2} alt=" "/>
      </div>
    <Footer/>
  </div>
   )

 }

export default Projects