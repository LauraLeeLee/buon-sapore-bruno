import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipes2 from '../data/recipes2.js';
// import  * as RecipeFiles from '../data/recipes.json';

// second part of info for food category page selected from Recipes nav
// will display the recipes list for chosen category
class RecipeList extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    navbarItems: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired
  }

  componentDidMount() {
  }

  render(){
    const {navbarItems, view, recipes} = this.props;
    console.log(recipes);
    console.log({view});
    return(
      <div>
      <article className="recipebox">
        <ul className="recipe_ul">
        {recipes.map((recipe) => (
          (recipe.category.indexOf(view) > -1) &&
          <li key={recipe.name}
              className="recipe_li">
              <a href={`#${recipe.name}`}>{recipe.name}</a>
          </li>
        ))}

        </ul>
      </article>
      </div>
    );
  }
}

export default RecipeList
