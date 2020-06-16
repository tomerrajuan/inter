import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Map from '../map'
import './style.css'


/**
* @author
* @function Contact
**/

const Contact = (props) => {


  return(
    <div>
<Header/>

    <section id="contact">
        <div class="contact-head">
            <div id="logo">
                <img src="interopa.png" alt=""/>
            </div>
            <div class="contact-message">
                Feel free to contact us:
            </div>
        </div>

        <div class="contact-list">
            <div class="contact-list-box">
                <div class="contact-list-item">
                    <div class="contact-list-item-info"><h1>INTEROPA FILM GmbH</h1>
                    
                    <p>Phone: +49 (0) 30 68 98 96 0</p>
                    <p>Fax: +49 (0) 30 68 98 96 44</p>
                    <h2> <a href="mailto:info@interopa.de">info@interopa.de</a></h2></div>
                    <img id="contact-person-img" src="interopa.png"></img>
                    
                </div>
                <div class="contact-list-item">
                <div class="contact-list-item-info"><h1>Managing Director</h1>
                    <p>Thomas Braune</p>
                    <p>+49 (0) 30 68 98 96 31</p>
                    <h2>
                    <a href="mailto:braune@interopa.de">braune@interopa.de</a>

                    </h2>
                    </div>
                        <img id="contact-person-img" src="default.jpg"></img>

                    
                </div>
                <div class="contact-list-item">
                <div class="contact-list-item-info">                
                
                <h1>Head of Production</h1>
                    <p>Philipp Cassau</p>
                    <p>+49 (0) 30 68 98 96 43</p>
                    <h2>
                        <a href="mailto:cassau@interopa.de">cassau@interopa.de</a>
                    </h2>
                    </div>
                    <img id="contact-person-img" src="default.jpg"></img>

    
                </div>
                <div class="contact-list-item">
                <div class="contact-list-item-info">

                <h1>Production Managers</h1>
                    <p>Olaf Raschdorff</p>
                    <p>+49 (0) 30 68 98 96 21</p>
                    <h2>
                        <a href="mailto:raschdorff@interopa.de">raschdorff@interopa.de</a>
                    </h2>
                </div>
                <img id="contact-person-img" src="default.jpg"></img>

                </div>
                <div class="contact-list-item">
                <div class="contact-list-item-info">
                <p>Jina Cho</p>
                    <p>+49 (0) 30 68 98 96 24</p>
                    <h2>
                        <a href="mailto:cho@interopa.de">cho@interopa.de</a>
                    </h2>

                </div>
                <img id="contact-person-img" src="default.jpg"></img>

                    
                </div>
                <div class="contact-list-item">
                <div class="contact-list-item-info">
                <p>Helen Wilke</p>
                    <p>+49 (0) 30 68 98 96 52</p>
                    <h2>
                        <a href="mailto:wilke@interopa.de">wilke@interopa.de</a>
                    </h2>

                </div>

                <img id="contact-person-img" src="default.jpg"></img>
                   
                </div>
                <div class="contact-list-item">
                <div class="contact-list-item-info">
                <h1>Head of Technical Services & Cutting Dept.</h1>
                    <p>Barbara Hasenleder</p>
                    <p>+49 (0) 30 68 98 96 12</p>
                    <h2>
                        <a href="mailto:hasenleder@interopa.de">hasenleder@interopa.de</a>
                    </h2>
                </div>
                <img id="contact-person-img" src="default.jpg"></img>
                    
                </div>
            </div>
            <div id="address">
                 <h1>address: </h1>
                  <p>INTEROPA FILM GmbH Harzer Str. 39, 12059 Berlin, Germany</p>
            <Map/>
            </div>
         

        </div>
    </section>
    <Footer/>
    </div>
   )
  
 }

export default Contact