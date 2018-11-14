import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  NavLink } from "react-router-dom";



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
      <React.Fragment>
      <nav className="home-view-nav">
        <ul>
          <li>
           <NavLink activeClassName="active-link" exact to="/" >
              Home
           </NavLink>
          </li>
          <li><span>Recipes</span>
            <ul>
            {allCategories.map((item) =>(
              <li key={item.id}
                className="category">
              <NavLink activeClassName="active-link" to ={`/${item.name}`}>{item.name} </NavLink>
              </li>
            ))}
             <li>
             <NavLink activeClassName="active-link" to = "/Search">
                 Search All Recipes
             </NavLink>
             </li>
            </ul>
          </li>
          <li>
           <NavLink activeClassName="active-link" to="/About Me">
              About Me
           </NavLink>
          </li>
        </ul>
      </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
