import React, { Component } from 'react';
import HomeGreeting from './Home_greeting.js';
import HomeImage from './Home_image.js';


class HomeSection extends Component {
  render(){
    return(
      <div>
        <section className="home_section">
          <HomeImage />
          <HomeGreeting />
        </section>
      </div>
    );
  }
}

export default HomeSection;
