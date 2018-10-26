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
    console.log({navCategory});
    const recipeCat = recipes.map((item) => item.category);
    console.log({recipeCat});
    const viewSplit = view.toLowerCase().split();
    console.log({viewSplit});
    return(
      <div>
      <article className="recipebox">
        <ul className="recipe_ul">
        {/*need to figure out how to compare the values in the
          two arrays- thus far not finding the correct way to do this */}
        {recipes.map((recipe) => (
          (recipe.category.includes(view.toLowerCase())) &&
          <li key={recipe.name}
              className="recipe_li">
              <a href={`#${recipe.name}`}>{recipe.name}</a>
          </li>
        ))}
        ==================================================
        {/* or this conditional? how to make it work to compare the
          proper values in each array??*/}
        {recipes.map((recipe) => (
          (recipe.category.filter((cat) => (
            viewSplit.includes(cat))) &&
          <li key={recipe.name}
              className="recipe_li">
              <a href={`#${recipe.name}`}>{recipe.name}</a>
          </li>
        )))}


        </ul>
      </article>
      </div>
    );
  }
}

export default RecipeList
