import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Nav extends Component {
  static propTypes = {
    onNavigate: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
  }

  constructor(props) {
   super(props);
   this.clickhandler = this.clickHandler.bind(this);
 }

  clickHandler = (event) => {
  let navCat = event.target.innerText;
    this.props.onNavigate(navCat);
    console.log("nav item selected");
    console.log(navCat);
  }

  render(){
    return(
      <div>
      <nav className="home-view-nav">
        <ul>
          <li><a href="#home"
                  onClick={this.clickHandler}
                 >Home</a></li>
          <li><span>Recipes</span>
            <ul>
              <li><a href="menu/beefpage.html" className="category">Beef</a></li>
              <li><a href="#chicken" className="category">Chicken</a></li>
              <li><a href="menu/pastapage.html" className="category">Pasta, Pizza and Sauces</a></li>
              <li><a href="menu/seafood.html" className="category">Seafood</a></li>
              <li><a href="menu/saladsouppage.html" className="category">Salads & Soups</a></li>
              <li><a href="menu/dessertspage.html" className="category">Desserts</a></li>
            </ul>
          </li>
          <li><a href="#about"
                  onClick={this.clickHandler}
                  >About Me</a></li>
        </ul>
      </nav>
      </div>
    );
  }

}

export default Nav;
