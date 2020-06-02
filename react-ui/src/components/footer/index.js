import React from 'react'
import './style.css'
/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <footer>
    <div className="footer-left">
        <a href="contact.html">Contact</a>
        <a href="impressium.html">Impressium</a>
        <a href="privacy.html">Privacy Policy</a>
        <p> Copyright © 2020 INTEROPA FILM GmbH - all rights reserved.</p>

    </div>
    <div className="footer-center">
        <h1>address: </h1>
        <p>INTEROPA FILM GmbH Harzer Str. 39 12059 Berlin, Germany</p>
    </div>
    <div className="footer-right">
    </div>
</footer>
   )

 }

export default Footer