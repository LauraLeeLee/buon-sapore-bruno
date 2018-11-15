import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import RecipeList from './RecipeList.js';
import PropTypes from 'prop-types';

function SearchResult (props) {
  const {recipes, match, recipesFound } = props;
  // console.log({match});
  // const Li = <ul className="recipe_list_ul">
  //           {  recipesFound.map((item) => (
  //              <li key={item.id}
  //                  className="recipe_list_li">
  //
  //              </li>
  //              ))}
  //            </ul>

    return(
      <React.Fragment>
      <article className="search-results">
      { recipesFound.length > 0 && (
        <div>
        <p>Recipe List Goes here</p>
          <RecipeList />
        </div>
      )}
      </article>
      </React.Fragment>
    );
}

export default SearchResult
