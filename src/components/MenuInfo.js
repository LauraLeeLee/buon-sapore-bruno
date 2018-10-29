import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipes2 from '../data/recipes2.js';
import BeefCat from '../images/beefCategory.jpg';
import NavCategories from '../data/nav_items.js';


// first part of info for food category page selected from Recipes nav
class MenuInfo extends Component {
  static propTypes = {
    categoryCat: PropTypes.string.isRequired,
    navbarItems: PropTypes.array.isRequired,
    // recipes: PropTypes.array.isRequired,
    navCat: PropTypes.string.isRequired,
    // navImg: PropTypes.string.isRequired
  }


  render(){
    const { categoryCat, navbarItems, navCat} = this.props;
    console.log({categoryCat});
    console.log({navCat});
    const navbarItemsCat = navbarItems.map(item =>item.category);
    const navbarItemsSrc = navbarItems.map(item =>item.src);
    console.log({navbarItemsSrc});

    return(
      <div>
      <article className="menu_info">
      {categoryCat && (
          <h2>{`${categoryCat} Recipes`}</h2>
      )}
    {/*What/how to compare to render the correct category image*/}
    {( categoryCat === navCat ) && (
          <img className="food_image" src={ `${navbarItems.src} `} alt={`${navbarItems.alt}`}/>
    )}
      </article>
      </div>
    );
  }
}

export default MenuInfo
