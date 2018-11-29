import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  Link } from "react-router-dom";

function RecipeList (props) {
  const {recipes, match, filteredList } = props;
  console.log({filteredList});

  const Li = <ul className="recipe_list_ul">
        {  filteredList.length>0 &&
          filteredList.map((item) => (
           <li key={item.id}
               className="recipe_list_li">
               <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
           </li>
           ))}
         </ul>
  const NoRecipes = (<p>No recipes yet! Check back soon!</p>)

  return(
    <React.Fragment>
      <article className="recipebox">
        {filteredList && filteredList.length ? Li : NoRecipes }
      </article>
    </React.Fragment>
  );
}

export default RecipeList
