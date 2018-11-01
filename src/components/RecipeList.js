import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  Link } from "react-router-dom";

function RecipeList (props) {
  const {recipes, match } = props;

  const paramsCat = match.params.categoryId;

  // const item = allCategories.find((item) =>
  //   item.name === paramsCat)

  const paramsCatArray = paramsCat.toLowerCase().split(" ");
  console.log({paramsCatArray});

  const items = recipes.filter(item =>
    item.category.every(cat =>
      paramsCatArray.includes(cat)));

    console.log({items});
    console.log({paramsCat});
    console.log({match});

  return(
    <div>
    <article className="recipebox">
      <ul className="recipe_ul">
       { items && items.map((item) => (
        <li key={item.id}
            className="recipe_li">
            <Link to="{`/${item.name}`}">{`${item.name}`}</Link>
        </li>
      ))}
      </ul>
    </article>
    </div>
  );
}


export default RecipeList
