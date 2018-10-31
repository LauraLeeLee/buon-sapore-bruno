import React, { Component } from 'react';
import PropTypes from 'prop-types';


// second part of info for food category page selected from Recipes nav
// will display the recipes list for chosen category
class RecipeList extends Component {
  static propTypes = {
    // view: PropTypes.string.isRequired,
    // navbarItems: PropTypes.array.isRequired,
    // categoryCat: PropTypes.string.isRequired,
    // recipes: PropTypes.array.isRequired,
    // navCat: PropTypes.string.isRequired
  }

  componentDidMount() {
  }

  render(){

    return(
      <div>
      <article className="recipebox">
        <ul className="recipe_ul">

          <li key=""
              className="recipe_li">
              <a href=""></a>
          </li>

        </ul>
      </article>
      </div>
    );
  }
}

export default RecipeList
