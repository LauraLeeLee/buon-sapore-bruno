import React, { Component } from 'react';
import Recipes2 from '../data/recipes2.js';
// import  * as RecipeFiles from '../data/recipes.json';

// second part of info for food category page selected from Recipes nav
// will display the recipes list for chosen category 
class RecipeList extends Component {
  render(){
    return(
      <div>
      <article className="recipebox">
        <p> {Recipes2[0].name}</p>
        <ul className="recipe_ul">
          <li className="recipe_li"><a href="../recipes/bisteccapizzaiola.html">Bistecca Pizzaiola</a></li>
          <li className="recipe_li"><a href="../recipes/meatballs.html">Meatballs</a></li>
          <li className="recipe_li"><a href="../recipes/rosemary_agnello.html">Rosemary Lamb</a></li>
          <li className="recipe_li"><a href="../recipes/braciole.html">Braciole</a></li>
          <li className="recipe_li"><a href="../recipes/osso_buco.html">Osso Buco</a></li>
        </ul>
      </article>
      </div>
    );
  }
}

export default RecipeList
