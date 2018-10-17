import React, { Component } from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import HomeSection from './Home_section.js' 

class HomePage extends Component {
  render(){
    return(
      <div className="image-section">
      <Header />
      <Nav />
      <HomeSection />
     </div>
    );
  }
}

export default HomePage;
