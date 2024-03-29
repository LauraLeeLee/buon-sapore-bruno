import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList.js';

class RecipeFilter extends Component {
  static propTypes = {
    fbRecipes: PropTypes.array.isRequired
  }

  render() {
    const {fbRecipes, match} = this.props;
    const currentCat = match.params.categoryId;
    const currentCatArray = currentCat.toLowerCase().split('-');

    const filteredItems = fbRecipes.filter(item =>
      item.category.every(cat =>
        currentCatArray.includes(cat))
    );

  return(
    <React.Fragment>
        <RecipeList filteredList={filteredItems}
                    match={match}/>
    </React.Fragment>
  );
  }
}

export default RecipeFilter
