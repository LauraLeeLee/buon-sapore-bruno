import React, { Component } from 'react';
import PropTypes from 'prop-types';


// second part of info for food category page selected from Recipes nav
// will display the recipes list for chosen category
class RecipeList extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    navbarItems: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired,
    navCat: PropTypes.string.isRequired
  }

  componentDidMount() {
  }

  render(){
    const {navbarItems, view, recipes, navCat} = this.props;
    console.log(recipes);
    console.log({view});
    const navCategory = navbarItems.map((item) =>
         item.category);

    console.log(navCategory);
    return(
      <div>
      <article className="recipebox">
        <ul className="recipe_ul">
        {recipes.map((recipe) => (
          (recipe.category.includes(view.toLowerCase().split(" "))) &&
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
