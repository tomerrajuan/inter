import React from 'react'
import './style.css'

/**
* @author
* @function Welcome
**/

const Welcome = (props) => {
  return(
      

<section id="welcome">
        <div className="contact-head">
            <div id="logo">
                <img src="interopa.png" alt=""/>
            </div>
            <div className="contact-message">
                INTEROPA Film GmbH Synchronisationen
            </div>
        </div>
        <div id="welcome_message">
            <h1>
                <strong>INTEROPA </strong>Film GmbH is a leading company in the world of <strong>Movies</strong> and <strong>TV</strong> dubbing
            </h1>
        </div>
    </section>

   )

 }

export default Welcome