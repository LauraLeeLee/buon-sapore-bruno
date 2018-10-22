import React, { Component } from 'react';
import RecipesFiles from '../data/recipes.json';
// import  * as RecipeFiles from '../data/recipes.json';
import BeefCat from '../images/beefCategory.jpg';
import NavItems from '../data/nav_items.json';

class MenuInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
    }
  }

  render(){
    return(
      <div>
      <article className="menu_info">

        <h2>Beef Recipes</h2>
        <img className="food_image" src={ BeefCat } alt="image of beef"/>
      </article>
      </div>
    );
  }
}

export default MenuInfo
