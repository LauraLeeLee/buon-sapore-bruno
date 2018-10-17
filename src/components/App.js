import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './Home_page.js';
import AboutMe from './About_me.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'aboutMe',
    }
  }



  render() {
    return (
      <div className="container" role="main">
        { this.state.view === 'home' && (
          <HomePage />
        )}

        {this.state.view === 'aboutMe' && (
          <AboutMe />
        )}

      </div>
    );
  }
}

export default App;
