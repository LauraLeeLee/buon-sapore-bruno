import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './Home_page.js';
import AboutMe from './About_me.js';
import Nav from './Nav.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      navCat: ''
    }

    this.onNavigate = this.onNavigate.bind(this);
  }

  onNavigate  = (event, navCat) => {
    console.log(navCat);
    switch({navCat}) {
      case 'Home':
        this.setState({view: 'home'});
        break;
      case 'About Me':
        this.setState({view: 'about'});
        break;
      default: this.setState({view: 'home'});
    }
  }

  render() {
    const { view, navCat } = this.state;
    console.log({view});
    console.log({navCat});
    return (
      <div className="container" role="main">

        { this.state.view === 'home' && (
          <div>
            <Nav
              view={ view }
              navCat={ navCat }
              onNavigate={this.onNavigate}/>
            <HomePage
               view={ view }
               navCat={ navCat }
               onNavigate={this.onNavigate}
          />
        </div>
        )}

        {this.state.view === 'about' && (
          <div>
          <Nav view={ view }
               navCat={ navCat }
              onNavigate={this.onNavigate}/>
          <AboutMe />
          </div>
        )}

      </div>
    );
  }
}

export default App;
