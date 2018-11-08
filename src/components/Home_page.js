import React, { Component } from 'react';
import Header from './Header.js';
import HomeSection from './Home_section.js';

class HomePage extends Component {
  render(){
    return(
      <React.Fragment>
        <Header />
        <HomeSection />
     </React.Fragment>
    );
  }
}

export default HomePage;
