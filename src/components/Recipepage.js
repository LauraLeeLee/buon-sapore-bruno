import React, { Component } from 'react';


function Recipe (props) {
  const {recipes, match } = props;
  const paramsRecipeId = match.params.recipeId;

  const recipesId = recipes.map(recipe => recipe.id);

  console.log({recipesId});
  console.log({paramsRecipeId});

  const selectedId = recipesId === paramsRecipeId;
  console.log({selectedId});

  const recipe = recipes.find( recipe =>
    recipe.id === paramsRecipeId);

  console.log({recipe});
  // console.log(recipe.ingredients);

  return (
    <div className="recipe_container">
    <article className="recipecard">
      { recipe && (
        <h3>{`${recipe.name}`}</h3>
      )}
        <p>Description</p>
        <h4>Ingredients</h4>
        <ul className="recipe_ul">
        {recipe && (
          <li key={recipe.ingredients}
              className="recipe_li">
          {recipe.ingredients}
          </li>
        )}
        </ul>
        <h4>Directions</h4>
        <ul className="recipe_ul">
        {recipe && (
          <li key={recipe.directions}
              className="recipe_li">
          {recipe.directions}
          </li>
        )}
        </ul>

      </article>
    </div>
  );
}

export default Recipe
