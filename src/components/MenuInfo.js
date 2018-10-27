import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipes2 from '../data/recipes2.js';
import BeefCat from '../images/beefCategory.jpg';
import NavCategories from '../data/nav_items.js';


// first part of info for food category page selected from Recipes nav
class MenuInfo extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    // navbarItems: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired,
    navCat: PropTypes.string.isRequired,
    navImg: PropTypes.string.isRequired
  }


  render(){
    const { view, navCat, navImg } = this.props;
    console.log(view);
    // const navbarItemsCat = navbarItems.map(item =>item.category);
    // console.log({navbarItemsCat});

    // const viewSplit = view.toLowerCase().split(" ");
    // console.log({viewSplit});
    return(
      <div>
      <article className="menu_info">
      {view && (
          <h2>{`${view} Recipes`}</h2>
      )}
    {/*What/how to compare to render the correct category image*/}
    {/*}{( viewSplit === navbarItemsCat) && (
          <img className="food_image" src={ `${navbarItems.src} `} alt={`${navbarItems.alt}`}/>
    )}*/}
      </article>
      </div>
    );
  }
}

export default MenuInfo
