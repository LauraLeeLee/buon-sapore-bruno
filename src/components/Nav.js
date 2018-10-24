import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavCategories from '../data/nav_items.js';


class Nav extends Component {
  static propTypes = {
    onNavigate: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
  }

  constructor(props) {
   super(props);
   this.state = {
     navbarItems: []
   }
   this.clickhandler = this.clickHandler.bind(this);
 }


 componentDidMount() {
   const navNames = NavCategories.map((item) =>
      item.name);
   this.setState({
     navbarItems: navNames
   });
 }

  clickHandler = (event) => {
  let navCat = event.target.innerText;
    this.props.onNavigate(navCat);
    console.log("nav item selected");
    console.log(navCat);
  }

  render(){
    const {navbarItems} = this.state;
    if(navbarItems.length>0){
      console.log(navbarItems);
    }
    return(
      <div>
      <nav className="home-view-nav">
        <ul>
          <li><a href="#home"
                  onClick={this.clickHandler}
                 >Home</a></li>
          <li><span>Recipes</span>
            <ul>
            {navbarItems.map((item) =>(
              <li key={item}
                onClick={this.clickHandler}
                className="category">
              <a href={`#${item}`}>{item} </a>
              </li>
            ))}
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
