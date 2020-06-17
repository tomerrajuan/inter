import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <footer>
    <div className="footer-left">
    <Link to="/contact">Contact</Link>

        <a href="impressium.html">Impressium</a>
        <a href="privacy.html">Privacy Policy</a>
        <p> Copyright © 2020 INTEROPA FILM GmbH - all rights reserved.</p>

    </div>
    <div className="footer-center">

    </div>
    <div className="footer-right">
                 <h1>Address: </h1>
                  <p>INTEROPA FILM GmbH Harzer Str. 39, 12059 Berlin, Germany</p>
                  <p id="footer-tel">Phone: +49 (0) 30 68 98 96 0</p>
                    <p id="footer-tel">Fax: +49 (0) 30 68 98 96 44</p>
    </div>
</footer>
   )

 }

export default Footer