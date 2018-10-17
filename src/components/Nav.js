import React, { Component } from 'react';


class Nav extends Component {
  render(){
    return(
      <div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><span>Recipes</span>
            <ul>
              <li><a href="menu/beefpage.html" className = "category">Beef</a></li>
              <li><a href="#" className = "category">Chicken</a></li>
              <li><a href="menu/pastapage.html" className = "category">Pasta, Pizza and Sauces</a></li>
              <li><a href="menu/seafood.html" className= "category">Seafood</a></li>
              <li><a href="menu/saladsouppage.html" className = "category">Salads & Soups</a></li>
              <li><a href="menu/dessertspage.html" className = "category">Desserts</a></li>
            </ul>
          </li>
          <li><a href="about.html">About Me</a></li>
        </ul>
      </nav>
      </div>
    );
  }

}

export default Nav;
