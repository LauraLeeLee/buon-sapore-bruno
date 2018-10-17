import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import Nav from './Nav.js';
import HomeSection from './Home_section.js'

class HomePage extends Component {
  static propTypes = {
    onNavigate: PropTypes.func.isRequired,
  }

  render(){
    return(
      <div className="image-section">
      <Header />
      <Nav onNavigate={this.onNavigate}/>
      <HomeSection />
     </div>
    );
  }
}

export default HomePage;
