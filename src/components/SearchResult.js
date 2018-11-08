import React, { Component } from 'react';
import RecipeList from './RecipeList.js';


function Recipe (props) {
  const { recipes } = this.props;

  return(
    <React.Fragment>
    <article className="search-results">
      {recipesFound.length > 0 && (
        <RecipeList />
      )}

    </article>
    </React.Fragment>
  );

}
