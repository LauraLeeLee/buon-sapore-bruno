import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  NavLink } from "react-router-dom";


class Nav extends Component {
  static propTypes = {
    // onNavigate: PropTypes.func.isRequired,
    allCategories: PropTypes.object.isRequired,
  }

  constructor(props) {
   super(props);
   this.state = {
     categories: []
   }
   // this.clickhandler = this.clickHandler.bind(this);
 }

 // componentDidMount() {
 //   const allCategories = this.props.allCategories;
 //   // if (this.state.categories !== prevState.categories){
 //
 //   // const catArray =Object.entries(allCategories).map((item) =>
 //   //    item.name);
 //   // const catArray = {for (item in allCategories) {
 //   //   <li key={item.id}
 //   //     className="category">
 //   //   <NavLink activeClassName="active-link" to ={`/${item.name}`}>{item.name} </NavLink>
 //   //   </li>
 //   //  }}
 //
 //
 //     this.setState({
 //       categories: catArray
 //     });
 //     console.log(catArray);
 //     console.log({allCategories});
 // }
//




// Map over an array of objects

// Recipes2 is the array of objects
// Recipe is the item in the array,
// Index is the..postion?? <— works without this parameter




  // clickHandler = (event) => {
  // let navCat = event.target.innerText;
  //   this.props.onNavigate(navCat);
  //   console.log("nav item selected");
  //   console.log({navCat});
  // }

  render(){
    const {allCategories} = this.props;
    const {categories} = this.state;
    // if(catName.length>0){console.log(catName);}
    console.log({allCategories});
    console.log({categories});

    function CategoryLi(props) {
     for (const item in allCategories) {
       let Li = <li key={item.id}
         className="category">
       <NavLink activeClassName="active-link" to ={`/${item.name}`}>{item.name} </NavLink>
       </li>
     }
   }


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
              <CategoryLi />


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
