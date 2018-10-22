import React, { Component } from 'react';
import RecipesFiles from '../data/recipes.json';
// import  * as RecipeFiles from '../data/recipes.json';

class RecipeList extends Component {
  render(){
    return(
      <div>
      <article className="recipebox">
        <p> {RecipesFiles[0].name}</p>
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
