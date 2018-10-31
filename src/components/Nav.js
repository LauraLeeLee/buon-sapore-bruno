import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  Link } from "react-router-dom";



class Nav extends Component {
  static propTypes = {
    // onNavigate: PropTypes.func.isRequired,
    allCategories: PropTypes.array.isRequired
  }

  constructor(props) {
   super(props);
   // this.clickhandler = this.clickHandler.bind(this);
 }

 componentDidMount() {
 //   const {navbarItems} = this.props.navbarItems;
 //   const navNames = navbarItems.map((item) =>
 //      item.name);
 //   this.setState({
 //     navbarItems: navNames
 //   });
 }

  // clickHandler = (event) => {
  // let navCat = event.target.innerText;
  //   this.props.onNavigate(navCat);
  //   console.log("nav item selected");
  //   console.log({navCat});
  // }

  render(){
    const {allCategories} = this.props;
    // if(catName.length>0){console.log(catName);}

    return(
      <div>
      <nav className="home-view-nav">
        <ul>
          <li>
           <Link to="/" >
           Home
           </Link>
          </li>
          <li><span>Recipes</span>
            <ul>
            {allCategories.map((item) =>(
              <li key={item.id}

                className="category">
              <Link to ={`/${item.name}`}>{item.name} </Link>
              </li>
            ))}
            </ul>
          </li>

          <li>
           <Link to="/About Me" onClick={this.clickHandler}>
           About Me
           </Link>
          </li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default Nav;
