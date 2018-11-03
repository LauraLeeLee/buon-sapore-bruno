import React, { Component } from 'react';
import RecipeList from './RecipeList.js';


function Recipe (props) {
  const { recipes } = this.props;

  return(
    <div className="search-results">
      {recipesFound.length > 0 && (
        <RecipeList />
      )}

    </div>
  );

}
