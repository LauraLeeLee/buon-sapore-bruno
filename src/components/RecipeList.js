import React, { Component } from 'react';
import PropTypes from 'prop-types';

function RecipeList (props) {
  const {recipes, match } = props;

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


export default RecipeList
