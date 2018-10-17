import React, { Component } from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import HomeSection from './Home_section.js'

class App extends Component {
  render() {
    return (
      <div className="container" role="main">
        <Header />
        <Nav />
        <HomeSection />
      </div>
    );
  }
}

export default App;
