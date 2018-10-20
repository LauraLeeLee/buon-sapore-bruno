import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import Nav from './Nav.js';
import HomeSection from './Home_section.js'



class HomePage extends Component {
  static propTypes = {
    onNavigate: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    navCat: PropTypes.string.isRequired
  }

  render(){
    const {navCat} = this.props.navCat;
    return(
      <div className="image-section">
      <Header />
      <HomeSection />
     </div>
    );
  }
}

export default HomePage;
