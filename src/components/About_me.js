import React, { Component } from 'react';
import Nav from './Nav.js';
import AboutHeader from './About_header.js'

class AboutMe extends Component {
  render(){
    return(
      <div className="">
        <Nav />
        <AboutHeader />
     </div>
    );
  }
}

export default AboutMe;
