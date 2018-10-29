import React, { Component } from 'react';
import PropTypes from 'prop-types';


// second part of info for food category page selected from Recipes nav
// will display the recipes list for chosen category
class RecipeList extends Component {
  static propTypes = {
    // view: PropTypes.string.isRequired,
    // navbarItems: PropTypes.array.isRequired,
    categoryCat: PropTypes.string.isRequired,
    recipes: PropTypes.array.isRequired,
    // navCat: PropTypes.string.isRequired
  }

  componentDidMount() {
  }

  render(){
    const { categoryCat, recipes } = this.props;
    console.log(recipes);
    console.log({categoryCat });

    return(
      <div>
      <article className="recipebox">
        <ul className="recipe_ul">
        {/*need to figure out how to compare the values in the
          two arrays- thus far not finding the correct way to do this */}
      {/*}{recipes.map((recipe) => (
          (recipe.category.includes(categoryCat.toLowerCase())) &&
          <li key={recipe.name}
              className="recipe_li">
              <a href={`#${recipe.name}`}>{recipe.name}</a>
          </li>
        ))}*/}
        ==================================================
        {/* or this conditional? how to make it work to compare the
          proper values in each array??*/}
        {/*}{recipes.map((recipe) => (
          (recipe.category.filter((cat) => (
            viewSplit.includes(cat))) &&
          <li key={recipe.name}
              className="recipe_li">
              <a href={`#${recipe.name}`}>{recipe.name}</a>
          </li>
        )))}*/}


        </ul>
      </article>
      </div>
    );
  }
}

export default RecipeList
