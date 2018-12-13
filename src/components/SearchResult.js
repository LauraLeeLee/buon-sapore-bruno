import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import RecipeList from './RecipeList.js';
import PropTypes from 'prop-types';

function SearchResult (props) {
  const {recipes, match, filteredList } = props;
  console.log({filteredList});
  console.log({match});

    return(
      <React.Fragment>
      <section className="search_results">
        <RecipeList filteredList={filteredList}/>
      </section>
      </React.Fragment>
    );
}

export default SearchResult

// { (filteredList && filteredList.length > 0) && (
//   <div>
//   <p>Recipe List Goes here</p>
//     <RecipeList filteredList={filteredList}/>
//   </div>
// )}

// console.log({match});
// const Li = <ul className="recipe_list_ul">
//           {  recipesFound.map((item) => (
//              <li key={item.id}
//                  className="recipe_list_li">
//
//              </li>
//              ))}
//            </ul>
