import React, { Component } from 'react';

class HomeGreeting extends Component {
  render(){
    return(
      <div className="greeting-section">
       <h2 className="greeting">Benvenuti!</h2>
       <p>Welcome to my website! It is a collection of Italian recipes,<br/>
       culture, and maybe even a little bit of the language.<br/>
       I hope you enjoy!
       </p>
      </div>
    );
  }
}

export default HomeGreeting;
