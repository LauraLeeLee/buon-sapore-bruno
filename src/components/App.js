import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './Home_page.js';
import AboutMe from './About_me.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
    }

    this.onNavigate = this.onNavigate.bind(this);
  }

  onNavigate  = (event, navCat) => {
    switch(navCat) {
      case 'home':
        this.setState({view: 'home'})
        break;
      case 'aboutMe':
        this.setState({view: 'aboutMe'})
        break;
    }
  }

  render() {

    return (
      <div className="container" role="main">
        { this.state.view === 'home' && (
          <HomePage
          onNavigate={this.onNavigate}/>
        )}

        {this.state.view === 'aboutMe' && (
          <AboutMe />
        )}

      </div>
    );
  }
}

export default App;
