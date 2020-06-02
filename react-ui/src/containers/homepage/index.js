import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Welcome from '../../components/welcome'

/**
* @author
* @function Homepage
**/

const Homepage = (props) => {
  return(
    <div> 
      <Header/>
      <Welcome/>
      <Footer/>
    </div>
   )

 }

export default Homepage